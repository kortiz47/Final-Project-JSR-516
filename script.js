//variables - grabbing the form from index.html
const contactForm = document.querySelector('#contactUsForm');

//Event Listener - prevents the default and the data is saved when the submit button is clicked into the internal server and contactData.json - triggers the event
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = contactForm.fullName.value;
  const email = contactForm.email.value;
  const phoneNumber = contactForm.phoneNumber.value;
  const message = contactForm.message.value;

  const formData = {
    fullName,
    email,
    phoneNumber,
    message,
  };

//post request using the axios library - it alerts the user if their data was saved or not to our internal backend server
  axios
  //information saved successfully
    .post('http://localhost:3001/contact', formData)
    .then((response) => {
      console.log(response.data.message);
      alert('Contact information submitted successfully! Be on the lookout for an email from A&E Handyman!');
      contactForm.reset();
    })
    //information error
    .catch((error) => {
      console.error(error);
      alert('Failed to submit contact information. Please try again.');
    });
});
