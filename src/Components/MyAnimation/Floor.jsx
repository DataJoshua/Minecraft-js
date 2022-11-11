import { usePlane } from "@react-three/cannon";
import { Camera } from "three";

function Floor() {
    
    const [ref, api] = usePlane(()=> ({
        rotation: [-Math.PI / 2,0,0],position: [0,0,0]
    }))
    

    return (
    
        <mesh ref={ref}>
            <planeBufferGeometry attach="geometry" args={[100,100]}/>
            <meshStandardMaterial attach="material" color="green"/>
        </mesh> 
        
    );
}

export default Floor;