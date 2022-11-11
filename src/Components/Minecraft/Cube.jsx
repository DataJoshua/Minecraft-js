import { useBox } from "@react-three/cannon";
import * as textures from "../../images/textures"
import useCubes from "./hooks/useCubes";

function Cube({position, texture}) {
    

    const createCube = useCubes(state => state.createCube)

    const deleteCube = useCubes(state => state.deleteCube)

    const [ref] = useBox(()=> ({
        position,
        type:"Static"
    }))

    const actualTexture = textures[texture]
    
    return ( 
        <mesh 
            ref={ref}
            onClick={(e)=>{
                e.stopPropagation()
                const [x,y,z] = position
                
                if(e.altKey){
                    deleteCube(x,y,z)
                    console.log("cube deletd");
                    return
                }

                let currentFace = Math.floor(e.faceIndex / 2)
                switch(currentFace){

                    case 0:
                        createCube(x+1,y,z)
                        break;
                    case 1:
                        createCube(x-1,y,z)
                        break;
                    case 4:
                        createCube(x,y,z+1)
                        break;
                    case 5:
                        createCube(x,y,z-1)
                        break;
                    case 2:
                        createCube(x,y + 1,z)
                        break;
                    case 3:
                        createCube(x,y -1,z)
                        break;
                        
                }

            }}    
        >
            <boxBufferGeometry args={[1,1,1]}/>
            <meshStandardMaterial map={actualTexture}/>
        </mesh>
     )
}

export default Cube;