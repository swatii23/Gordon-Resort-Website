document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('login-from');

    const btn = document.getElementById('LogIn-btn');

    const message = document.getElementById('logIn-message');

    btn.addEventListener('click', function () {

        const username = document.getElementById('username').value;

        const password = document.getElementById('password').value;

        const storedUsername = localStorage.getItem('username');

        const storedPassword = localStorage.getItem('password');

        message.textContent = 'Logging in...';

        setTimeout(() => {

            if (username === storedUsername && password === storedPassword) {

                message.textContent = 'Login Successful!';

                window.location.href = ('/glorious-calendar-2511/Register/register.html');

                return alert('FFFFF');

            } else {

                message.textContent = 'Invalid username or password. Please try again.';

            }

        }, 2000)

    })

})