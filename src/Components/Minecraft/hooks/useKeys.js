import { useCallback, useEffect, useState } from "react";

const actionKeys = (key)=>{
    const keys = {
        "KeyW":"moveForwars",
        "KeyS": "moveBackwards",
        "KeyA": "moveLeft",
        "KeyD": "moveRight",
        "Space": "jump",
        "Digit1": "dirt",
        "Digit2":"grass",
        "Digit3":"glass",
        "Digit4":"wood",
                
    }

    return keys[key]
}


function useKeys() {
    
    const [actions, setActions] = useState({

        "moveForwars": false,
        "moveBackwards": false,
        "moveLeft": false,
        "moveRight": false,
        "jump": false,
        "dirt": false,
        "grass": false,
        "glass": false,
        "wood": false
    })

    const handleKeyDown = useCallback((e)=>{
        let action = actionKeys(e.code)
        if(action){
            setActions(prev =>({
                ...prev,
                [action]: true
            }))
        }
    })


    const handleKeyUp = useCallback((e)=>{
        let action = actionKeys(e.code)
        if(action){
            setActions(prev=> ({
                ...prev, 
                [action]: false
            }))
        }
    })

    useEffect(()=>{
        
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("keyup", handleKeyUp)    
        }
    },[])

    return actions
}

export default useKeys;