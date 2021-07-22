let adminUsername = "Excellence";
let adminPassword = "michael";

const validate = () => {
	let username = uName.value;
	let Upassword = password.value;
	if (adminUsername == username && adminPassword == Upassword) {
		window.location = "adminPage.html";
	}
}