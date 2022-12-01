var currentUser = localStorage

const displayUserProfile = () => {
    let profile = document.getElementById("user-profile-content")
    profile.innerHTML = `<div> Username: ${currentUser.username} </div>
                        <div> Email: <a href="mailto:${currentUser.email}">${currentUser.email}</a> </div>
                        <div> Phone: <a href="tel:${currentUser.phone}">${currentUser.phone}</a> </div>`
}

displayUserProfile()