import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import {Canvas} from "@react-three/fiber"
import Cubes from "./Cubes";
import FPV from "./FPV";
import Ground from "./Ground";
import Menu from "./Menu";
import Player from "./Player";
import TextureSelection from "./TextureSelection";


function MineDisplay() {
    return (  
        <>
        <div className="pointer2">+</div>
        <Menu></Menu>
        <TextureSelection></TextureSelection>
        <Canvas>
            <Sky sunPosition={[10,10,10]}></Sky>
            <ambientLight intensity={0.5}/>
            <FPV></FPV>
            <Physics>
                <Cubes></Cubes>
                <Ground></Ground>
                <Player></Player>
            </Physics>
        </Canvas>
        </>
    )
}

export default MineDisplay;