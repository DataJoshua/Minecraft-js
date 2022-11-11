import { useEffect, useState } from "react";
import TempPanel from "./TempPanel";


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
  

function Panel() {

    const [value, setValue] = useState("")
    const [scale, setScale] = useState("")

    const handleFarenheit = (e)=>{
        setValue(e.target.value)  
        setScale("f")
    }

    const handleCelsius = (e)=>{
        setValue(e.target.value)
        setScale("c")
    }


    const valueCelcius = scale == "f" ? toCelsius(value) : value
    const valueFareheit = scale == "c" ? toFahrenheit(value) : value 

    return ( 
        <>
            <TempPanel scale="c" onInputChange={handleCelsius} value={valueCelcius}></TempPanel>
            <TempPanel scale="f" onInputChange={handleFarenheit} value={valueFareheit}></TempPanel>
        </>
    )
}

export default Panel;