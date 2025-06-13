import * as THREE from 'three';
export function createProduct() {
    // Create a group to hold all product parts
    const product = new THREE.Group();
    product.name = "deskLamp";
    
    // Base (cylinder)
    // The base will be a flat cylinder that sits on the desk
    const baseGeometry = new THREE.CylinderGeometry(2, 2, 0.5, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x333333,
        metalness: 0.7,
        roughness: 0.3
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -0.25;
    base.name = "base";
    product.add(base);
    
    // Stand (cylinder)
    // The stand will be a tall cylinder that holds the arm and lamp head
    const standGeometry = new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
    const standMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x555555,
        metalness: 0.8,
        roughness: 0.2
    });
    const stand = new THREE.Mesh(standGeometry, standMaterial);
    stand.position.y = 3;
    stand.name = "stand";
    product.add(stand);
    
    // Arm (box)
    // The arm will be a horizontal box that extends from the stand to the lamp head
    const armGeometry = new THREE.BoxGeometry(5, 0.5, 0.5);
    const armMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x777777,
        metalness: 0.6,
        roughness: 0.4
    });
    const arm = new THREE.Mesh(armGeometry, armMaterial);
    arm.position.set(2.5, 6, 0);
    arm.name = "arm";
    product.add(arm);
    
    // Lamp head (sphere + cylinder)
    const headGeometry = new THREE.SphereGeometry(1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const headMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.7,
        emissive: 0xffee88,
        emissiveIntensity: 0.2
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(5, 6, 0);
    head.rotation.x = Math.PI;
    head.name = "lampHead";
    product.add(head);
    
    // Bulb (small sphere)
    const bulbGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const bulbMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xffffff,
        emissive: 0xffffaa,
        emissiveIntensity: 1,
        roughness: 0.1
    });
    const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
    bulb.position.set(5, 6, 0);
    bulb.name = "bulb";
    product.add(bulb);
    
    // Adjust position so product is centered at origin
    product.position.y = 0;
    
    return product;
}