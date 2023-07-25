//libraries
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001

//Middleware
const app = express()

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Save contact information to internal server
app.post('/contact', (req, res)=>{
  const { fullName, email, phoneNumber, message } = req.body;
  const data = {
    fullName,
    email,
    phoneNumber,
    message,
    timestamp: new Date().toISOString(),
  };
  fs.appendFile(
    path.join(__dirname, 'contacts.txt'),
    JSON.stringify(data) + '\n',
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to save the data.' });
      }
      console.log('Data saved successfully:', data);
      res.status(200).json({ message: 'Data saved successfully.' });
    }
  );
});

//PORT listener
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
