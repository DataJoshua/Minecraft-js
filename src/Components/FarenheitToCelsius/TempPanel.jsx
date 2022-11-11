
const scales = {
    "c" : "Celsius",
    "f" : "farenheit"
}

function TempPanel({scale, value, onInputChange}) {

    return ( 
        <fieldset>
            <legend>{scales[scale]}</legend>
            <input type="text" onChange={(e)=> onInputChange(e)} value={value}/>
        </fieldset> 
    )
}

export default TempPanel;