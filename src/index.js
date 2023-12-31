import validator from './validator.js';

const getNumberCard = () => {

    const numberCard = document.getElementById("cardCreditNumber").value;
    const result = validator.isValid(numberCard);
    const trueResponse = "Tarjeta Válida";
    const falseResponse = "tarjeta No Válida";

    const maskifyN = validator.maskify(numberCard);
    
    document.getElementById("cardCreditNumber").value = maskifyN;

    const checkValidate = document.getElementById("response");
    checkValidate.innerHTML = result ? trueResponse : falseResponse;


}
const buttonCardValidate = document.getElementById("validator");
buttonCardValidate.addEventListener("click", getNumberCard);


