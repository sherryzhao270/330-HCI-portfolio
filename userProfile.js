var currentUser = localStorage

const displayUserProfile = () => {
    let profile = document.getElementById("user-profile-content")
    profile && currentUser
        ? currentUser.identity === "admin"
            ? profile.innerHTML = `<div> Username: ${currentUser.username} </div>
                            <div> Email: <a href="mailto:${currentUser.email}">${currentUser.email}</a> </div>
                            <div> Phone: <a href="tel:${currentUser.phone}">${currentUser.phone}</a> </div>
                            <div><button class="all-user-btn"> View All Users </button></div>`
            : profile.innerHTML = `<div> Username: ${currentUser.username} </div>
                            <div> Email: <a href="mailto:${currentUser.email}">${currentUser.email}</a> </div>
                            <div> Phone: <a href="tel:${currentUser.phone}">${currentUser.phone}</a> </div>`
        : profile.innerHTML = `<div> Guest </div>`


}

displayUserProfile()