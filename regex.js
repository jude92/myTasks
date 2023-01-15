const creditCardValidation = (creditCradNum) => {
  const masterCardRegex = /^(?:5[1-5][0-9]{14})$/;
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  if (!isNaN(Number(creditCradNum))) {
    if (creditCradNum.match(visaRegex)) {
      console.log("Valid credit card number. Card is Visa Card.");
    } else if (creditCradNum.match(masterCardRegex)) {
      console.log("Valid credit card number. Card is Master Card.");
    }
    return true;
  } else {
    console.log("Please enter a valid credit card number.");
    return false;
  }
};
creditCardValidation(5061181664180014483);
