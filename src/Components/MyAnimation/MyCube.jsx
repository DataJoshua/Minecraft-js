
import {useBox} from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import useKeys from './useKeys';


function MyCube() {

    const {camera} = useThree()
    
    const [ref, api] = useBox(()=> ({
        type: "Kinematic",
        mass: 1,
        position: [0,1,-2]
    }))

    camera.position.set(0,1,0)
    
    const pos = useRef([0,0,0])

    const velocity = useRef([0,0,0])

    useEffect(()=>{
        api.velocity.subscribe( v => velocity.current = v)
    },[api.velocity])


    useEffect(()=>{
        api.position.subscribe( p => pos.current = p)
        console.log(pos);
    },[api.position])
    api.velocity.set(1,0,0)
    


    useKeys()

    return ( 
        <mesh  ref={ref}>
            <boxBufferGeometry args={[1,1,1]}/>
            <meshStandardMaterial color="black"></meshStandardMaterial>
        </mesh>
    );


}

export default MyCube; 