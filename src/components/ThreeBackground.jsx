import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current

        // Scene
        const scene = new THREE.Scene()

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 10000)
        camera.position.z = 0
        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)

        // Colors
        const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`
        const randomColorA = randomColor
        const randomColorB = `hsl(${Math.random() * 360}, 100%, 75%)`
        const randomColorC = `hsl(${Math.random() * 360}, 100%, 75%)`

        // Torus rings
        const torus = new THREE.Mesh(
            new THREE.TorusGeometry(8, 1.25, 18, 100),
            new THREE.MeshStandardMaterial({ color: randomColorA })
        )
        const torus2 = new THREE.Mesh(
            new THREE.TorusGeometry(10, 0.75, 4, 100),
            new THREE.MeshStandardMaterial({ color: randomColorB })
        )
        const torus3 = new THREE.Mesh(
            new THREE.TorusGeometry(12, 1, 18, 100),
            new THREE.MeshStandardMaterial({ color: randomColorC })
        )
        const torus4 = new THREE.Mesh(
            new THREE.TorusGeometry(16, 0.5, 18, 100),
            new THREE.MeshStandardMaterial({ color: randomColorA })
        )
        scene.add(torus, torus2, torus3, torus4)

        // Particles
        const particlesCount = 39
        const positions = new Float32Array(particlesCount * 3)
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 80
            positions[i * 3 + 1] = (Math.random() - 0.5) * 30
            positions[i * 3 + 2] = (Math.random() - 0.5) * 60
        }
        const particlesGeometry = new THREE.BufferGeometry()
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const particlesMaterial = new THREE.PointsMaterial({
            color: 'rgb(255, 255, 255)',
            sizeAttenuation: true,
            size: 0.03
        })
        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)

        // Lights
        const pointLight = new THREE.PointLight(0xffffff, 100, 100)
        pointLight.position.set(20, 20, -20)
        const directionalLight = new THREE.DirectionalLight(0xBBCCDD, 1, 100)
        directionalLight.position.set(50, 50, 0)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.05)
        scene.add(pointLight, directionalLight, ambientLight)

        // Scroll-driven camera
        const handleScroll = () => {
            camera.position.z = window.scrollY * 0.025
        }
        window.addEventListener('scroll', handleScroll)

        // Animation loop
        let animationId
        const animate = () => {
            animationId = requestAnimationFrame(animate)
            torus.rotation.y += 0.0025
            torus2.rotation.y -= 0.001
            torus3.rotation.y += 0.0015
            torus4.rotation.y -= 0.0005
            renderer.render(scene, camera)
        }
        animate()

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
        }
    }, [])

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
}

export default ThreeBackground