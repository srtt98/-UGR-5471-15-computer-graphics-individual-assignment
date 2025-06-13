import * as THREE from 'three';
export function addLighting(scene) {
    //Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    // Directional light 1 (key light)
    // This light will cast shadows and illuminate the main parts of the lamp 
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 10, 7);
    directionalLight1.castShadow = true;
    directionalLight1.shadow.mapSize.width = 1024;
    directionalLight1.shadow.mapSize.height = 1024;
    scene.add(directionalLight1);
    
    // Directional light 2 (fill light)
    // This light will soften shadows and fill in darker areas
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);
    
    // Point light inside the lamp head
    // This light simulates the bulb and adds a warm glow
    const pointLight = new THREE.PointLight(0xffffaa, 1, 10, 2);
    pointLight.position.set(5, 6, 0);
    scene.add(pointLight);
    
    // Optional: Add a light helper for debugging
    const lightHelper1 = new THREE.DirectionalLightHelper(directionalLight1, 1);
}