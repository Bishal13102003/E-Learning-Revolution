function verifyLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
	
    var correctUsername = "Bishal";
    var correctPassword = "123456789";

    if (username === correctUsername && password === correctPassword) {
        alert("Correct username and password!");
    } else {
        alert("Wrong username or password. Please try again.");
    }
}
