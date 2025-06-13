🛋️ Interactive 3D Product Viewer
A minimalist 3D product viewer built with Three.js, featuring a detailed desk lamp assembled using basic geometry shapes. Perfect for exploring foundational concepts in 3D web development.

Features
Modular architecture — split into separate files for scene setup, lighting, model creation, interaction, and camera animation

Realistic lighting — ambient, directional, and point lights make materials shine & cast shadows

Auto-rotating camera — smoothly orbits around the model; pauses on user interaction and resumes after idle

Interactive parts — click individual lamp components (base, stand, arm, head, bulb) to highlight, scale, and display a label

Responsive design — renderer automatically adjusts on window resize

📁 Project Structure
/index.html          # HTML container & import maps
/styles.css         # Fullscreen canvas + info panel styling
/scripts/
  ├─ initScene.js         # Sets up scene, camera, renderer, OrbitControls
  ├─ createProduct.js     # Builds the desk lamp with basic meshes
  ├─ addLighting.js       # Adds ambient, directional, point lights
  ├─ interaction.js       # Raycasting logic for mouse interaction
  ├─ cameraAnimation.js   # Auto-rotation & user-control switching
  └─ main.js              # Entry point, imports everything & starts loop
