import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import './Hyperspeed.css';

const Hyperspeed = ({ effectOptions = {} }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const options = {
      distortion: 'turbulentDistortion',
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 30,
      lightPairsPerRoadWay: 50,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [400 * 0.03, 400 * 0.2],
      carLightsRadius: [0.08, 0.2],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.8, 0.8],
      carFloorSeparation: [0, 5],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0xffffff,
        brokenLines: 0xffffff,
        leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
        rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
        sticks: 0x03b3c3
      },
      ...effectOptions
    };

    const scene = new THREE.Scene();
    const bgColor = options.colors?.background ?? 0x000000;
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.002);

    const camera = new THREE.PerspectiveCamera(
      options.fov || 90,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 6, 15);
    camera.lookAt(0, 0, -200);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Composer setup for Bloom
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      1.5,
      0.5,
      0.2
    );
    composer.addPass(bloomPass);

    // Road Plane & Lines
    const roadWidth = (options.roadWidth || 10) * 2 + (options.islandWidth || 2);
    const roadGeo = new THREE.PlaneGeometry(roadWidth * 2, options.length || 400, 32, 200);
    const roadMat = new THREE.MeshBasicMaterial({
      color: options.colors?.roadColor ?? 0x080808,
      wireframe: false
    });
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    roadMesh.rotation.x = -Math.PI / 2;
    roadMesh.position.set(0, 0, -(options.length || 400) / 2);
    scene.add(roadMesh);

    // Glowing Shoulder Lines
    const lineGeo = new THREE.PlaneGeometry(0.3, options.length || 400);
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });

    const leftLine = new THREE.Mesh(lineGeo, lineMat);
    leftLine.rotation.x = -Math.PI / 2;
    leftLine.position.set(-options.roadWidth, 0.05, -(options.length || 400) / 2);
    scene.add(leftLine);

    const rightLine = new THREE.Mesh(lineGeo, lineMat);
    rightLine.rotation.x = -Math.PI / 2;
    rightLine.position.set(options.roadWidth, 0.05, -(options.length || 400) / 2);
    scene.add(rightLine);

    // Car Light Streaks (Left & Right Lanes)
    const createCarLightStreaks = (colorList, isLeft) => {
      const group = new THREE.Group();
      const count = options.lightPairsPerRoadWay || 40;
      const colors = Array.isArray(colorList) ? colorList : [0xd856bf, 0x6750a2];

      colors.forEach((colHex) => {
        const radius = options.carLightsRadius?.[1] ?? 0.15;
        const len = options.carLightsLength?.[1] ?? 50;

        const cylinderGeo = new THREE.CylinderGeometry(radius * 0.5, radius * 1.5, len, 8);
        const mat = new THREE.MeshBasicMaterial({
          color: colHex,
          transparent: true,
          opacity: 0.85
        });

        const perColorCount = Math.floor(count / colors.length);
        for (let i = 0; i < perColorCount; i++) {
          const mesh = new THREE.Mesh(cylinderGeo, mat);
          const sideFactor = isLeft ? -1 : 1;
          const xPos =
            sideFactor *
            ((options.islandWidth || 2) / 2 + Math.random() * (options.roadWidth || 10));
          const zPos = -Math.random() * (options.length || 400);
          const yPos = 0.5 + Math.random() * 2;

          mesh.position.set(xPos, yPos, zPos);
          mesh.rotation.x = Math.PI / 2;
          group.add(mesh);
        }
      });
      return group;
    };

    const leftCars = createCarLightStreaks(options.colors?.leftCars, true);
    const rightCars = createCarLightStreaks(options.colors?.rightCars, false);
    scene.add(leftCars);
    scene.add(rightCars);

    // Glowing Side Light Sticks
    const createSideSticks = () => {
      const group = new THREE.Group();
      const count = options.totalSideLightSticks || 30;
      const stickGeo = new THREE.BoxGeometry(0.2, 3, 0.2);
      const stickMat = new THREE.MeshBasicMaterial({
        color: options.colors?.sticks ?? 0x03b3c3
      });

      for (let i = 0; i < count; i++) {
        const leftStick = new THREE.Mesh(stickGeo, stickMat);
        const rightStick = new THREE.Mesh(stickGeo, stickMat);
        const zPos = -(i / count) * (options.length || 400);
        const xDist = roadWidth / 2 + 2;

        leftStick.position.set(-xDist, 1.5, zPos);
        rightStick.position.set(xDist, 1.5, zPos);

        group.add(leftStick);
        group.add(rightStick);
      }
      return group;
    };

    const sideSticks = createSideSticks();
    scene.add(sideSticks);

    // Animation loop
    let reqId;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      const speedAway = (options.movingAwaySpeed?.[0] ?? 70) * delta * 2;
      const speedCloser = Math.abs(options.movingCloserSpeed?.[0] ?? -140) * delta * 2;

      // Animate left cars away
      leftCars.children.forEach((car) => {
        car.position.z += speedAway;
        if (car.position.z > 20) {
          car.position.z = -(options.length || 400);
        }
      });

      // Animate right cars closer
      rightCars.children.forEach((car) => {
        car.position.z -= speedCloser;
        if (car.position.z < -(options.length || 400)) {
          car.position.z = 20;
        }
      });

      // Animate side sticks
      sideSticks.children.forEach((stick) => {
        stick.position.z += speedAway * 0.5;
        if (stick.position.z > 20) {
          stick.position.z = -(options.length || 400);
        }
      });

      composer.render();
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [effectOptions]);

  return <div ref={containerRef} className="hyperspeed-container" />;
};

export default Hyperspeed;
