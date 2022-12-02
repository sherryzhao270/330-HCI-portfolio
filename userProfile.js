var currentUser = localStorage

const displayUserProfile = () => {
    let profile = document.getElementById("user-profile-content")
    
    if (profile) {
        currentUser
            ? profile.innerHTML = `<div> Username: ${currentUser.username} </div>
                            <div> Email: <a href="mailto:${currentUser.email}">${currentUser.email}</a> </div>
                            <div> Phone: <a href="tel:${currentUser.phone}">${currentUser.phone}</a> </div>
                            <div> Account type: ${currentUser.accountType} 
                                <span class="material-icons" id="info-icon" aria-haspopup="true" aria-expanded="false">info</span>
                                <div id="info-content"> Account type needs to be advanced to use the open project button in project detail. </div>
                            </div> `
            : profile.innerHTML = `<div> Guest </div>`
    }

}

const displayInfo = () => document.getElementById("info-content").style.display = "block";
const hideInfo = () => document.getElementById("info-content").style.display = "none";


displayUserProfile()

let infoIcon = document.getElementById("info-icon");
if (infoIcon) {
    let infoContent = document.getElementById("info-content");
    infoIcon.addEventListener("mouseover", displayInfo);
    infoIcon.addEventListener("mouseout", hideInfo);
}