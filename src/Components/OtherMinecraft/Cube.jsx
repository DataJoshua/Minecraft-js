import { useBox } from "@react-three/cannon";
import useCubes from "./useCubes";
//import textures from '../../images/textures'

function Cube({position, texture}) {

    const [ref, api] = useBox(()=> ({
        position,
        mass: 1, 
        type: "Static"
    }))

    const [createCube, removeCube] = useCubes(state => [state.createCube, state.removeCube])
    //const actualTexture = textures[texture]

    return (
        <mesh ref={ref}
            onClick={(e)=>{
                
                console.log(e.altKey);
                e.stopPropagation()
                const actualFace = Math.floor(e.faceIndex / 2)
                const {x,y,z} = ref.current.position

                if(e.altKey){
                    removeCube(x,y,z)
                }
                else if(actualFace == 0){
                    createCube(x + 1,y,z)
                    return
                }   
                else if(actualFace == 1){
                    createCube(x - 1,y,z)
                    return
                }   
                else if(actualFace == 4){
                    createCube(x,y,z+1)
                    return
                }
                else if(actualFace == 5){
                    createCube(x,y,z-1)
                    return
                }
                else if(actualFace == 2){
                    createCube(x,y + 1,z)
                    return
                }
                else if(actualFace == 3){
                    createCube(x,y -1,z)
                    return
                }            
            }}    
        >
            <boxBufferGeometry attach="geometry" args={[1,1,1]}/>
            <meshStandardMaterial attach="material"/>
        </mesh>  
    );
}

export default Cube;