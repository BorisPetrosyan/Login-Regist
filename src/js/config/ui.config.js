const UI = {
    form: document.forms['loginForm'],
    Regform: document.forms['RegistrationForm'],
    inputEmail: document.getElementById('email'),
    inputPassword: document.getElementById('password'),
    regInputs: {

        registInputEmail: document.getElementById('emailRegist'),
        registInputPassword: document.getElementById('passwordRegist'),
        registName: document.getElementById('firstNameRegist'),
        registLastName: document.getElementById('lastNameRegist'),
        registPhone: document.getElementById('phoneRegist'),
        registNickName: document.getElementById('NickNameRegist'),
        registGenader: document.getElementById('gender'),
        registCoutnry: document.getElementById('country-select'),
        registCity: document.getElementById('city-select'),


        registBirtDay: document.getElementById('datePicker')



    }

};

export default UI;