const parallax_el = document.querySelectorAll(".parallax");
let xValue = 0, yValue = 0; 

function update(cursorPosition){
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx || 0; 
        let speedy = el.dataset.speedy || 0; 
        let speedz = el.dataset.speedz || 0; 
        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => { 
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    update(e.clientX);
});


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.iconLogin');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});


loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});


iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

// LOCAL STORAGE
var saveUser = function (arr) {     // Throw all user names to the object into strings, and store the strings in user
    localStorage.user = JSON.stringify(arr);
}
var saveCurrentUser = function (arr) {  //  Save the username of the currently logged in user, just to display the username in each subsequent interface
    localStorage.current_user = JSON.stringify(arr);
}
var loadUser = function () {    // Read out the local storage user
    var arr = JSON.parse(localStorage.user);
    return arr;
}
var loadCurrentUser = function () { // read current username
    var arr = JSON.parse(localStorage.current_user);
    return arr;
}

//  Terms and Condition Checkbox
function toggleRegisterButton() {

    if (agreeCheckbox.checked) {
        agreeCheckbox.parentElement.classList.remove("checkbox-vibrate");
    } else {
        agreeCheckbox.parentElement.classList.add("checkbox-vibrate");
        // Add a setTimeout to remove the class after the animation duration (0.4s)
        setTimeout(() => {
            agreeCheckbox.parentElement.classList.remove("checkbox-vibrate");
        }, 400);
    }
}

const registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", toggleRegisterButton);
function register() {
    let user = [];
    let usernameStr = document.getElementById("username1").value;
    let passwordStr = document.getElementById("pwd1").value;
    let emailStr = document.getElementById("email").value;

    if (localStorage.user != null) {
        user = loadUser();
    }
    if (usernameStr == "") {
      
        return;
    }
    if (passwordStr == "") {
        return;
    }
    if (emailStr == "") {
        return;
    }
    for (let i = 0; i < user.length; i++) {
        if (user[i].username == usernameStr) {

            // alert("That username has already been registered!");
            msg1.style.display = "block";
            msg1.innerText = "That username has been registered!";
            return;
        }
    }

    for (let i = 0; i < user.length; i++) {// If both are not empty, find out whether the user name has been registered from the user data
        if (user[i].username == usernameStr) {

            // alert("That username has already been registered!");
            msg1.style.display = "block";
            msg1.innerText = "That username has already been registered!";
            return;
        }
        if (user[i].email == emailStr) {

            msg1.style.display = "block";
            msg1.innerText = "That email has already been registered!";
            return;
        }
    }

    // alert("Successfuly register!");
    if(agreeCheckbox.checked)
    {
        loginStatus = true;
        msg1.style.display = "block";
        msg1.style.color = "green";
        msg1.innerText = "Successfuly register!";
        let this_user = {//generate a user object
            username: usernameStr,
            password: passwordStr,
            comment: [//In order to allow user comments to be displayed in the forum interface
            ]
        };
        user.push(this_user);
        saveUser(user);//Store the generated user object locally
        setTimeout(function () {
            //Delay 1s jump Get parameter passing (because there is localStorage parameter passing, so it is useless...) String splicing
            window.location.href = "./login.html?username=" + usernameStr + "&pws=" + passwordStr + "";
        }, 1000);   
    }
    return;
}

    function login() {
        let user = [];
        let usernameStr = document.getElementById("username").value;
        let passwordStr = document.getElementById("pwd").value;

        if (localStorage.user != null) {
            user = loadUser();
        }
        if (usernameStr == "") {
      
            return;
        }
        if (passwordStr == "") {
            return;
        }
        for (let i = 0; i < user.length; i++) {
            if (usernameStr == user[i].username && passwordStr == user[i].password) {
                // alert("Login successfuly!");
                msg.style.display = "block";
                msg.style.color = "green";
                msg.innerText = "Login successfuly!";
                saveCurrentUser(usernameStr);
                setTimeout(function () {
                    //Delay 1s jump Get parameter passing (because there is localStorage parameter passing, so it is useless...) String splicing
                    window.location.href = "./login.html"; // link this to courses?
                }, 1000);
                return;
            }
        }
        // alert("Username or password is wrong!");
        msg.style.display = "block";
        msg.innerText = "Username or password is wrong!"
        return;
    }

btnPopup.click(); // Popup when the page loads

function logout() {
    loginStatus = false;
    localStorage.removeItem("current_user");
    alert("Logout successful!");
    location.reload();
    return;
}

function showUsername() {
    if (localStorage.current_user != null) {
        let current_user = loadCurrentUser();
        un.innerText = current_user;
        profile.style.display = "block";
    }
    else {
        profile.style.display = "none";
    }
}
function showGreeting() {
    if (localStorage.current_user != null) {
        tag.innerText = "@"
        profile.style.display = "block";
    }
    else {
        profile.style.display = "none";
    }
}

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                
        "d+": this.getDate(),                    
        "h+": this.getHours(),                   
        "m+": this.getMinutes(),                 
        "s+": this.getSeconds(),                 
        "q+": Math.floor((this.getMonth() + 3) / 3), 
        "S": this.getMilliseconds()             
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }

    return fmt;
}
