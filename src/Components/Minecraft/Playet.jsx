import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useKeys from "./hooks/useKeys";

const JUMP = 5
const MOVEMENT_SPEED = 3

function Player() {

    const actions = useKeys()

    const [ref, api] = useSphere(()=> ({
        mass:1,
        type: "Dynamic",
        position: [0,0.5,0]
    }))

    const pos = useRef([0,0,0])

    const vel = useRef([0,0,0])

    const {camera} = useThree()

    useEffect(()=>{
        api.position.subscribe(p => pos.current = p)
    }, [api.position])


    useEffect(()=>{
        api.velocity.subscribe(v => vel.current = v)
    }, [api.position])

    useFrame(()=>{
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

        const front = new Vector3(
            0,
            0,
            (actions.moveBackwards ? 1 : 0) - (actions.moveForwars ? 1: 0)
        )

        const sides = new Vector3(
            (actions.moveLeft ? 1 :0) - (actions.moveRight ? 1 : 0)
            ,
            0,
            0
        )

        const direction = new Vector3()

        direction
            .subVectors(front, sides)
            .normalize()
            .multiplyScalar(MOVEMENT_SPEED)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, vel.current[1], direction.z)    

        if(actions.jump && vel.current[1] < 0.05){
            api.velocity.set(0,JUMP,0)
        }
    })

    return (
        <mesh ref={ref}>
            <sphereBufferGeometry attach="geometry" arg={[1,1,1]} />
            <meshStandardMaterial attach="material" color="black"/>
        </mesh>
    )
}

export default Player;