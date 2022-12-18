const loggeOutLinks = document.querySelectorAll('.logged-out')
const loggeInLinks = document.querySelectorAll('.logged-in')

console.log(loggeOutLinks)
console.log(loggeInLinks)

export const loginCheck = user => {
    if(user) {
        loggeInLinks.forEach(link => link.style.display = "block")
        loggeOutLinks.forEach(link => link.style.display = "none")
       
    }else{
        loggeOutLinks.forEach(link => link.style.display = "block")
        loggeInLinks.forEach(link => link.style.display = "none")
    }
}