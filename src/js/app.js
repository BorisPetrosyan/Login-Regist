import 'bootstrap/dist/css/bootstrap.css';
//import 'mdbootstrapnp'
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login, regist } from './services/auth.service';
import { notify } from './views/notifications';
import { getcountries } from './services/countries.service';


const { form, Regform, inputEmail, inputPassword } = UI;
const {
    registInputEmail,
    registInputPassword,
    registName,
    registLastName,
    registPhone,
    registNickName,
    registCoutnry,
    registCity,
    registBirtDay,
    registGenader,
} = UI.regInputs;


const inputs = [inputEmail, inputPassword];
const RegestInputs = [
    registName,
    registLastName,
    registInputEmail,
    registPhone,
    registNickName,
    registInputPassword,
    registGenader,
]


// Events
form.addEventListener('submit', e => {
    e.preventDefault();

    onSubmit();
});
Regform.addEventListener('submit', e => {

    e.preventDefault();
    onRegistSubmit();
});

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));
RegestInputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

registCoutnry.addEventListener('focus', () => removeInputError(registCoutnry));
registCity.addEventListener('focus', () => removeInputError(registCity));
registBirtDay.addEventListener('focus', () => removeInputError(registBirtDay));

// Handlers

async function onSubmit() {

    const isValidForm = inputs.every(el => {
        const isValidInput = validate(el);
        if (!isValidInput) {
            showInputError(el);
        }
        return isValidInput;
    });

    if (!isValidForm) return;

    try {
        await login(inputEmail.value, inputPassword.value);

        form.reset();
        notify({ msg: 'Login success', className: 'alert-success' });
    } catch (err) {
        notify({ msg: 'Login faild', className: 'alert-danger' });
    }
}

async function onRegistSubmit() {


    let isValidForm = false
        //console.log(registBirtDay.value)
    isValidForm = RegestInputs.every(el => {
        let isValidInput = validate(el);
        if (!isValidInput) {
            showInputError(el);
        }
        return isValidInput;
    });

    if (registBirtDay.value === '') {
        showInputError(registBirtDay)
        isValidForm = false
    } else {
        removeInputError(registBirtDay)
    }
    if (registCoutnry.value === 'select Country') {
        showInputError(registCoutnry)
        isValidForm = false
    }
    if (registCity.value === 'select City') {
        showInputError(registCity)
        isValidForm = false
    }
    const day = registBirtDay.value.slice(-2)
    const month = registBirtDay.value.slice(5, -3)
    const year = registBirtDay.value.slice(0, -6)

    let gender = document.querySelector('input[name="gender_orientation"]:checked');
    if (gender === null) {
        showInputError(registGenader)
        isValidForm = false
    } else {
        removeInputError(registGenader)
    }

    if (!isValidForm) return;

    try {
        await regist(registInputEmail.value, registInputPassword.value, registNickName.value,
            registName.value, registLastName.value, registPhone.value, gender.value,
            registCity.value, registCoutnry.value, day, month, year);

        form.reset();
        notify({ msg: 'Login success', className: 'alert-success' });
    } catch (err) {
        notify({ msg: 'Login faild', className: 'alert-danger' });
    }
}