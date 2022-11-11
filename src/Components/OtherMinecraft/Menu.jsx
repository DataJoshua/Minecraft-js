import useCubes from "./useCubes";


function Menu() {

    const [saveWorld, resetWorld] = useCubes(state => [state.saveWorld, state.resetWorld])
    
    
    return (
    
        <div style={{position: "absolute" ,top:50, right: 50, zIndex: 100123}}>
            <button onClick={()=> saveWorld()}>Save World</button>
            <button onClick={()=> resetWorld()}>Reset World</button>
        </div>  
    );
}

export default Menu;