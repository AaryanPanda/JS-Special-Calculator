// Progression 1: Create special addition

// function specialAddition(){}

const specialAddition = function(numberOne,numberTwo){
    if(numberOne<0){
      return 'Negative numbers are not allowed'
    }
    else if(numberTwo<0){
      return 'Negative numbers are not allowed'
    }
    else{
      return numberOne-numberTwo;
    }
  }
  
  // Progression 2: Create simple division
  
  const simpleDivision = function(numberOne,numberTwo){
    if (numberTwo>numberOne){
      return 'Cannot divide a smaller number by a larger number'
    }
    else if(numberTwo<0){
      return 'Negative numbers are not allowed'
    }
    else if (numberTwo==0){
      return 'Not a number'
    }
    else{
      return numberOne/numberTwo;
    }
  }
  
  // Progression 3: Create the special calculator
  
  const specialCalculator = function(numberOne,numberTwo,operation){
    return operation(numberOne,numberTwo);
  }
  