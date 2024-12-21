function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const conversionType = document.getElementById('conversiontype').value;
    const resultElement = document.getElementById('result');

    if (isNaN(temperature)) {
        resultElement.value = "Please enter a valid number.";
        return;
    }

    let result;
    if (conversionType === 'c-to-f') {
        // Celsius to Fahrenheit: (°C × 9/5) + 32
        result = (temperature * 9 / 5) + 32;
        resultElement.value = `${result.toFixed(2)}°F.`;
    } else if (conversionType === 'f-to-c') {
        // Fahrenheit to Celsius: (°F − 32) × 5/9
        result = (temperature - 32) * 5 / 9;
        resultElement.value = ` ${result.toFixed(2)}°C.`;
    }
}