//todo iniciar firebase?


// Reference messages collection
var messagesRef = fiebase.database().ref('messages');


// listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();




    //obtener valores

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    console.log(name);
}

// funcion para obtener valores del formulario

function getInputVal(id) {
    return document.getElementById(id).value;
}