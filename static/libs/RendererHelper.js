import * as THREE from 'three';

export function setupRenderer() {

	//Renderer does the job of rendering the graphics
	let renderer = new THREE.WebGLRenderer({

	//Defines the canvas component in the DOM that will be used
	canvas: document.querySelector('.webgl'),
		antialias: true,
	});

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

	//set up the renderer with the default settings for threejs.org/editor - revision r153
	renderer.shadows = true;
	renderer.shadowMap.type = 1;
	renderer.shadowMap.enabled = true;
	// renderer.toneMapping = 0;
	renderer.toneMappingExposure = 1
	renderer.useLegacyLights  = false;
	renderer.toneMapping = THREE.ReinhardToneMapping;
	renderer.setClearColor("#1D1D1D", 1);
	renderer.outputColorSpace = THREE.SRGBColorSpace //make sure three/build/three.module.js is over r152 or this feature is not available. 
	

	
	return renderer
}