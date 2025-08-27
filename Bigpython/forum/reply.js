
document.addEventListener("DOMContentLoaded", function() {
    const replyBtn1 = document.querySelector('.tweet-reply-button1');
    const reply1 = document.querySelector('.reply1');
  
    replyBtn1.addEventListener('click', function() {
      if (current_user==null) {
        alert("Login to start a discussion!");
    }
    else
    {
    if (reply1.style.display === 'none') {
      reply1.style.display = 'flex';
    } else {
      reply1.style.display = 'none';
    }
  }
  });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const replyBtn2 = document.querySelector('.tweet-reply-button2');
    const reply2 = document.querySelector('.reply2');
  
    replyBtn2.addEventListener('click', function() {
      if (current_user==null) {
        alert("Login to start a discussion!");
    }
    else{
    if (reply2.style.display === 'none') {
      reply2.style.display = 'flex';
    } else {
      reply2.style.display = 'none';
    }
  }
  });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const replyBtn3 = document.querySelector('.tweet-reply-button3');
    const reply3 = document.querySelector('.reply3');
  
    replyBtn3.addEventListener('click', function() {
      if (current_user==null) {
        alert("Login to start a discussion!");
    }
    else
    {
    if (reply3.style.display === 'none') {
      reply3.style.display = 'flex';
    } else {
      reply3.style.display = 'none';
    }
  }
  });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const replyBtn4 = document.querySelector('.tweet-reply-button4');
    const reply4 = document.querySelector('.reply4');
  
    replyBtn4.addEventListener('click', function() {
      if (current_user==null) {
        alert("Login to start a discussion!");
    }
    else{
    if (reply4.style.display === 'none') {
      reply4.style.display = 'flex';
    } else {
      reply4.style.display = 'none';
    }
  }
  });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const replyBtn5 = document.querySelector('.tweet-reply-button5');
    const reply5 = document.querySelector('.reply5');
  
    replyBtn5.addEventListener('click', function() {
      if (current_user==null) {
        alert("Login to start a discussion!");
    }
    else{
    if (reply5.style.display === 'none') {
      reply5.style.display = 'flex';
    } else {
      reply5.style.display = 'none';
    }
  }
  });
  });


  // OUTPUT REPLY
  document.addEventListener("DOMContentLoaded", function() {
    
  const repTxt1 = document.getElementById('rep1');
  const repSubmit1 = document.getElementById('repSubmit1');
  const repOutput1 = document.getElementById('repOutput1');

  window.addEventListener('load', function() {
    const savedOutput1 = localStorage.getItem('savedOutput1');
    if (savedOutput1) {
      repOutput1.innerHTML = savedOutput1;
      repTxt1.value = savedOutput1;
    }
  });
  
  function printReply1() {
    repSubmit1.style.display = 'none';
    repTxt1.style.display = 'none';
    repOutput1.innerHTML = repTxt1.value;
    
    replyBtn1.style.display = 'none';
    // Save the output to local storage
    localStorage.setItem('savedOutput1', repTxt1.value);
  }
  
  repSubmit1.addEventListener('click', printReply1); 

  // 2
  const repTxt2 = document.getElementById('rep2');
  const repSubmit2 = document.getElementById('repSubmit2');
  const repOutput2 = document.getElementById('repOutput2');

  window.addEventListener('load', function() {
    const savedOutput2 = localStorage.getItem('savedOutput2');
    if (savedOutput2) {
      repOutput2.innerHTML = savedOutput2;
      repTxt2.value = savedOutput2;
    }
  });
  
  function printReply2() {
    repSubmit2.style.display = 'none';
    repTxt2.style.display = 'none';
    repOutput2.innerHTML = repTxt2.value;
    
    replyBtn2.style.display = 'none';
    // Save the output to local storage
    localStorage.setItem('savedOutput2', repTxt2.value);
  }
  
  repSubmit2.addEventListener('click', printReply2);

  // 3
  const repTxt3 = document.getElementById('rep3');
  const repSubmit3 = document.getElementById('repSubmit3');
  const repOutput3 = document.getElementById('repOutput3');

  window.addEventListener('load', function() {
    const savedOutput3 = localStorage.getItem('savedOutput3');
    if (savedOutput3) {
      repOutput3.innerHTML = savedOutput3;
      repTxt3.value = savedOutput3;
    }
  });
  
  function printReply3() {
    repSubmit3.style.display = 'none';
    repTxt3.style.display = 'none';
    repOutput3.innerHTML = repTxt3.value;
    
    replyBtn3.style.display = 'none';
    // Save the output to local storage
    localStorage.setItem('savedOutput3', repTxt3.value);
  }
  
  repSubmit3.addEventListener('click', printReply3);   

  // 4
  const repTxt4 = document.getElementById('rep4');
  const repSubmit4 = document.getElementById('repSubmit4');
  const repOutput4 = document.getElementById('repOutput4');

  window.addEventListener('load', function() {
    const savedOutput4 = localStorage.getItem('savedOutput4');
    if (savedOutput4) {
      repOutput4.innerHTML = savedOutput4;
      repTxt4.value = savedOutput4;
    }
  });
  
  function printReply4() {
    repSubmit4.style.display = 'none';
    repTxt4.style.display = 'none';
    repOutput4.innerHTML = repTxt4.value;
    
    replyBtn4.style.display = 'none';
    // Save the output to local storage
    localStorage.setItem('savedOutput4', repTxt4.value);
  }
  
  repSubmit4.addEventListener('click', printReply4);

// 5
  const repTxt5 = document.getElementById('rep5');
  const repSubmit5 = document.getElementById('repSubmit5');
  const repOutput5 = document.getElementById('repOutput5');

  window.addEventListener('load', function() {
    const savedOutput5 = localStorage.getItem('savedOutput5');
    if (savedOutput5) {
      repOutput5.innerHTML = savedOutput5;
      repTxt5.value = savedOutput5;
    }
  });
  
  function printReply5() {
    repSubmit5.style.display = 'none';
    repTxt5.style.display = 'none';
  
    // Check if the current user matches the user who posted the reply
    if (current_user === user[i].username) {
      repOutput5.innerHTML = repTxt5.value;
      // Save the output to local storage
      localStorage.setItem('savedOutput5', repTxt5.value);
    } else {
      // If it's a different user, do not display the reply
      repOutput5.style.display = 'none';
    }
  }
  
  repSubmit5.addEventListener('click', printReply5);
})