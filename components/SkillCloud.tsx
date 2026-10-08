"use client";

import { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "@/lib/data";

// Extract and flatten all unique skills
const allSkills = [
    ...skills.uiux,
    ...skills.graphic,
    ...skills.frontend,
    ...skills.tools,
    ...skills.other,
].filter((item, index, self) => self.indexOf(item) === index);

function Word({
    children,
    position,
}: {
    children: string;
    position: THREE.Vector3;
}) {
    const ref = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    // Reusable quaternions to avoid creating new objects every frame
    const cameraQuaternion = useRef(new THREE.Quaternion());
    const parentQuaternion = useRef(new THREE.Quaternion());
    const inverseParentQuaternion = useRef(new THREE.Quaternion());

    const over = (e: any) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
    };

    const out = () => {
        setHovered(false);
        document.body.style.cursor = "grab";
    };

    useFrame(({ camera }) => {
        if (!ref.current) return;

        const parent = ref.current.parent;

        if (!parent) return;

        /*
         * Keep the text facing the camera without mirroring.
         *
         * The SkillCloud group rotates like a globe.
         * Since each Text is a child of that rotating group,
         * simply copying camera.quaternion causes incorrect local
         * rotation and can make the text appear mirrored.
         *
         * We convert the camera's world rotation into the Text's
         * parent's local coordinate system.
         */

        camera.getWorldQuaternion(cameraQuaternion.current);
        parent.getWorldQuaternion(parentQuaternion.current);

        inverseParentQuaternion.current
            .copy(parentQuaternion.current)
            .invert();

        ref.current.quaternion
            .copy(inverseParentQuaternion.current)
            .multiply(cameraQuaternion.current);
    });

    return (
        <Text
            ref={ref}
            onPointerOver={over}
            onPointerOut={out}
            position={position}
            fontSize={1.1}
            lineHeight={1}
            letterSpacing={0.02}
            material-toneMapped={false}
            color={hovered ? "#d8b277" : "#A78BFA"}
            anchorX="center"
            anchorY="middle"
        >
            {children}
        </Text>
    );
}

function Cloud({ radius = 10 }: { radius?: number }) {
    const groupRef = useRef<THREE.Group>(null);

    // Fibonacci Sphere distribution
    const words = useMemo(() => {
        const temp: [THREE.Vector3, string][] = [];
        const count = allSkills.length;

        if (count === 0) {
            return temp;
        }

        if (count === 1) {
            temp.push([
                new THREE.Vector3(0, 0, radius),
                allSkills[0],
            ]);

            return temp;
        }

        const phi = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * radiusAtY * radius;
            const z = Math.sin(theta) * radiusAtY * radius;
            const scaledY = y * radius;

            temp.push([
                new THREE.Vector3(x, scaledY, z),
                allSkills[i],
            ]);
        }

        return temp;
    }, [radius]);

    // Rotate the entire skill cloud like a globe
    useFrame((_, delta) => {
        if (!groupRef.current) return;

        groupRef.current.rotation.y += delta * 0.2;
        groupRef.current.rotation.x += delta * 0.05;
    });

    return (
        <group ref={groupRef}>
            {words.map(([pos, word], index) => (
                <Word key={`${word}-${index}`} position={pos}>
                    {word}
                </Word>
            ))}
        </group>
    );
}

// Fallback loader
function Loader() {
    return (
        <div className="absolute inset-0 flex items-center justify-center text-accentGold font-mono text-sm">
            Loading 3D Interface...
        </div>
    );
}

export default function SkillCloud() {
    return (
        <div className="relative w-full h-[450px] lg:h-[600px] cursor-grab active:cursor-grabbing">
            <Suspense fallback={<Loader />}>
                <Canvas
                    camera={{
                        position: [0, 0, 24],
                        fov: 60,
                    }}
                >
                    <fog attach="fog" args={["#111111", 12, 40]} />

                    <ambientLight intensity={0.5} />

                    <Cloud radius={9.5} />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        rotateSpeed={0.6}
                    />
                </Canvas>
            </Suspense>
        </div>
    );
}