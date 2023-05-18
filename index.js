let scene, camera, renderer, sphere;

function init() {
    // initialize new scene object
 scene = new THREE.Scene();

 camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// web graphics library renderer. antialias is true for smoother edges
 renderer = new THREE.WebGLRenderer(antialias = true);

// set size of renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// add renderer to document
document.body.appendChild(renderer.domElement);

// depth width height
    const geometry = new THREE.SphereGeometry(15, 32, 16); 
    const texture = new THREE.TextureLoader().load('earth_atmos_2048.jpg');

// material is how the object interacts with light
const material = new THREE.MeshBasicMaterial({ map: texture}); 
// mesh is a combination of geometry and material
 sphere = new THREE.Mesh(geometry, material);
// add sphere to scene
scene.add(sphere);

camera.position.z = 50;
}



function animate() {
    requestAnimationFrame(animate);
    // speed of rotation
    sphere.rotation.x += 0.003;
    sphere.rotation.y += 0.003;
    renderer.render(scene, camera);
}

function onWindowResize() { 
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // set size of renderer to window size
    renderer.setSize(window.innerWidth, window.innerHeight);
}
// listen for browser resize
window.addEventListener('resize', onWindowResize, false);

init();
animate();