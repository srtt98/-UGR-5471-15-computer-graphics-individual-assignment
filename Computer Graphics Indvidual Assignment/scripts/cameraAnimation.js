import * as THREE from 'three';
export function setupCameraAnimation(app) {
    let angle = 0;
    const radius = 10; // Distance from the center of the product
    app.autoRotate = true; // Enable auto-rotation by default
    const height = 5;
    
    // Animation loop
    function animateCamera() {
        if (app.autoRotate) {
            angle += 0.002 * app.rotationSpeed;
            
            // Calculate new camera position
            const x = radius * Math.sin(angle);
            const z = radius * Math.cos(angle);
            
            app.camera.position.set(x, height, z);
            app.camera.lookAt(0, height / 2, 0);
            
            // Update controls target
            app.controls.target.set(0, height / 2, 0);
            app.controls.update();
        }
        
        requestAnimationFrame(animateCamera);// Continue the animation loop
        app.renderer.render(app.scene, app.camera); // Render the scene
    }
    
    // Start animation
    animateCamera();
    
    // Optional: Allow user to override rotation
    window.addEventListener('mousedown', () => {
        app.autoRotate = false;
    });
    
    window.addEventListener('mouseup', () => {
        // Resume auto-rotation after 4 seconds of inactivity
        setTimeout(() => {
            app.autoRotate = true;
        }, 4000);
    });
}