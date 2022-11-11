
import { useEffect, useState } from "react"
import  {
    dirtImg,
    grassImg,
    glassImg,
    logImg,
    woodImg
} from "../../images/images"
import "./styles.css"
import useCubes from "./hooks/useCubes"
import useKeys from "./hooks/useKeys"

const imgs = {
    "dirtTexture":dirtImg,
    "grassTexture": grassImg,
    "glassTexture":glassImg,
    "woodTexture":woodImg
}

function TextureSelector() {
    
    const [texture, setTexture] = useCubes(state => [state.texture, state.setTexture])

    const [active, setActive] = useState(false)

    const { dirt,
        grass,
        glass,
        wood
    } = useKeys()


    const imageAction = { dirt,
        grass,
        glass,
        wood
    } 

    useEffect(()=>{
        const activeTimeOut = setTimeout(()=>{
            setActive(false)
        }, 3000)

        return ()=>{
            clearTimeout(activeTimeOut)
        }

    },[active])

    useEffect(()=>{
        let action = Object.entries(imageAction).find(([k,v]) => v)
        if(action){
            setTexture(action[0] + "Texture")
            setActive(action[1])
        }

    },[dirt,grass,glass,wood])

    return active &&(

        <div className="texture-container">
            {Object.entries(imgs).map(([k,v])=>{
                return <img key={k} src={v} alt={k} className={k === texture ? "active" : null}/>
            })}
        </div>
    ) 
}

export default TextureSelector;