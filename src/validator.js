const validator = {

      isValid(number){

        const cardArray = number.split("").reverse().join("");


        let arrFilter = [];
        let arrFilterImpar = [];

        for (let i = 1; i < cardArray.length; i += 2) {
            arrFilter.push(cardArray[i]);
          }
          for (let i = 0; i < cardArray.length; i += 2) {
            arrFilterImpar.push(parseInt(cardArray[i]))
          }

        let arrFilterPair = [];
        let counter = 0;
        
        for (let i = 0; i < arrFilter.length; i++) {
            counter = arrFilter[i] * 2;
            if (counter > 9) {

              let secondDigit = counter % 10;
              let firstDigit = parseInt(counter / 10);
              let result = secondDigit + firstDigit;
              arrFilterPair.push(result);
          }else{
            arrFilterPair.push(counter);
          }
        }


        const arrNumbers = [...arrFilterImpar, ...arrFilterPair];
        let sums = 0;
        for (let i = 0; i < arrNumbers.length; i++) {
            sums += arrNumbers[i];
        }        
          return sums % 10 === 0 ;
      },

      maskify(number){

        const numberCard = number;

        if (numberCard.length < 5) {
          return numberCard;
        }
        const arrNumber = numberCard.split("");

        for (let i = 0; i < arrNumber.length -4; i++) {
          arrNumber[i] = "#";
        }
        return arrNumber.join("");
      }
    }


export default validator;
