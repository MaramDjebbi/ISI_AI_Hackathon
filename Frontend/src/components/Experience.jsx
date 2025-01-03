import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";

export const Experience = () => {
    const texture = useTexture("textures/youtubeBackground.jpg");
    const viewport = useThree((state) => state.viewport);

    return (
        <>
            <OrbitControls />
            <Avatar position={[0, -3, 5]} scale={2} />
            <Environment preset="sunset" />
            <color attach="background" args={["#ADD8E6"]} /> {/* Replace "#ffffff" with your preferred color */}

        </>
    );
};
