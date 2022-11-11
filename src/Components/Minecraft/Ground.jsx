import { usePlane } from "@react-three/cannon";
import {grassTexture} from "../../images/textures"
import useCubes from "./hooks/useCubes";

function Ground() {
    
    const createBlock = useCubes(state => state.createCube)

    const [ref] = usePlane(()=>({
        rotation: [-Math.PI /2 , 0, 0], position: [0,-0.5,0]
    }))
    
    return (
        <mesh 
            ref={ref}
            onClick={(e)=>{
                e.stopPropagation()
                const [x,y,z] = e.point
                createBlock(x,0,z)                
            }}
        >
            <planeBufferGeometry attach="geometry" args={[100,100]} />
            <meshStandardMaterial attach="material" map={grassTexture} />
        </mesh>  
    )
}

export default Ground;