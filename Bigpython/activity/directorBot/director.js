var botui = new BotUI('guide-chat');

botui.message.add({
    delay: 600,
    loading: true,
    content: 'Hi, I am a DirectorBot! &#x1F916&#x1F3AC;'
})
.then(function () {
    return botui.message.add({
        delay: 700,
        loading: true,
        content: 'Welcome to my movie set! (・ε・`*) …'
    })
})
.then(function () {
    return botui.action.button({
        delay: 1000,
        action: [
            {
                text: 'Challenge me to a python quiz!',
                value: 'quiz'
            },
            {
                text: 'Why are you named DirectorBot?',
                value: 'named'
            }
        ]
    })
}).then(function (res) {
    var flag = 0;

    if (res.value == "quiz") {
        quizTime();
    }
    else if (res.value == "named") {
        botui.message.add({
            delay: 1250,
            loading: true,
            content: 'The creator that created me originally wanted to create a movie website, but they cancelled the project ( 〃．．)'
        })
            botui.message.add({
            delay: 1500,
            loading: true,
            content : 'Anyways we have BigPython now'
        })
        botui.message.add({
            delay: 1600,
            loading: true,
            content : '٩(｡•́‿•̀｡)۶'
        })
    }
}).then(function () {
    return botui.action.button({
        delay: 2000,
        action: [
            {
                text: 'Let\'s do a Python quiz',
                value: 'quiz'
            },
            {
                text: 'Teach me how to learn Python!',
                value: 'course' //#
            },
            {
                text: 'I\'m bored, let\'s play a guessing game!',
                value: 'guess'    //#
            }
        ]
    })
}).then(function (res) {
    if (res.value == "quiz") {
        quizTime();
    }
    else if (res.value == "course") {
        botui.message.add({
            delay: 500,
            loading: true,
            content: 'My master have arranged a course for you! [Click here](../../../courses/courses.html). See you there! ╰(▔∀▔)╯'
        })
    }
    else if (res.value == "guess") {
        riddleTime();
    }
})


function goodbye() {
    botui.message.bot({
        delay: 500,
        content: "Bye bye!! ´･ᴗ･`"
    }).then(function () {
      return botui.action.button({
          delay: 100,
          action: [
              {
                  text: 'Thanks for the help!',
              }
          ]
      })
  })
}

// Define an array of question objects
let correctAnswersCount = 0;
let availableQuestionIndexes = []; // Array to keep track of available question indexes
const askedQuestionIndexes = []; // Array to keep track of asked question indexes

const quizQuestions = [
  {
    question: 'What will be the output of the following code : "print type(type(int))"',
    answers: ['type \'int\'', 'Error', '0', 'type \'type\''],
    correctAnswer: 'type \'type\'',
  },
  {
    question: 'What is the output of the segment : chr(ord(\'A\'))',
    answers: ['A', 'B', 'a', 'Error'],
    correctAnswer: 'A',
  },
  {
    question: 'What is called when a function is defined inside a class?',
    answers: ['Method', 'Class', 'Module', 'Another Function'],
    correctAnswer: 'Method',
  },
  {
    question: 'What will be the output of the following Python expression if x=56.236? "print("%.2f"%x)"',
    answers: ['56.236', '56.23', '56.0000', '56.24'],
    correctAnswer: '56.24',
  },
  {
    question: 'Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after list1.pop(1)?',
    answers: ['[3, 4, 5, 20, 5, 25, 1, 3]', '[1, 3, 4, 5, 20, 5, 25]', '[1, 3, 3, 4, 5, 5, 20, 25]', '[3, 5, 20, 5, 25, 1, 3]'],
    correctAnswer: '[3, 5, 20, 5, 25, 1, 3]',
  },
  {
    question: 'time.time() returns ________',
    answers: ['the current time in milliseconds since midnight, January 1, 1970 GMT (the Unix time)', 'the current time in milliseconds', 'the current time in milliseconds since midnight Function'],
    correctAnswer: 'the current time in milliseconds since midnight, January 1, 1970 GMT (the Unix time)',
  },
  {
    question: 'Which of the following is the correct extension of the Python file?',
    answers: ['.python', '.p', '.py', '.pl'],
    correctAnswer: '.py',
  },
  {
    question: 'All keywords in Python are in _________',
    answers: ['Capitalized', 'lower case', 'None of the mentioned', 'UPPER CASE'],
    correctAnswer: 'None of the mentioned',
  },
  {
    question: 'Which of the following is used to define a block of code in Python language?',
    answers: ['All of the mentioned', 'Indentation', 'Key', 'Brackets'],
    correctAnswer: 'Indentation',
  },
  {
    question: 'Which of the following is the truncation division operator in Python?',
    answers: ['|', '//', '/', '%'],
    correctAnswer: '//',
  },
];

// Function to shuffle an array randomly
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Function to initialize availableQuestionIndexes
function initializeAvailableQuestionIndexes() {
  availableQuestionIndexes = Array.from(Array(quizQuestions.length).keys());
}

// Initialize availableQuestionIndexes at the beginning
initializeAvailableQuestionIndexes();

// Function to start the quiz
function quizTime() {
  if (availableQuestionIndexes.length === 0) {
    // All questions have been asked
    botui.message.add({
      delay: 1000, // Delay before displaying the result
      loading: true,
      content: `You got ${correctAnswersCount} out of ${quizQuestions.length} questions correct.`,
    }).then(() => {
      // Add more messages or actions here
      return botui.message.add({
        delay: 800, // Delay before the "sleeping mode" message
        loading: true,
        content: 'So sleepy, entering sleeping mode... &#128564;'
      });
    }).then(() => {
      return botui.action.button({
        action: [
          {
            text: 'I want more!',
            value: 'riddle'
          },
          {
            text: 'I\'m done',
            value: 'end'
          }
        ]
      });
    }).then((res) => {
        // Check if the user's choice is "end"
        if (res.value === 'end') {
          // Call the goodbye() function
            goodbye();
        }
        else if (res.value === 'riddle') {
          // Start a new round of riddles
          initializeAvailableRiddleIndexes();
          riddleTime();
        }
      });
      return;
    }

  // Get the next question index
  const nextQuestionIndex = availableQuestionIndexes.pop();
  const questionObj = quizQuestions[nextQuestionIndex];
  const question = questionObj.question;
  const correctAnswer = questionObj.correctAnswer;
  const shuffledAnswers = shuffleArray(questionObj.answers);

  // Record the index of the asked question
  askedQuestionIndexes.push(nextQuestionIndex);

  // Display the shuffled question and shuffled answer choices
  botui.message.add({
    delay: 400, // Delay before showing the question
    loading: true,
    content: question,
  }).then(() => {
    return botui.action.button({
      delay: 4000, // Delay before showing answer choices
      action: [
        ...shuffledAnswers.map(answer => ({ text: answer, value: answer })),
        {
          text: 'I surrender [Quit]',
          value: 'quit'
        }
      ],
    });
  }).then((res) => {
    // Check if the user's answer is correct
    if (res.value === 'quit') {
      goodbye();
      // You can add more actions or messages here if needed
    } 
    else {
      if (res.value === correctAnswer) {
        botui.message.add({
          delay: 500, // Delay before showing "Correct!" message
          loading: true,
          content: 'Correct! 🎉',
        });
        // Increment the correctAnswersCount
        correctAnswersCount++;
      } else {
        botui.message.add({
          delay: 500, // Delay before showing "Wrong" message
          loading: true,
          content: `Wrong. The correct answer is: ${correctAnswer}`,
        });
      }

      // Continue with the next question
      setTimeout(quizTime, 2000); // Delay before moving to the next question
    }
  });
}  

// Define an array of riddles
const riddles = [
    {
      question: 'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?',
      answers: ['A pencil lead', 'A diamond', 'A computer', 'A book'],
      correctAnswer: 'A pencil lead',
    },
    {
      question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',
      answers: ['A cloud', 'An echo', 'A tree', 'A river'],
      correctAnswer: 'An echo',
    },
    {
      question: 'I have keys but open no locks. I have space but no room. You can enter, but you can\'t go inside. What am I?',
      answers: ['A car', 'A house', 'A keyboard', 'A drawer'],
      correctAnswer: 'A keyboard',
    },
    // Add more riddles here...
  ];
  
  // Function to initialize availableRiddleIndexes
  function initializeAvailableRiddleIndexes() {
    availableRiddleIndexes = Array.from(Array(riddles.length).keys());
  }
  
  // Function to start the riddle game
  function riddleTime() {
    if (availableRiddleIndexes.length === 0) {
      // All riddles have been asked
      botui.message.add({
        delay: 1000, // Delay before displaying the result
        loading: true,
        content: `You solved ${correctRiddlesCount} out of ${riddles.length} riddles.`,
      }).then(() => {
        // Add more messages or actions here
        return botui.message.add({
          delay: 800, // Delay before the "sleeping mode" message
          loading: true,
          content: 'So sleepy, entering sleeping mode... &#128564;'
        });
      }).then(() => {
        return botui.action.button({
          action: [
            {
              text: 'I\'m done',
              value: 'end'
            }
          ]
        });
      }).then((res) => {
        // Check if the user's choice is "end"
        if (res.value === 'end') {
          // Call the goodbye() function
          goodbye();
        } else if (res.value === 'riddle') {
          // Start a new round of riddles
          initializeAvailableRiddleIndexes();
          riddleTime();
        }
      });
      return;
    }
  
    // Get the next riddle index
    const nextRiddleIndex = availableRiddleIndexes.pop();
    const riddleObj = riddles[nextRiddleIndex];
    const riddleQuestion = riddleObj.question;
    const correctAnswer = riddleObj.correctAnswer;
    const answerChoices = riddleObj.answers;
  
    // Display the riddle question
    botui.message.add({
      delay: 400, // Delay before showing the riddle question
      loading: true,
      content: riddleQuestion,
    }).then(() => {
      return botui.action.button({
        delay: 500, // Delay before showing answer choices
        action: answerChoices.map(answer => ({ text: answer, value: answer })),
      });
    }).then((res) => {
      // Check if the user's answer is correct
      if (res.value === correctAnswer) {
        botui.message.add({
          delay: 500, // Delay before showing "Correct!" message
          loading: true,
          content: 'Correct! 🎉',
        });
        // Increment the correctRiddlesCount
        correctRiddlesCount++;
      } else {
        botui.message.add({
          delay: 500, // Delay before showing "Wrong" message
          loading: true,
          content: `Wrong. The correct answer is: ${correctAnswer}`,
        });
      }
  
      // Continue with the next riddle
      setTimeout(riddleTime, 2000); // Delay before moving to the next riddle
    });
  }
  
  // Initialize availableRiddleIndexes at the beginning
  let correctRiddlesCount = 0;
  let availableRiddleIndexes = [];
  initializeAvailableRiddleIndexes();

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