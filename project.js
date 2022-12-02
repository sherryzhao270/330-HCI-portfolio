var currentUser = localStorage

const projectButton = () => {
    let projects = document.getElementsByClassName("project-detail");
    
    if (projects.length > 0) {
        currentUser && currentUser.accountType === "advanced"
            ? (document.getElementById("project1-btn").innerHTML = `<a href="http://www.responsinator.com/?url=intune-ab424.web.app%2F"><button> Open Project </button></a>`,
                document.getElementById("project2-btn").innerHTML = `<a href="https://cs333-fianlproj-group1.herokuapp.com/"><button> Open Project </button></a>`)
            : (document.getElementById("project1-btn").innerHTML = `<button onclick="advanceAccountNeeded()"> Open Project </button>`,
                document.getElementById("project2-btn").innerHTML = `<button onclick="advanceAccountNeeded()"> Open Project </button>`)
    }
    
}

const advanceAccountNeeded = () => {
    alert("Account type needs to be advanced to open project.")
}

projectButton()