//textbox popUp
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

/* TEXTBOX TWIT */
  const wrapper1 = document.querySelector(".wrapper1"),
editableInput = wrapper1.querySelector(".editable"),
readonlyInput = wrapper1.querySelector(".readonly"),
placeholder = wrapper1.querySelector(".placeholder"),
counter = wrapper1.querySelector(".counter"),
btnPost = wrapper1.querySelector("button");

// Event Listeners for editableInput
editableInput.onfocus = () => {
  placeholder.style.color = "#c5ccd3";
};

editableInput.onblur = () => {
  placeholder.style.color = "#98a5b1";
};

editableInput.onkeyup = (e) => {
  let element = e.target;
  validated(element);
};

editableInput.onkeypress = (e) => {
  let element = e.target;
  validated(element);
  placeholder.style.display = "none";
};

// Define the validated function
function validated(element) {
  let text;
  let maxLength = 100;
  let currentLength = element.innerText.length;

  if (currentLength <= 0) {
    placeholder.style.display = "block";
    counter.style.display = "none";
    btnPost.classList.remove("active");
  } else {
    placeholder.style.display = "none";
    counter.style.display = "block";
    btnPost.classList.add("active");
  }

  counter.innerText = maxLength - currentLength;

  if (currentLength > maxLength) {
    let overText = element.innerText.substr(maxLength);
    overText = `<span class="highlight">${overText}</span>`;
    text = element.innerText.substr(0, maxLength) + overText;
    readonlyInput.style.zIndex = "1";
    counter.style.color = "#e0245e";
    btnPost.classList.remove("active");
  } else {
    readonlyInput.style.zIndex = "-1";
    counter.style.color = "#333";
  }

  readonlyInput.innerHTML = text;
}


// posting discussions
const commentBox = document.querySelector('#comments');
const commentInput = document.querySelector('#com');
const btnSubmit = document.querySelector('#btnPost'); 

let user = [];  
var i=0;

if(localStorage.user != null)
{
  user=loadUser();
}
let current_user = null;

if(localStorage.current_user != null){
    current_user=loadCurrentUser();
}

function showComment() {
  renderComments();
}

function renderComments() {
    for (i = 0; i < user.length; i++) {
        if (user[i].username == current_user) {
            break;
        }
    }
    if (i != user.length) {
        console.log(user[i].comment[1])
        user[i].comment.forEach((item) => {
            // console.log(item);
            commentBox.insertAdjacentHTML('afterBegin', `
            <div class="tweet">
          <img class="tweet__author-logo" src="./images/profile-pic.jpg" />
          <div class="tweet__main">
            <div class="tweet__header">
              <div class="tweet__author-name">
                Me <!-- Your name -->
              </div>
              <div class="tweet__author-slug">
                @${item.comment_name}
              </div>
              <div class="tweet__publish-time">
                ${item.time}
              </div>
            </div>
            <div class="tweet__content">
              <p>${item.comment_text}</p>
            </div>
          </div>
        </div>
        `)
        });
        return;
    }
    else{
        return;
    }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

btnSubmit.onclick = function () {
    if (current_user==null) {
        alert("Login to start a discussion!");
    }
    
    let commentStr = commentInput.innerText.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");

    if (commentStr == "") {
        alert("Please input your comment!");
        return;
    }

    if (!commentInput) {
      alert("Comment input is missing or undefined.");
      return;
  }

    commentBox.insertAdjacentHTML('beforeEnd', `
        <div class="tweet">
          <img class="tweet__author-logo" src="./images/profile-pic.jpg" />
          <div class="tweet__main">
            <div class="tweet__header">
              <div class="tweet__author-name">
                Me <!-- Your name -->
              </div>
              <div class="tweet__author-slug">
                @${user[i].username}
              </div>
              <div class="tweet__publish-time">
              ${formatDate(new Date())}
              </div>
            </div>
            <div class="tweet__content">
              <p>${commentStr}</p>
            </div>
          </div>
    `)
    if(current_user!=null){
        user[i].comment.unshift({
            comment_name: user[i].username,
            comment_text: commentStr,
            time: formatDate(new Date()),
        })
        saveUser(user);
    }

    // Clear the comment input
    commentInput.innerText = "";

    return;
}

// Close wrapper after submit //
btnPost.addEventListener('click', function() {
  const modal = document.querySelector('.modal.active'); // Define the modal here
  if (modal) {
    modal.classList.remove('active');
  }
  overlay.classList.remove('active');
});