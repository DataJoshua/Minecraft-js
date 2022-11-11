import { useBox, useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useKeys from "./useKeys";

const JUMP_SPEED = 3
const WALK_SPEED = 5

function Player() {

    const actions = useKeys()

    const [ref, api] = useSphere(()=> ({
        type: 'Dynamic',
        mass: 1,
        position: [0,0.5,0]
    }))

    const pos = useRef([0,0,0])

    const {camera} = useThree()

    const vel = useRef([0,0,0])

    useEffect(()=>{
        api.position.subscribe(p => pos.current = p)
    },[api.position])


    useEffect(()=>{
        api.velocity.subscribe(v => vel.current = v)
    }, [api.velocity])


    useFrame(()=>{
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))    

        const front = new Vector3(
            0,
            0,
            (actions.moveBackwards ? 1 : 0) - (actions.moveForwars ? 1 : 0)
        )

        const sides = new Vector3(
            (actions.moveLeft ? 1 : 0) - (actions.moveRight ? 1 : 0),
            0,
            0
        )

        const direction = new Vector3()

        direction
            .subVectors(front, sides)
            .normalize()
            .multiplyScalar(WALK_SPEED)
            .applyEuler(camera.rotation)


        api.velocity.set(direction.x, vel.current[1], direction.z)

        if(actions.jump && vel.current[1] < 0.05){
            api.velocity.set(vel.current[0], JUMP_SPEED, vel.current[2])
        }
    })


    return ( 
        <mesh ref={ref}>
            <sphereBufferGeometry attach="geometry" args={[1,1,1]}/>
            <meshStandardMaterial attach="material" color="red"/>
        </mesh> 
    )
}

export default Player;