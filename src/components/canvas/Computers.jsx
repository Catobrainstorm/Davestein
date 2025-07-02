import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf');
    
    return (
        <mesh>
            {/* Simplified lighting with prominent white spot light */}
            <ambientLight intensity={0.4} />
            
            {/* Strong white spot light from front-top - main focus */}
            <spotLight 
                position={[0, 5, 8]} 
                intensity={2.5} 
                angle={0.4} 
                penumbra={0.2} 
                color="#ffffff"
                castShadow
                shadow-mapSize={1024}
                shadow-bias={-0.0001}
            />
            
            {/* Secondary fill spot light from side */}
            <spotLight 
                position={[8, 2, 3]} 
                intensity={1.8} 
                angle={0.6} 
                penumbra={0.5} 
                color="#ffffff"
                castShadow
            />
            
            {/* Subtle fill light for overall visibility */}
            <directionalLight 
                position={[-5, 1, -2]} 
                intensity={0.7} 
                color="#efefff" 
            />

            <primitive  
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3.2, -2.2]: [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    // FIX 1: Corrected the variable name to match (lowercase 's')
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        //Add a listener fro changes to the screen size
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        //Set the initial value of the isMobile stae variable
        setIsMobile(mediaQuery.matches);

        //Define a callback function to handle changes to the media query 
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        //Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        //Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }

    }, [])

    return (
        <Canvas
            frameloop="always"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    rotateSpeed={1}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all /> 
        </Canvas>
    );
};

export default ComputersCanvas;