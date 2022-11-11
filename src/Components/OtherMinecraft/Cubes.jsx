import Cube from "./Cube";
import useCubes from "./useCubes";


function Cubes() {

    let [cubes] = useCubes(state => [state.cubes, state.removeCube])


    return cubes.map(({position, key, texture}) =>{
        return <Cube key={key} position={position} texture={texture}></Cube>
    })
}

export default Cubes;