document.addEventListener('DOMContentLoaded', function () {
    const scene = new THREE.Scene();
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
    document.getElementById('rotateCube').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    cube.scale.set(2.5, 2.5, 2.5);
    scene.add(cube);
    camera.position.z = 5;

    const render = function () {
        requestAnimationFrame(render);
        cube.rotation.x += 0.008;
        cube.rotation.y += 0.008;
        renderer.render(scene, camera);
    };
    render();
});