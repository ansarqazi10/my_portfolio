tsParticles.load('tsparticles', {
    background: {
        color: '#000000'
    },
    particles: {
        size: {
            random: true,
            value: 4
        },
        color: {
            value: '#b1b493'
        },
        opacity: {
            value: 0.5
        }
    },
    interactivity: {
        events: {
            onHover: {
                mode: ['grab', 'bubble'],
                enable: true
            }
        },
        modes: {
            grab: {
                distance: 180
            },
            bubble: {
                size: 8
            }
        }
    },
    preset: 'basic'
});

function copyText(val, id) {
    navigator.clipboard.writeText(val);
    document.getElementById(id).innerHTML = "copied!";
    setTimeout(() => {
        document.getElementById(id).innerHTML = "";
    }, 1000);
}

function sendMessage() {
    // e.preventDefault();
    let from_name = document.getElementById('from_name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let to_name = "Ansarqazi_";
    if (from_name === "" || from_name === undefined) {
        swal('Please enter your name.');
        return;
    }
    if (email === "" || email === undefined) {
        swal('Please enter your email.');
        return;
    }
    if (!validate(email)) return;
    if (subject === "" || subject === undefined) {
        swal('Please enter a subject.');
        return;
    }
    if (message === "" || message === undefined) {
        swal('Please write a message.');
        return;
    }
    var templateParams = { from_name, to_name, email, subject, message };
    emailjs.send('service_0wmihqe', 'template_pujthf8', templateParams, '6HiTom3zKGSssaHTR')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            clearField();
            swal({title: "Thanks for contacting.", text: "Your email has been sent. You will shortly receive a confirmatory email.", icon: "success", button: "Okay",});
        }, function (error) {
            console.log('FAILED...', error);
        });
}

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const validate = (email) => {
    let result = document.getElementById('result');
    if (validateEmail(email)) {
        result.innerHTML = "";
        return true;
    } else {
        result.innerHTML = email + ' is not valid :(';
        result.style.color = 'red';
        return false;
    }
}

function clearField() {
    document.getElementById('from_name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('message').value = "";
}

function changeHeight() {
    document.getElementById('tobedone').style.height = window.innerHeight + 'px';
    document.getElementById('asdf').style.height = window.innerHeight + 'px';
}

changeHeight();