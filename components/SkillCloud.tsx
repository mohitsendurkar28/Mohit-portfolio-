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
            fontSize={1.1}
            lineHeight={1}
            letterSpacing={0.02}
            material-toneMapped={false}
            color={hovered ? "#d8b277" : "#A78BFA"}
        >
            {children}
        </Text>
    );
}

function Cloud({ radius = 10 }: { radius?: number }) {
    const groupRef = useRef<THREE.Group>(null);

    // Fibonacci Sphere distribution (creates a uniform, solid spherical globe layout)
    const words = useMemo(() => {
        const temp: [THREE.Vector3, string][] = [];
        const count = allSkills.length;
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
            const radiusAtY = Math.sqrt(1 - y * y); // radius at y
            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * radiusAtY * radius;
            const z = Math.sin(theta) * radiusAtY * radius;
            const scaledY = y * radius;

            temp.push([new THREE.Vector3(x, scaledY, z), allSkills[i]]);
        }
        return temp;
    }, [radius]);

    // Rotate the entire sphere group together like a planet
    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2; // Smooth continuous globe rotation
            groupRef.current.rotation.x += delta * 0.05; // Subtle tilting rotation
        }
    });

    return (
        <group ref={groupRef}>
            {words.map(([pos, word], index) => (
                <Word key={index} position={pos}>
                    {word}
                </Word>
            ))}
        </group>
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
                <Canvas camera={{ position: [0, 0, 24], fov: 60 }}>
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