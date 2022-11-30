
var accounts = [{ "username": "Sherry", "password": "sherry123" }]
var currentUser = localStorage.getItem("username");

currentUser
    ? document.getElementById("account-name").innerHTML = currentUser
    : document.getElementById("account-name").innerHTML = 'Account'

const openModal = (id) => {
    let modal = document.getElementById(id);
    modal.style.display = "block";
}

const closeModal = (id) => {
    let modal = document.getElementById(id);
    modal.style.display = "none";
}

const handleCreateAccount = (e) => {
    e.preventDefault()
    let username = e.target.username.value,
        password1 = e.target.password1.value,
        password2 = e.target.password2.value

    accounts.filter(account => account.username === username)
        ? document.getElementById("create-account-error").innerHTML = "Account Existed"
        : password1 === password2
            ? (accounts.push({ "username": username, "password": password1 },
                closeModal("create-account-modal"),
                localStorage.setItem("username", username),
                currentUser = username,
                document.getElementById("account-name").innerHTML = username),
                document.getElementById("create-account-error").innerHTML = "Account created")
            : document.getElementById("create-account-error").innerHTML = "Password not match"

}

const handleLogin = (e) => {
    e.preventDefault()

    let username = e.target[0].value,
        password = e.target[1].value

    let currAccount = accounts.filter(account => account.username === username);

    currAccount
        ? currAccount[0].password === password
            ? (closeModal("login-modal"),
                localStorage.setItem("username", username),
                currentUser = username,
                document.getElementById("account-name").innerHTML = currentUser)
            : document.getElementById("login-error").innerHTML = "Incorrect username or password"
        : document.getElementById("login-error").innerHTML = "Incorrect username or password"

}

const handleLogout = () => {
    
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLogin);
