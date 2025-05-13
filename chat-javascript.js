let input= document.getElementById('input');
const send= document.getElementById('sendbutton');
const chat= document.getElementById('chatsent');

send.addEventListener('click', function() {
    let p= document.createElement('p');
    p.textContent= input.value;
    chat.appendChild(p);
    input.value="";
});

