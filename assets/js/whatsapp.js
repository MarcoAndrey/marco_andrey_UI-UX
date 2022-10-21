/* 
* Author: Marco Andrey
*/

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '57+3008089920';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="ri-check-line"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name = document.querySelector('#name').value
        let lastname = document.querySelector('#email').value
        let email = document.querySelector('#message').value
        let message = 'send?phone=' + phone + '&text=Hola%20mi%20nombre%20es%20Marco%20Andrey,%20un%20gusto%20en%20saludarte.%0Agracias por escribir%0A' + name + '%0A En este correo nos contactaremos contigo%0A' + lastname + '%0A¿Cuentéame en que puedo colaborarte?%0A' + email + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="ri-whatsapp-line"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});
