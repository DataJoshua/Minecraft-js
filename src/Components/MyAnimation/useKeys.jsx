import { useThree } from "@react-three/fiber"
import { useCallback, useEffect, useReducer, useRef } from "react"

function useKeys(){


    const {camera} = useThree()
 
    let moveZ = 0
     
    let moveX = 0
     
    let moveY = 0
     

    const pos = useRef([0,0,0])


    useEffect(()=>{
        camera.subscribe(p => pos.current = p)
    }, [camera.position])
    
    
    
    const handleW = useCallback((e)=>{
        if(e.key == 'w'){
            moveZ++
            pos.current[2] = moveZ
            camera.position.set(pos)
        }
    }) 

    const handleD = useCallback((e)=>{
        if(e.key == 'd'){
            moveX++
            pos.current[0] = moveX
            camera.position.set(pos)
        }
    }) 


    document.addEventListener("keydown", handleW)

    document.addEventListener("keydown", handleD)

  
}


export default useKeys