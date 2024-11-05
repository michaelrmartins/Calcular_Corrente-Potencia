// Validate received values / Valid = True / Invalid = False
function isValidInputs(voltage, resistance){
    console.log(voltage, resistance);
    return voltage >= 1 && resistance >= 1;
}

function setDefaultValues(value){
    document.getElementById("voltage").value = value;
    main();
}

function setResistanceBySlider(value){
    document.getElementById("resistance").value = value;
    main();
}

// Update values on frontend -- Send values to frontend
function updateValues(calculatedRoundedAmperes, calculatedRoundedWatts){
    document.getElementById("result_amperes").innerHTML= "A Corrente é de " + calculatedRoundedAmperes + " Amperes (A)";
    document.getElementById("result_watts").innerHTML= "Com uma potência de " + calculatedRoundedWatts + " Watts (W)";
}

// Show error messages on frontend
function showError(message){
    document.getElementById("message").innerHTML = message;
}

// Calculate Function
function calculate(voltage, resistance){
     
    // Calculate Ampere
    const ampere = voltage / resistance;
    const ampereRounded = ampere.toFixed(2);
    
    //Calculate Watts
    const watts = voltage * ampere;
    const wattsRounded = watts.toFixed(2);

    updateValues(ampereRounded, wattsRounded);
}

// Main function // receive, validate and calculate values
function main(){
    const inputVoltage = parseFloat(document.getElementById("voltage").value);
    const inputResistance = parseFloat(document.getElementById("resistance").value);

    let validateReturn=isValidInputs(inputVoltage, inputResistance)
    console.log(validateReturn)
    if (!isValidInputs(inputVoltage, inputResistance)){
        showError("O valor inserido não pode ser menor ou igual a 0.");
        return;
    } else {
    
    // Remove Error Message
    showError("")
    // Call Calc Function
    calculate(inputVoltage, inputResistance);
    }
}

// Add Event Listener
document.querySelectorAll('.inputValue').forEach(input => {
    input.addEventListener('input', function(){ main() })  
})


// // Dedub Proposes
// function Debug(){
//     // Debug
//     console.log(voltage);
//     console.log(resistance);
//     // console.log(ampere);
//     console.log(ampereRounded);
//     console.log(watts);
//     console.log(wattsRounded);

// }