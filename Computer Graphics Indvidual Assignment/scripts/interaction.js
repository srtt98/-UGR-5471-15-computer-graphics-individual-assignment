import * as THREE from 'three';
export function setupInteraction(app) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const infoPanel = document.getElementById('info-panel');
    const partNameElement = document.getElementById('part-name');
    
    // Highlighting material for selected parts
    // This material will be used to highlight parts when clicked
    const highlightMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff0000,
        emissive: 0x880000,
        emissiveIntensity: 0.5
    });
    
    // Original materials storage
    const originalMaterials = {};
    
    // Handling mouse movement
    // This event listener updates the mouse position in normalized device coordinates
    window.addEventListener('mousemove', (event) => {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Handling clicks
    window.addEventListener('click', () => {
        // Update the raycaster with camera and mouse position
        raycaster.setFromCamera(mouse, app.camera);
        
        // Calculate objects intersecting the ray
        const intersects = raycaster.intersectObjects(app.product.children, true);
        
        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            
            // Reset previously selected objects
            // This loop resets the materials of all parts to their original state
            Object.keys(originalMaterials).forEach(partName => {
                const part = app.product.getObjectByName(partName);
                if (part) {
                    part.material = originalMaterials[partName];
                }
            });
            
            // Store original material and apply highlight
            originalMaterials[clickedObject.name] = clickedObject.material;
            clickedObject.material = highlightMaterial;
            
            // Show info panel
            partNameElement.textContent = clickedObject.name;
            infoPanel.classList.remove('hidden');
            
            // Add animation effect
            clickedObject.scale.set(1.1, 1.1, 1.1);
            setTimeout(() => {
                clickedObject.scale.set(1, 1, 1);
            }, 300);
            
            // Pause auto-rotation temporarily
            app.autoRotate = false;
            setTimeout(() => {
                app.autoRotate = true;
            }, 2000);
        } else {
            // Clicked outside any part
            infoPanel.classList.add('hidden');
            
            // Reset all materials
            Object.keys(originalMaterials).forEach(partName => {
                const part = app.product.getObjectByName(partName);
                if (part) {
                    part.material = originalMaterials[partName];
                }
            });
        }
    });
}