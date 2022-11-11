import { useCallback, useEffect, useState } from "react"

const getKeyActions = (key)=>{
    const keyActions = {
        "KeyW": "moveForwars",
        "KeyS": "moveBackwards",
        "KeyA": "moveLeft",
        "KeyD": "moveRight",
        "Space": "jump",
        "Digit1": "grassTexture",
        "Digit2": "glassTexture",
        "Digit3": "mariasTexture"
    }

    return keyActions[key]
}

function useKeys() {

    const [actions, setActions] = useState({
        "moveForwars": false, 
        "moveBackwards": false,
        "moveRight": false,
        "moveLeft": false,
        "jump": false,
        "grassTexture": false,
        "glassTexture": false,
        "mariasTexture": false

    })

    const handleKeyDown = useCallback((e)=>{
        let code = getKeyActions(e.code)
        if(code){
            setActions(prev=> ({
                ...prev, 
                [code]: true
            }))
        }
    })

    const handleKeyUp = useCallback((e)=>{
        let code = getKeyActions(e.code)
        if(code){
            setActions(prev=> ({
                ...prev,
                [code]: false
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
    }, [])

    return actions
}

export default useKeys;