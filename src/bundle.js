/**
 * Ensures only numbers can be entered in phone number field in contact form
 * @param event - DOM Event 
 */
const formatPhoneNumber = (event) => {
  event.preventDefault();
  if (!isNaN(Number(event.key)) && event.target.value.length <= 9) {
    event.target.value += event.key;
  }

  if (event.key == "Backspace") {
    const newValue = event.target.value.slice(0, event.target.value.length - 1);
    event.target.value = newValue;
  }
};