/**
 * 我的自定义js
 */
var camera, cameraTarget, scene, renderer,controlls,loader,material,mesh;

//文件上传Ajax指令submit
function upload() {
	$("#formId").submit();
	
	//延迟两秒后，等待上传完成，开始执行STL导入
	window.setTimeout(uploadfinish,3000);
	
}

//上传完成，开始执行STL导入
function uploadfinish(){ 
	alert("Upload has finished"); 
	// ASCII file
	//导入dayan.stl C:/Users/ZC-26/Desktop/webgltest/
	loader = new THREE.STLLoader();
	loader.load( 'models/upload.stl', function ( geometry ) {

		material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
		mesh = new THREE.Mesh( geometry, material );
		
		
		//Math.PI

		mesh.rotation.set( -Math.PI/2,  0, 0 );
		mesh.geometry.computeBoundingBox();
		mesh.position.set( 0, -mesh.geometry.boundingBox.min.z, 0 );
		
		
		mesh.scale.set( 1, 1, 1 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );
		
		render();
		
	} );
} 


//mainCanvas初始化
function init() {
	//camera
	camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 500 );

	cameraTarget = new THREE.Vector3( 0, 0, 0 );
	camera.lookAt( cameraTarget );
	
	//scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x72645b );
	scene.add(camera);

	// renderer
	renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('mainCanvas')
	});
	
	// a cube in the scene
	cube = new THREE.Mesh(new THREE.CubeGeometry(300, 5, 300),
			new THREE.MeshBasicMaterial({
				color: 0xC0C0C0 //grey
			})
	);
	cube.position.set(0,0,0);
	scene.add(cube);



	// Lights
	scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );
	addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
	
	//controlls
	controls = new THREE.OrbitControls( camera ,renderer.domElement);
	controls.addEventListener( 'change', render );
	
	render();
}

function addShadowedLight( x, y, z, color, intensity ) {

	var directionalLight = new THREE.DirectionalLight( color, intensity );
	directionalLight.position.set( x, y, z );
	scene.add( directionalLight );

	directionalLight.castShadow = true;

	var d = 1;
	directionalLight.shadow.camera.left = -d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = -d;

	directionalLight.shadow.camera.near = 1;
	directionalLight.shadow.camera.far = 4;

	directionalLight.shadow.mapSize.width = 1024;
	directionalLight.shadow.mapSize.height = 1024;

	directionalLight.shadow.bias = -0.005;

}

function render() {
	renderer.render( scene, camera );
}