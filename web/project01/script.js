const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const logibLink = document.querySelector('.login-link');

registerLink.onclick = () =>{
    wrapper.classList.add('active');
}