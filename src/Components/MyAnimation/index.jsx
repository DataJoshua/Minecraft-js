import { Physics } from "@react-three/cannon"
import { Sky } from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import { Camera } from "three"
import Floor from "./Floor"
import MyCube from "./MyCube"


function MyAnimation(){

    
   
    return(
        
        <Canvas>
            <pointLight position={[10,10,10]}/>
            <Physics>
                <Floor></Floor>
                <MyCube></MyCube>
            </Physics>
        </Canvas>
        
    )

}

export default MyAnimation