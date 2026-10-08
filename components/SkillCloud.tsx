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

function Word({ children, position }: { children: string; position: THREE.Vector3 }) {
    const ref = useRef<any>();
    const [hovered, setHovered] = useState(false);

    const over = (e: any) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
    };

    const out = () => {
        setHovered(false);
        document.body.style.cursor = "auto";
    };

    useFrame(({ camera }) => {
        if (ref.current) {
            // Billboarding effect: make text always face the camera perfectly
            ref.current.quaternion.copy(camera.quaternion);
        }
    });

    return (
        <Text
            ref={ref}
            onPointerOver={over}
            onPointerOut={out}
            position={position}
            fontSize={1.2}
            lineHeight={1}
            letterSpacing={0.02}
            material-toneMapped={false}
            color={hovered ? "#d8b277" : "#A78BFA"}
        >
            {children}
        </Text>
    );
}

function Cloud({ radius = 11 }: { radius?: number }) {
    // Use Fibonacci sphere algorithm to evenly distribute words in 3D space
    const words = useMemo(() => {
        const temp: [THREE.Vector3, string][] = [];
        const count = allSkills.length;
        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2;
            const r = Math.sqrt(1 - y * y);
            const theta = Math.PI * 2.39996 * i; // Golden angle
            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;
            temp.push([new THREE.Vector3(x * radius, y * radius, z * radius), allSkills[i]]);
        }
        return temp;
    }, [radius]);

    // REMOVED the conflicting group rotation! 
    // We now just render the words statically and let OrbitControls spin the camera.

    return (
        <>
            {words.map(([pos, word], index) => (
                <Word key={index} position={pos}>
                    {word}
                </Word>
            ))}
        </>
    );
}

// Fallback loader while the 3D canvas is rendering
function Loader() {
    return (
        <div className="absolute inset-0 flex items-center justify-center text-accentGold font-mono text-sm">
            Loading 3D Interface...
        </div>
    );
}

export default function SkillCloud() {
    return (
        <div className="w-full h-[450px] lg:h-[600px] cursor-grab active:cursor-grabbing relative">
            <Suspense fallback={<Loader />}>
                <Canvas camera={{ position: [0, 0, 25], fov: 60 }}>
                    <fog attach="fog" args={["#111111", 10, 40]} />
                    <ambientLight intensity={0.5} />
                    <Cloud radius={11} />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={1.5} // Sped up slightly to replace the old group rotation
                    />
                </Canvas>
            </Suspense>
        </div>
    );
}