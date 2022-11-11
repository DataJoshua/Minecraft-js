import { nanoid } from "nanoid";
import create from "zustand"


const getFromLocalStorage = (key)=> JSON.parse(window.localStorage.getItem(key))

const setToLocalStorage = (key, value)=> window.localStorage.setItem(key, JSON.stringify(value)) 

const useCubes = create(set =>({
    cubes: getFromLocalStorage("cubes") || [],
    texture: "dirtTexture",
    createCube: (x,y,z)=> set(state =>({
        cubes: [
            ...state.cubes,
            {
                key: nanoid(),
                position: [x,y,z],
                texture: state.texture            
            }
        ]
    })), 
    removeCube: (x,y,z)=> set(state =>({
        cubes: state.cubes.filter((cube)=>{
            const [posx,posy,posz] = cube.position
            return !(posx == x && posy == y && posz == z)
        } )
    })),
    setTexture: (texture)=> set(()=>({
        texture
    })),
    saveWorld: ()=> set(state=>{
        setToLocalStorage("cubes", state.cubes)
        return state
    }),
    resetWorld: ()=> set(()=>({
        cubes: []
    }))

}))

export default useCubes;