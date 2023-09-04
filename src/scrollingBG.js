import './index.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 10000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

// camera.position.setZ(-15) ;

 



const randomColorA = `hsl(${Math.random() * 360}, 100%, 75%)`
const randomColorB = `hsl(${Math.random() * 360}, 100%, 75%)`
const randomColorC = `hsl(${Math.random() * 360}, 100%, 75%)`


//Torus Geometry

const geometry = new THREE.TorusGeometry( 8, 1, 18, 100 )
const material = new THREE.MeshStandardMaterial( { color: randomColorA } );
const torus = new THREE.Mesh( geometry, material );

const geometry2 = new THREE.TorusGeometry( 10, 1, 18, 100 )
const material2 = new THREE.MeshStandardMaterial( { color: randomColorB } );
const torus2 = new THREE.Mesh( geometry2, material2 );

const geometry3 = new THREE.TorusGeometry( 12, 1, 18, 100 )
const material3 = new THREE.MeshStandardMaterial( { color: randomColorC } );
const torus3 = new THREE.Mesh( geometry3, material3 );

const geometry4 = new THREE.SphereGeometry( 1, 64, 32 ); 
const material4 = new THREE.MeshPhongMaterial({ color: 'hsl(0, 0%, 50%,)', shininess: 200 })
const sphere = new THREE.Mesh( geometry4, material4 ); 
// scene.add( sphere );

scene.add(torus, torus2, torus3)

//POINTS OF INTEREST

const points = [
  {
    position: new THREE.Vector3( 0, 0, 0),
    element: document.querySelector('.point-0')
  }
]




//LIGHTS

const pointLight = new THREE.PointLight(0xffffff, 100, 100);
pointLight.position.set(20,20,-20)

const directionalLight = new THREE.DirectionalLight(0xBBCCDD, 1, 100)
directionalLight.position.set(50, 50, 0)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);

scene.add(pointLight, directionalLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

const controls = new OrbitControls(camera, renderer.domElement);


//Background

  // const spaceTexture = new THREE.TextureLoader().load(nightsky)
  // scene.background = spaceTexture;


// CAMERA MOVEMENT

function moveCamera() {

  const t = document.body.getBoundingClientRect().top - 1 ;

  camera.position.z = t * 0.0075;
  // camera.position.x = t * -0.0002;
  // camera.position.y = t * -0.0002;

  // console.log(t);
}

document.body.onscroll = moveCamera


function animate() {
  requestAnimationFrame( animate );
  
  torus.rotation.y += 0.003;  
  torus2.rotation.y -= 0.001;  
  torus3.rotation.y += 0.002;  

  controls.update();
  
  renderer.render( scene, camera );

}

animate();

// Follow Points
