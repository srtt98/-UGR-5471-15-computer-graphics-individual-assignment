import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
console.log("Three.js is loaded:", typeof THREE);
import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteraction } from './interaction.js';
import { setupCameraAnimation } from './cameraAnimation.js';

// Application object to hold the main components
// This object will store the scene, camera, renderer, controls, product, and animation settings
const app = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    product: null,
    autoRotate: true,
    rotationSpeed: 0.5
};
// Initialize the application
async function init() {
    // Setup Three.js scene
    const { scene, camera, renderer, controls } = initScene();
    app.scene = scene;
    app.camera = camera;
    app.renderer = renderer;
    app.controls = controls;
    
    // Creating the product
    // This function creates the product model and adds it to the scene
    app.product = createProduct();
    scene.add(app.product);
    
    // Adding lighting
    addLighting(scene);
    
    // Settingup interaction
    setupInteraction(app);
    
    // Settingup camera animation
    setupCameraAnimation(app);
    
    // Start animation loop
    animate();
}
// Handle window resize
function animate() {
    requestAnimationFrame(animate);
    app.renderer.render(app.scene, app.camera);
}

// Start the application
init();