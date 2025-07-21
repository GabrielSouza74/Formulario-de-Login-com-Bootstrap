
      document.addEventListener('DOMContentLoaded', (event) => {


        const togglePassword = document.querySelector('#togglePassword');
        const passwordInput = document.querySelector('#floatingPassword');


        togglePassword.addEventListener('click', function() {


          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';


          passwordInput.setAttribute('type', type);


          this.classList.toggle('bi-eye');
          this.classList.toggle('bi-eye-slash');
        });
      });
    