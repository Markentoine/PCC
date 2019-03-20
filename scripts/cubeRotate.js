document.addEventListener('DOMContentLoaded', function () {
    const rotateCube = document.getElementById('rotateCube');
    rotateCube.appendChild(renderer.domElement);
    render();
});

const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({
    color: 0xcccccc,
});
const light = new THREE.HemisphereLight(0e7723, 'chartreuse', 2);
light.position.set(0.1, 1, 1);
scene.add(light);
const cube = new THREE.Mesh(geometry, material);
cube.scale.set(2.5, 2.5, 2.5);
scene.add(cube);
camera.position.z = 5;

const render = function () {
    requestAnimationFrame(render);
    cube.rotation.x += 0.008;
    cube.rotation.y += 0.009;
    cube.rotation.z += 0.007;
    renderer.render(scene, camera);
};