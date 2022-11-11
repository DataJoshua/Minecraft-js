import { act } from "@react-three/fiber";
import { useEffect, useState } from "react";
import useCubes from "./useCubes";
import useKeys from "./useKeys";
import {grassImg, glassImg} from "../../images/images"

const images = {
    "grassTexture": grassImg,
    "glassTexture": glassImg
}

function TextureSelection() {
    const [active, setActive] = useState(false)

    const [texture, setTexture] = useCubes(state => [state.texture, state.setTexture])

    const actions = useKeys()

    const {grassTexture, glassTexture} = actions

    useEffect(()=>{
        
        const textures = {
            grassTexture,
            glassTexture
        }
        
   
        const pressedTexture = Object.entries(textures).find(([k, v])=> v)
        if(pressedTexture){
            setActive(pressedTexture)
            setTexture(pressedTexture[0])
        }
    }, [grassTexture, glassTexture])

    useEffect(()=>{
        const textureTimeOut = setTimeout(()=>{
            setActive(false)
        }, 2000)
       
        return ()=>{
            clearTimeout(textureTimeOut)
        }

    }, [active])

    return active && ( 
        <div style={{position: "absolute", zIndex: 100, top:"50%", right: "50%", transform:"translate(-50%, -50%) scale(10)"}}>
            {Object.entries(images).map(([k,v])=>{
                return <img key={k} src={v} className={k === texture ? "active": null}/>
            })}
        </div>
     )
}

export default TextureSelection;