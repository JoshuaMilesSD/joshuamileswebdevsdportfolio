import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import './HeroScene.css'

function AnimatedBlob({ mouse }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15 + mouse.current.y * 0.4
      meshRef.current.rotation.y = t * 0.2 + mouse.current.x * 0.4
      meshRef.current.position.y = Math.sin(t * 0.6) * 0.15
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.5, 128, 128]} scale={1.7}>
      <MeshDistortMaterial
        color="#8b6fd6"
        distort={0.42}
        speed={1.6}
        roughness={0.15}
        metalness={0.4}
      />
    </Sphere>
  )
}

function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="hero-scene">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 5]} intensity={1.4} color="#c7d2fe" />
        <pointLight position={[-3, -2, 2]} intensity={1} color="#667eea" />
        <AnimatedBlob mouse={mouse} />
      </Canvas>
    </div>
  )
}

export default HeroScene
