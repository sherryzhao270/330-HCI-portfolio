var currentUser = localStorage

const projectButton = () => {
    let projects = document.getElementsByClassName("project-detail");
    
    if (projects.length > 0) {
        currentUser.accountType === "advanced"
            ? (projects[0].innerHTML += `<a href="http://www.responsinator.com/?url=intune-ab424.web.app%2F"><button> Open Project </button></a>`,
                projects[1].innerHTML += `<a href="https://cs333-fianlproj-group1.herokuapp.com/"><button> Open Project </button></a>`)
            : (projects[0].innerHTML += `<button onclick="advanceAccountNeeded()"> Open Project </button>`,
                projects[1].innerHTML += `<button onclick="advanceAccountNeeded()"> Open Project </button>`)
    }
    
}

const advanceAccountNeeded = () => {
    alert("Account type needs to be advanced to open project.")
}

projectButton()