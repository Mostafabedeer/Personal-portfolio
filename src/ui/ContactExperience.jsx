import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ContactBoy } from "./models/ContactBoy";

function ContactExperience() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1C34FF"} />
      <group rotation={[0, -0.5, 0]}>
        <Text3D
          position={[-3, -3, -2]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font='/public/fonts/Inter_Bold.json'
        >
          {`hello`}
          <meshNormalMaterial />
        </Text3D>
        <ContactBoy scale={3} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
}

export default ContactExperience;
