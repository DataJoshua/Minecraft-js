import { nanoid } from "nanoid"
import create from "zustand"

const useCubes = create((set, get)=>({
    cubes: [{
        key: nanoid(), 
        position: [0,0,-10],
        texture: "glassTexture"
    }],
    texture: "grassTexture",
    setTexture: (texture)=> set(state => ({
        texture
    })),
    createCube: (x,y,z)=> set(state => ({
        cubes: [
            ...state.cubes,
            {
                key: nanoid(), 
                position: [x,y,z],
                texture: state.texture
            }
        ]
    })),
    deleteCube: (x,y,z)=> set(state =>({
        cubes: state.cubes.filter(cube=>{
            let [posx,posy,posz] = cube.position
            return !(posx == x && posy == y && posz == z)
        })
    }))
}))


export default useCubes