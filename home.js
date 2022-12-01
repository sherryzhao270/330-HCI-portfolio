
var accounts = { "tianxizhao2024@u.northwestern.edu": { "username": "Sherry", "password": "sherry123", "email": "tianxizhao2024@u.northwestern.edu", "phone": "2167780457" } };
var currentUser = localStorage;

currentUser.length > 0
    ? document.getElementById("account-name").innerHTML = currentUser.username
    : document.getElementById("account-name").innerHTML = 'Account'

/* Modal */
const openModal = (id) => {
    let modal = document.getElementById(id);
    modal.style.display = "block";
}

const closeModal = (id) => {
    let modal = document.getElementById(id);
    modal.style.display = "none";
}

/* Account */
const handleCreateAccount = (e) => {
    e.preventDefault()

    let username = e.target[0].value,
        email = e.target[1].value,
        phone = e.target[2].value,
        password1 = e.target[3].value,
        password2 = e.target[4].value

    email in accounts
        // account already exist, return error
        ? document.getElementById("create-account-error").innerHTML = "Account Existed"
        // account not exist
        : password1 === password2
            // password match, add to accounts
            ? (accounts[email] = { "username": username, "password": password1, "email": email, "phone": phone },
                closeModal("create-account-modal"),
                currentUser = { "username": username, "password": password1, "email": email, "phone": phone },
                Object.keys(currentUser).map((key) => localStorage.setItem(key, currentUser[key])),
                document.getElementById("account-name").innerHTML = username,
                document.getElementById("create-account-error").innerHTML = "Account created")
            // password not match, return error
            : document.getElementById("create-account-error").innerHTML = "Password not match"

}

const handleLogin = (e) => {
    e.preventDefault()

    let email = e.target[0].value,
        password = e.target[1].value

    email in accounts
        // account exist
        ? accounts[email].password === password
            // password correct, login
            ? (closeModal("login-modal"),
                currentUser = accounts[email],
                Object.keys(currentUser).map((key) => localStorage.setItem(key, currentUser[key])),
                document.getElementById("account-name").innerHTML = currentUser.username)
            // password not correct, return error
            : document.getElementById("login-error").innerHTML = "Incorrect username or password"
        // account exist, return error
        : document.getElementById("login-error").innerHTML = "Incorrect username or password"

}

const handleLogout = () => {
    Object.keys(currentUser).map((key) => localStorage.removeItem(key))
    currentUser = null;
    document.getElementById("account-name").innerHTML = 'Account';
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLogin);

const createAccountForm = document.getElementById('create-account-form');
createAccountForm.addEventListener('submit', handleCreateAccount);

