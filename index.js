
let errors = [];
let checkValidity = (input) => {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Поле' + input.placeholder + 'не заполнено');
    }
    if (validity.rangeOverflow) {
        let max = getAttributeValue(input, 'max');
        errors.push(`Максимальное значение не может быть больше ${max}`);
    }
    if (validity.rangeUnderflow) {
        let min = getAttributeValue(input, 'min');
        errors.push(`Минимальное значение не может быть меньше ${min}`);
    }
}

let checkAll = () => {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorMessage').innerHTML = errors.join('.<br>');
}
