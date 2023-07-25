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

const contactsFilePath = path.join(__dirname, 'contactsData.json');

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

  
fs.readFile(contactsFilePath, 'utf8', (err, existingData) => {
  if (err && err.code !== 'ENOENT') {
    console.error(err);
    return res.status(500).json({ error: 'Failed to read the data file.' });
  }

  const contactsData = existingData ? JSON.parse(existingData) : [];
  contactsData.push(data);

  // Write the updated data to the file
  fs.writeFile(contactsFilePath, JSON.stringify(contactsData, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to save the data.' });
    }
    console.log('Data saved successfully:', data);
    res.status(200).json({ message: 'Data saved successfully.' });
    });
  });
});


//PORT listener
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});
