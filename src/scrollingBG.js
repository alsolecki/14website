import './index.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 10000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// camera.position.setZ(-15) ;
const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`

const randomColorA = randomColor;

let randomColorB = `hsl(${Math.random() * 360}, 100%, 75%)`

let randomColorC = `hsl(${Math.random() * 360}, 100%, 75%)`



//Torus Geometry

const geometry = new THREE.TorusGeometry(8, 1.25, 18, 100)
const material = new THREE.MeshStandardMaterial({ color: randomColorA });
const torus = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.TorusGeometry(10, 0.75, 4, 100)
const material2 = new THREE.MeshStandardMaterial({ color: randomColorB });
const torus2 = new THREE.Mesh(geometry2, material2);

const geometry3 = new THREE.TorusGeometry(12, 1, 18, 100)
const material3 = new THREE.MeshStandardMaterial({ color: randomColorC });
const torus3 = new THREE.Mesh(geometry3, material3);

const geometry4 = new THREE.TorusGeometry(16, 0.5, 18, 100);
const material4 = new THREE.MeshStandardMaterial({ color: randomColorA })
const torus4 = new THREE.Mesh(geometry4, material4);

scene.add(torus, torus2, torus3, torus4)


/**
 * Particles
 */

// Geometry
const particlesCount = 39;
const positions = new Float32Array(particlesCount * 3)

for (let i = 0; i < particlesCount; i++) {
  positions[i * 3 + 0] = (Math.random() - 0.5) * 80
  positions[i * 3 + 1] = (Math.random() - 0.5) * 30
  positions[i * 3 + 2] = (Math.random() - 0.5) * 60
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))


const parameters = {
  materialColor: 'rgb(255, 255, 255)'
}



// Material
const particlesMaterial = new THREE.PointsMaterial({
  color: parameters.materialColor,
  sizeAttenuation: true,
  size: 0.03
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)



//LIGHTS

const pointLight = new THREE.PointLight(0xffffff, 100, 100);
pointLight.position.set(20, 20, -20)

const directionalLight = new THREE.DirectionalLight(0xBBCCDD, 1, 100)
directionalLight.position.set(50, 50, 0)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);

scene.add(pointLight, directionalLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

const controls = new OrbitControls(camera, renderer.domElement);

// CAMERA MOVEMENT

function moveCamera() {

  const t = document.body.getBoundingClientRect().top - 1;

  camera.position.z = t * 0.0075;
  // camera.position.x = t * -0.0002;
  // camera.position.y = t * -0.0002;

  // console.log(t);
}

document.body.onscroll = moveCamera

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.y += 0.0025;
  torus2.rotation.y -= 0.001;
  torus3.rotation.y += 0.0015;
  torus4.rotation.y -= 0.0005;

  controls.update();

  renderer.render(scene, camera);
}

animate();