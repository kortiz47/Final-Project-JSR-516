//
const contactForm = document.querySelector('#contactUsForm');

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

  axios
    .post('http://localhost:3001/contact', formData)
    .then((response) => {
      console.log(response.data.message);
      alert('Contact information submitted successfully! Be on the lookout for an email from A&E Handyman!');
      contactForm.reset();
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to submit contact information. Please try again.');
    });
});
