import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.01, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.Geometry();

// Create a line material for example
const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// form a line
const line = new THREE.Line( geometry, material );

scene.add( line );

renderer.render(scene, camera);