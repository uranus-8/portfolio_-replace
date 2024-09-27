"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
        console.error('threeContainer not found');
        return;
    }

    // Three.js の初期化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // レンダラーのサイズを設定
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(0x000000, 0); // 背景色を透明に設定
    container.appendChild(renderer.domElement);

    const resizeHandler = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    // ライトの追加
    const light = new THREE.DirectionalLight(0xffffff, 5.7);
    light.position.set(50, 200, 100).normalize();
    scene.add(light);

    const pointLight = new THREE.PointLight(0xffffff, 10, 10); // 強度を2に設定
    pointLight.position.set(20, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 5, 2); // 強度を2に設定
    pointLight2.position.set(15, 20, 10);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    ambientLight.position.set(100, 200, 300);
    scene.add(ambientLight);

    // GLTFモデルを読み込む
    const loader = new GLTFLoader();
    loader.load(
      'https://storage.googleapis.com/gunji_portofolio_glb/main_pc.glb',
      (gltf) => {
        const model = gltf.scene;

        model.position.set(0, 0, 35); // モデルの位置を設定
        model.rotation.x = Math.PI/30; // Y軸周りに90度回転
        model.rotation.y = Math.PI/-3.8; // Y軸周りに90度回転

        scene.add(model);
        animate(); // モデルが読み込まれたらアニメーションを開始
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model', error);
      }
    );

    // OrbitControls の設定
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;  // ズームを無効にする

    camera.position.set(0, 10, 120);
    camera.zoom = 2.2; // カメラのズームを設定
    camera.updateProjectionMatrix(); // ズームを適用するためにプロジェクションマトリックスを更新
    
    controls.update();

    // アニメーションの設定
    const animate = () => {
        requestAnimationFrame(animate);
        controls.update(); // カメラコントロールの更新
        renderer.render(scene, camera);
    };
  
    animate();

    // クリーンアップ
    return () => {
        window.removeEventListener('resize', resizeHandler);
        container.removeChild(renderer.domElement);
      };
  }, []);

  const containerStyles = {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
  };

  return <div ref={containerRef} style={containerStyles} className='pc' />;
};

export default ThreeScene;
