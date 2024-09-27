"use client";

import { useEffect } from "react";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";

const Particles = () => {

    useEffect(() => {
        const loadParticles = async () => {
            await loadFull(tsParticles); // tsParticlesにプラグインをロード
            tsParticles.load("particles-js-home", {
                particles: {
                    number: {
                        value: 80, // パーティクルの数
                    },
                    size: {
                        value: 2, // パーティクルの大きさ
                    },
                    move: {
                        enable: true,
                        speed: 2, // パーティクルの移動速度
                    },
                    line_linked: { // tsparticlesでは`links`となる
                        enable: false, // デフォルトで無効
                    },
                    shape: {
                        type: "circle", // パーティクルの形を円に
                    },
                    links: { // パーティクル同士を結ぶリンクの設定
                        enable: true, // リンクを有効化
                        distance: 150, // リンクが表示される距離
                        color: "#ffffff", // リンクの色
                        opacity: 0.5, // リンクの透明度
                        width: 1, // リンクの太さ
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse", // ホバー時にパーティクルが反発
                        },
                        onclick: {
                            enable: true,
                            mode: "push", // クリック時に新しいパーティクルを追加
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100, // ホバー時にパーティクルが反発する距離
                        },
                        push: {
                            quantity: 4, // クリック時に追加されるパーティクルの数
                        },
                    },
                },
                retina_detect: true, // Retinaディスプレイ対応
            }).then(() => {
                console.log('Particles loaded successfully');
            }).catch((error: Error) => {
                console.error('Error loading particles:', error);
            });
        };

        loadParticles();
    }, []);

    return (
        <div
            id="particles-js-home"
            style={{
                position: "fixed", // 固定配置
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1, // 最背面に配置
                pointerEvents: "none" // パーティクルをクリックできないようにする
            }}
        ></div>
    );
};

export default Particles;