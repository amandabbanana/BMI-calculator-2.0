function calculateBMI() {

    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid values for weight and height.';
        return;
    }

    var bmi = weight / Math.pow(height / 100, 2);

    var category = '';
    if (bmi < 16) {
        category = 'Severe Thinness';
    } else if (bmi >= 16 && bmi < 17) {
        category = 'Moderate Thinness';
    } else if (bmi >= 17 && bmi < 18.5) {
        category = 'Mild Thinness';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else if (bmi >= 30 && bmi < 35) {
        category = 'Obese Class I';
    } else if (bmi >= 35 && bmi < 40) {
        category = 'Obese Class II';
    } else {
        category = 'Obese Class III';
    }

    document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi.toFixed(1) + '<br>Category: ' + category;
}
