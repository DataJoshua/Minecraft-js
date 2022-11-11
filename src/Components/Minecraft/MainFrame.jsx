
import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import {Canvas} from "@react-three/fiber"
import Cubes from "./Cubes";
import FPV from "./FPV";
import Ground from "./Ground";
import Player from "./Playet";
import "./styles.css"
import TextureSelector from "./TextureSelector";

function MainFrame() {
    

    return (
        <>
        <Canvas>
            <FPV></FPV>
            <Sky sunPosition={[10,10,10]}></Sky>
            <ambientLight intensity={0.5}/>
            <Physics>
                <Ground></Ground>
                <Player></Player>
                <Cubes></Cubes>
            </Physics>
        </Canvas>  
        <div className="pointer">+</div>
        <TextureSelector/>
        </>
    )
}

export default MainFrame;