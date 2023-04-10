const resetButton = document.querySelector('.resetButton');
const reset = () => {
    result.innerHTML = '';
}
const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    const iptempSelected = document.getElementById('ip_temp_diff');
    const optempSelected = document.getElementById('op_temp_diff');
    const ipvalueTemp = ip_temp_diff.options[iptempSelected.selectedIndex].value;
    const opvalueTemp = op_temp_diff.options[optempSelected.selectedIndex].value;
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(2);
        return fahrenheit;
    }
    const celToKel = (cel) => {
        let k1 = (+cel + 273.15).toFixed(2);
        return k1;
    }
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(2);
        return celsius;
    }
    const fahToKel = (fah) => {
        let kelvin = ((fah - 32) * (5 / 9) + 273.15).toFixed(2);
        return kelvin;
    }
    const kelToCel = (kel) => {
        let celsius = (kel - 273.15).toFixed(2);
        return celsius;
    }
    const kelToFah = (kel) => {
        let fahrenheit = ((kel - 273.15) * (9 / 5) + 32).toFixed(2);
        return fahrenheit;
    }

    if (ipvalueTemp == 'ip_cel' && opvalueTemp == 'op_fah') {
        document.getElementById("result").innerHTML = inputTemp + " degree celcius is equals to " + celToFah(inputTemp) + " degree fahrenheit";
    }
    else if (ipvalueTemp == 'ip_cel' && opvalueTemp == 'op_kel') {
        document.getElementById("result").innerHTML = inputTemp + " degree celcius is equals to " + celToKel(inputTemp) + " degree kelvin";
    }
    else if (ipvalueTemp == 'ip_fah' && opvalueTemp == 'op_cel') {
        document.getElementById("result").innerHTML = inputTemp + " degree fahrenheit is equals to " + fahToCel(inputTemp) + " degree celcius";
    }
    else if (ipvalueTemp == 'ip_fah' && opvalueTemp == 'op_kel') {
        document.getElementById("result").innerHTML = inputTemp + " degree fahrenheit is equals to " + fahToKel(inputTemp) + " degree kelvin";
    }
    else if (ipvalueTemp == 'ip_kel' && opvalueTemp == 'op_cel') {
        document.getElementById("result").innerHTML = inputTemp + " degree kelvin is equals to " + kelToCel(inputTemp) + " degree celcius";
    }
    else if (ipvalueTemp == 'ip_kel' && opvalueTemp == 'op_fah') {
        document.getElementById("result").innerHTML = inputTemp + " degree kelvin is equals to " + kelToFah(inputTemp) + " degree fahrenheit";
    }
    else if (ipvalueTemp.selectedIndex == opvalueTemp.selectedIndex) {
        document.getElementById("result").innerHTML = "Please select different option to convert";
    }
}
resetButton.addEventListener('click', reset);
Footer