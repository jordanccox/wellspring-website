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
    const regex = /[0-9]*/g;
    const match = event.target.value.match(regex);
    const oldValue = match.filter((char) => Number(char)).join("");
    const newValue = oldValue.slice(0, oldValue.length - 1);
    event.target.value = newValue;
  }

  if (event.target.value.length == 10) {
    const phoneNumber = event.target.value;
    document.querySelector("#PhoneNumber_countrycode").value = phoneNumber.slice(0, 3);
    document.querySelector("#PhoneNumber_first").value = phoneNumber.slice(3, 6);
    document.querySelector("#PhoneNumber_second").value = phoneNumber.slice(6);
    document.querySelector("#phone").value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`
  }
};