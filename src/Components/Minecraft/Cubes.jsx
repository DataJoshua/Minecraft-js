import Cube from "./Cube";
import useCubes from "./hooks/useCubes";

function Cubes() {

    const cubes = useCubes(state => state.cubes)

    console.log(cubes);

    return cubes.map((cube)=>{
        return <Cube key={cube.key} position={cube.position} texture={cube.texture}/>
    })
}

export default Cubes;