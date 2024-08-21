function validateForm() {

    var firstname = document.getElementsByName("firstname")[0].value;
    var lastname = document.getElementsByName("lastname")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var address = document.getElementsByName("address")[0].value;
    var city = document.getElementsByName("city")[0].value;
    var contact = document.getElementsByName("contact")[0].value;
    var gender = document.getElementsByName("gender")[0].value;

    var symbols = /^[a-zA-Z\s]+$/;
    if (!symbols.test(firstname)) {
        alert("First name must contain only letters.");
        return false;
    }
    if (!symbols.test(lastname)) {
        alert("Last name must contain only letters.");
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address with @ and a domain.");
    }
    if (!symbols.test(address)) {
        alert("Address must contain only letters.");
    }
    if (!symbols.test(city)) {
        alert("City must contain only letters.");
    }
    if (!/^[A-Za-z.,@#*]+$/.test(contact)) {
        alert("Contact must contain only numbers.");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
    }
    return true;
}
