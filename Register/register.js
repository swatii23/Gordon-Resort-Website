document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registration-form');

    const btn = document.getElementById('register-button');

    const message = document.getElementById('registration-message');

    btn.addEventListener('click', function() {

        const salutation = document.getElementById('salutation').value;

        const firstName = document.getElementById('firstName').value;

        const lastName = document.getElementById('lastName').value;

        const username = document.getElementById('emailAddress').value;

        const password = document.getElementById('password').value;

        if (!username || !password) {
            message.textContent = 'Please fill in all fields.';
            return;
        }

        localStorage.setItem('salutation', salutation);

        localStorage.setItem('firstName', firstName);

        localStorage.setItem('lastName', lastName);

        localStorage.setItem('username', username);

        localStorage.setItem('password', password);

        message.textContent = 'Registering...';

        setTimeout(() => {
            message.textContent = 'Registration successful!';

            // window.location.href = "logIn.html";

        }, 2000);

        return alert('Registration successful');

    })

})