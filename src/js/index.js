import * as THREE from 'three';

let camera, scene, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.01, 1000);
  renderer = new THREE.WebGLRenderer();
}

init();

renderer.setSize(innerWidth, innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.Geometry();

// Create a line material for example
const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// form a line
const line = new THREE.Line( geometry, material );

scene.add( line );

renderer.render(scene, camera);