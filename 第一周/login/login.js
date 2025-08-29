
document.addEventListener('DOMContentLoaded', function() {
    // 检查当前页面是否为登录页
    if (document.getElementById('loginForm')) {
        initLoginPage();
    }
    // 检查当前页面是否为主页面
    else if (document.querySelector('.main-page')) {
        initMainPage();
    }
});

// 初始化登录页面
function initLoginPage() {
    
    const togglePwd = document.getElementById('togglePwd');
    const password = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    
    
    const registerModal = document.getElementById('registerModal');
    const showRegisterModal = document.getElementById('showRegisterModal');
    const closeRegisterModal = document.getElementById('closeRegisterModal');
    const showLoginForm = document.getElementById('showLoginForm');
    
   
    const registerForm = document.getElementById('registerForm');
    const regUsername = document.getElementById('regUsername');
    const regEmail = document.getElementById('regEmail');
    const regPassword = document.getElementById('regPassword');
    const regConfirmPwd = document.getElementById('regConfirmPwd');
    const toggleRegPwd = document.getElementById('toggleRegPwd');
    const toggleConfirmPwd = document.getElementById('toggleConfirmPwd');

    // 密码显示/隐藏切换
    togglePwd.addEventListener('click', function() {
        const isPwdHidden = password.type === 'password';
        password.type = isPwdHidden ? 'text' : 'password';
        this.innerHTML = isPwdHidden ? '<i class="fa fa-eye"></i>' : '<i class="fa fa-eye-slash"></i>';
    });

    // 注册密码显示/隐藏
    toggleRegPwd.addEventListener('click', function() {
        const isPwdHidden = regPassword.type === 'password';
        regPassword.type = isPwdHidden ? 'text' : 'password';
        this.innerHTML = isPwdHidden ? '<i class="fa fa-eye"></i>' : '<i class="fa fa-eye-slash"></i>';
    });

    toggleConfirmPwd.addEventListener('click', function() {
        const isPwdHidden = regConfirmPwd.type === 'password';
        regConfirmPwd.type = isPwdHidden ? 'text' : 'password';
        this.innerHTML = isPwdHidden ? '<i class="fa fa-eye"></i>' : '<i class="fa fa-eye-slash"></i>';
    });

    // 显示注册模态框
    showRegisterModal.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.classList.add('show');
        // 为背景添加模糊效果
        document.querySelector('.form-card').classList.add('blur');
    });

    // 关闭注册模态框
    function closeModal() {
        registerModal.classList.remove('show');
        document.querySelector('.form-card').classList.remove('blur');
        // 清除注册表单错误提示
        document.querySelectorAll('#registerForm .error-text').forEach(el => {
            el.classList.remove('show');
        });
    }

    closeRegisterModal.addEventListener('click', closeModal);
    showLoginForm.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
    });

    // 点击模态框外部关闭
    registerModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // 实时验证
    username.addEventListener('blur', function() {
        if (!this.value.trim()) {
            usernameError.classList.add('show');
        } else {
            usernameError.classList.remove('show');
        }
    });

    password.addEventListener('blur', function() {
        const pwd = this.value.trim();
        if (!pwd) {
            passwordError.textContent = 'The password cannot be empty';
            passwordError.classList.add('show');
        } else if (pwd.length < 6) {
            passwordError.textContent = 'The password must not be less than 6 characters';
            passwordError.classList.add('show');
        } else {
            passwordError.classList.remove('show');
        }
    });

    // 登录表单提交
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const usernameVal = username.value.trim();
        const passwordVal = password.value.trim();

        // 验证用户名
        if (!usernameVal) {
            usernameError.classList.add('show');
            isValid = false;
        } else {
            usernameError.classList.remove('show');
        }

        // 验证密码
        if (!passwordVal) {
            passwordError.textContent = 'The password cannot be empty';
            passwordError.classList.add('show');
            isValid = false;
        } else if (passwordVal.length < 6) {
            passwordError.textContent = 'The password must not be less than 6 characters';
            passwordError.classList.add('show');
            isValid = false;
        } else {
            passwordError.classList.remove('show');
        }

        // 验证通过：存储用户名到本地存储，跳转主页面
        if (isValid) {
            localStorage.setItem('loggedInUser', usernameVal);
            window.location.href = '../ccl.html';
        }
    });

    // 注册表单提交
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // 验证用户名
        const usernameVal = regUsername.value.trim();
        const usernameError = document.getElementById('regUsernameError');
        if (!usernameVal) {
            usernameError.textContent = 'The user name cannot be empty';
            usernameError.classList.add('show');
            isValid = false;
        } else if (usernameVal.length < 2 || usernameVal.length > 12) {
            usernameError.textContent = 'The user name must be between 2 and 12 characters';
            usernameError.classList.add('show');
            isValid = false;
        } else {
            usernameError.classList.remove('show');
        }
        // 验证密码
        const passwordVal = regPassword.value;
        const passwordError = document.getElementById('regPasswordError');
        if (!passwordVal) {
            passwordError.textContent = 'The password cannot be empty';
            passwordError.classList.add('show');
            isValid = false;
        } else if (passwordVal.length < 6) {
            passwordError.textContent = 'The password must not be less than 6 characters';
            passwordError.classList.add('show');
            isValid = false;
        } else {
            passwordError.classList.remove('show');
        }

        // 验证确认密码
        const confirmPwdVal = regConfirmPwd.value;
        const confirmPwdError = document.getElementById('regConfirmPwdError');
        if (!confirmPwdVal) {
            confirmPwdError.textContent = 'Please re-enter your password';
            confirmPwdError.classList.add('show');
            isValid = false;
        } else if (confirmPwdVal !== passwordVal) {
            confirmPwdError.textContent = 'The passwords entered twice are not consistent';
            confirmPwdError.classList.add('show');
            isValid = false;
        } else {
            confirmPwdError.classList.remove('show');
        }

        // 验证通过：注册成功，关闭
        if (isValid) {
            alert('Registration successful! Please log in with your new account');
            registerForm.reset();
            closeModal();
        }
    });
}

// 初始化主页面
function initMainPage() {
    // 检查用户是否已登录
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userInfoElement = document.querySelector('.user-info');
    
    if (loggedInUser && userInfoElement) {
        // 显示用户名
        document.querySelector('.user-name').textContent = loggedInUser;
        // 显示用户头像首字母
        document.querySelector('.user-avatar').textContent = loggedInUser.charAt(0).toUpperCase();
    } else {
        // 如果未登录，重定向到登录页
        window.location.href = 'login.html';
    }

    // 绑定退出登录事件
    document.querySelector('.logout-btn').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html';
    });
}
