/**
 * Function inputErrorTemplate. add Input error
 * @param {String} msg 
 */

function inputErrorTemplate(msg) {
    return `
    <div class="invalid-feedback" >${msg}</div>
`
}

/**
 * Function showInputError. add Input error
 * @param {HTMLInputElement} el 
 */

export function showInputError(el) {
    const parent = el.parentElement;
    const msg = el.dataset.invalidMessage || 'invalid input';
    const template = inputErrorTemplate(msg);
    el.classList.add('is-invalid');
    parent.insertAdjacentHTML('beforeend', template);
}

/**
 * Function removeInputError. Remove Input error
 * @param {HTMLInputElement} el 
 */


export function removeInputError(el) {
    const parent = el.parentElement;
    const err = parent.querySelector('.invalid-feedback');
    if (!err) return;
    el.classList.remove('is-invalid');
    parent.removeChild(err);

}