import { usePlane } from "@react-three/cannon";
import { useCubeTexture } from "@react-three/drei";
//import textures from "../../images/textures"
import useCubes from "./useCubes";

function Ground() {

    const [ref] = usePlane(()=>({
        rotation: [-Math.PI / 2,0,0],
        position: [0,-0.5,0]
    }))

    const [createCube] = useCubes(state => [state.createCube])



    //const {woodTedxture} = textures


    return ( 
        <mesh ref={ref}
            onClick={(e)=>{
                e.stopPropagation()
                const [x, y, z] = Object.values(e.point)
                createCube(x,0,z)
             
            }}
        >
            <planeBufferGeometry attach="geometry" args={[100,100]}/>
            <meshStandardMaterial attach="material" />
        </mesh>
    )
}

export default Ground;