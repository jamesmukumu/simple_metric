let input = document.getElementById('input')
const btn  = document.querySelector('button')
var result =  document.querySelector('#result')


// exchanging icon
window.addEventListener('DOMContentLoaded', () => {
    var select1 = document.getElementById('select1')
    var select2 = document.getElementById('select2')
    
    const exchangeIcon = document.querySelector('.fa-exchange-alt')

    exchangeIcon.addEventListener('click', () => {
        // Get the selected options
        const option1 = select1.options[select1.selectedIndex];
        const option2 = select2.options[select2.selectedIndex];

        // Swap the selected options
        select1.removeChild(option1);
        select2.removeChild(option2);

        select1.appendChild(option2);
        select2.appendChild(option1);
    });
});

function convertUnits() {
    var inputValue = input.value;
    var fromUnit = select1.value;
    var toUnit = select2.value;
    
    var convertedValue;
  
    // Perform the conversion
    if (fromUnit === "Kilometer") {
      if (toUnit === "Centimeter") {
        convertedValue = inputValue * 100000;
      } else if (toUnit === "Miles") {
        convertedValue = inputValue * 0.621371;
      } else if (toUnit === "Foot") {
        convertedValue = inputValue * 3280.84;
      } else if (toUnit === "Inches") {
        convertedValue = inputValue * 39370.1;
      }
    } else if (fromUnit === "Centimeter") {
      if (toUnit === "Kilometer") {
        convertedValue = inputValue / 100000;
      } else if (toUnit === "Miles") {
        convertedValue = inputValue * 0.0000062137;
      } else if (toUnit === "Foot") {
        convertedValue = inputValue * 0.0328084;
      } else if (toUnit === "Inches") {
        convertedValue = inputValue * 0.393701;
      }
    } else if (fromUnit === "Miles") {
      if (toUnit === "Kilometer") {
        convertedValue = inputValue * 1.60934;
      } else if (toUnit === "Centimeter") {
        convertedValue = inputValue * 160934;
      } else if (toUnit === "Foot") {
        convertedValue = inputValue * 5280;
      } else if (toUnit === "Inches") {
        convertedValue = inputValue * 63360;
      }
    } else if (fromUnit === "Foot") {
      if (toUnit === "Kilometer") {
        convertedValue = inputValue * 0.0003048;
      } else if (toUnit === "Centimeter") {
        convertedValue = inputValue * 30.48;
      } else if (toUnit === "Miles") {
        convertedValue = inputValue * 0.000189394;
      } else if (toUnit === "Inches") {
        convertedValue = inputValue * 12;
      }
    } else if (fromUnit === "Inches") {
      if (toUnit === "Kilometer") {
        convertedValue = inputValue * 0.0000254;
      } else if (toUnit === "Centimeter") {
        convertedValue = inputValue * 2.54;
      } else if (toUnit === "Miles") {
        convertedValue = inputValue * 0.0000157828;
      } else if (toUnit === "Foot") {
        convertedValue = inputValue * 0.0833333;
      }
    }
  
    result.innerText = convertedValue;
  }
  
btn.addEventListener('click',convertUnits)




// weights



// Function to exchange the select options
function exchangeOptions() {
  var select3 = document.getElementById("selectA");
  var select4 = document.getElementById("selectB");
  
  // Swap the selectedIndex values of the select elements
  var tempIndex = select3.selectedIndex;
  select3.selectedIndex = select4.selectedIndex;
  select4.selectedIndex = tempIndex;
  
  // Swap the innerHTML values of the selected options
  var tempInnerHTML = select3.options[select3.selectedIndex].innerHTML;
  select3.options[select3.selectedIndex].innerHTML = select4.options[select4.selectedIndex].innerHTML;
  select4.options[select4.selectedIndex].innerHTML = tempInnerHTML;
}




// Get the exchange icon element
var exchange = document.querySelector("#exch");

// Attach a click event listener to the exchange icon
exchange.addEventListener("click", exchangeOptions);


var inputt = document.getElementById("inputt");
var selectA = document.getElementById("selectA");
var selectB = document.getElementById("selectB");
var unit = document.getElementById("unit");
var button = document.getElementById("btn");



function convertWeight() {
  var inputValue = inputt.value;
  var a = selectA.value;
  var b = selectB.value;

  var converted;

  // Perform the conversion
  if (a === "Kilograms") {
    if (b === "Kilograms") {
      converted = inputValue;
    } else if (b === "Pounds") {
      converted = inputValue * 2.20462;
    } else if (b === "Grams") {
      converted = inputValue * 1000;
    } else if (b === "Ounce") {
      converted = inputValue * 35.274;
    } else if (b === "Newtons") {
      converted = inputValue * 9.80665;
    }
  } else if (a === "Grams") {
    if (b === "Kilograms") {
      converted = inputValue / 1000;
    } else if (b === "Pounds") {
      converted = inputValue * 0.00220462;
    } else if (b === "Grams") {
      converted = inputValue;
    } else if (b === "Ounce") {
      converted = inputValue * 0.035274;
    } else if (b === "Newtons") {
      converted = inputValue * 0.00980665;
    }
  } else if (a === "Pounds") {
    if (b === "Kilograms") {
      converted = inputValue * 0.453592;
    } else if (b === "Grams") {
      converted = inputValue * 453.592;
    } else if (b === "Pounds") {
      converted = inputValue;
    } else if (b === "Ounce") {
      converted = inputValue * 16;
    } else if (b === "Newtons") {
      converted = inputValue * 4.44822;
    }
  } else if (a === "Ounce") {
    if (b === "Kilograms") {
      converted = inputValue * 0.0283495;
    } else if (b === "Grams") {
      converted = inputValue * 28.3495;
    } else if (b === "Pounds") {
      converted = inputValue * 0.0625;
    } else if (b === "Ounce") {
      converted = inputValue;
    } else if (b === "Newtons") {
      converted = inputValue * 0.2780139;
    }
  } else if (a === "Newtons") {
    if (b === "Kilograms") {
      converted = inputValue * 0.101972;
    } else if (b === "Grams") {
      converted = inputValue * 101.972;
    } else if (b === "Pounds") {
      converted = inputValue * 0.224809;
    } else if (b === "Ounce") {
      converted = inputValue * 3.596943;
    } else if (b === "Newtons") {
      converted = inputValue;
    }
  }

  unit.innerText = converted;
}





button.addEventListener("click", convertWeight);

// Get the required elements from the HTML
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const calculateButton = document.getElementById('calculateButton');
const bmiElement = document.getElementById('bmi');

// Function to calculate BMI
function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // convert cm to meters

  if (isNaN(weight) || isNaN(height)) {
    bmiElement.innerText = 'Please enter valid weight and height.';
    return;
  }

  const bmi = (weight / (height * height)).toFixed(3);
  

  // if (bmi < 18.5 || bmi > 25) {
  //   bmiElement.innerText = `your BMI is ${bmi}.Kindly fix your diet`;
  // } else {
  //   bmiElement.innerText = `your BMI is ${bmi}.It is fine`;


  // }
  if(bmi< 18.5){
    bmiElement.innerText = `Your BMI is ${bmi} and Weight Status is Underweight`
    
    
    }
    else if(bmi >= 18.5 && bmi < 24.9){
      bmiElement.innerText = `Your BMI is ${bmi} and Weight Status is Normalweight`


    }
    else if(bmi >= 25.0 && bmi < 29.9){
      bmiElement.innerText = `Your BMI is ${bmi} and Weight Status is Overweight`


    }
    else if(bmi >= 30.0 && bmi < 34.9){
      bmiElement.innerText = `Your BMI is ${bmi} and Weight Status is Obesity Class 1`


    }
    else if(bmi >= 35.0 && bmi < 39.9){
      bmiElement.innerText = `Your BMI is ${bmi} and Weight Status is Obesity Class 2`


    }
    if(bmi>=40){
      bmiElement.innerText = `Your BMI is ${bmi} and Weight Status is Obesity Class 3`
    }
}






// Add click event listener to the calculate button
calculateButton.addEventListener('click', calculateBMI);



