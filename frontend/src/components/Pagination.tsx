"use client";

import { useState, useEffect } from 'react';
import styles from './Pagination.module.sass';
import clsx from 'clsx';
import throttle from 'lodash/throttle';
import { scroller } from 'react-scroll';

type Section = {
    id: string;
    titile: string;
};

type PaginationProps = {
    sections: Section[];
};

const Pagination: React.FC<PaginationProps> = ({ sections }) => {
    
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const navigateToSection = (index: number) => {
        const sectionId = sections[index].id;
        
        // スムーズスクロールの実行
        scroller.scrollTo(sectionId, {
            duration: 100,        // スクロール時間
            delay: 0,             // 遅延
            smooth: 'easeInOutQuart', // スムーズなアニメーション
        });

        setActiveSectionIndex(index);
    };

    // const navigateToSection = (index: number) => {
    //     console.log("Navigating to section index:", index);  // デバッグ用ログ
    
    //     const sectionId = sections[index].id;
    //     const sectionElement = document.getElementById(sectionId);
    
    //     if (sectionElement) {
    //         // スクロールオプションに block と inline を指定
    //         sectionElement.scrollIntoView({
    //             behavior: 'smooth', 
    //             block: 'start',  // 要素の上部を画面の先頭に合わせる
    //             inline: 'nearest'  // 要素の左右を中央に合わせる
    //         });
    //         setActiveSectionIndex(index);
    //         console.log("Scrolling to section:", sectionId);
    //     } else {
    //         console.log("Section not found:", sectionId);  // セクションが見つからない場合のログ
    //     }
    // };
    

      // マウスホイールのスクロール処理
  useEffect(() => {
    const handleScroll = throttle((event: WheelEvent) => {
      event.preventDefault();

      if (isScrolling) return; // スクロール中は次のスクロールを無視する

      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

      if (scrollDirection === 'down' && activeSectionIndex < sections.length - 1) {
        setIsScrolling(true);
        navigateToSection(activeSectionIndex + 1);
      } else if (scrollDirection === 'up' && activeSectionIndex > 0) {
        setIsScrolling(true);
        navigateToSection(activeSectionIndex - 1);
      }

      // スクロールロックを解除するためにタイマーをセット
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // ロックの間隔を1秒に設定
    }, 100); // 100msごとにスクロールイベントを処理

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeSectionIndex, isScrolling, sections]);




    return(
        <div className={clsx(styles.pagination, 'position-fixed', 'pc')}>
            {sections.map((section, index) => (
            <button
                key={section.id}
                className={clsx(styles.paginationButton, { [styles.active]: activeSectionIndex === index })}
                onClick={() => navigateToSection(index)}
            >
                {index + 1}
            </button>
            ))}
        </div>
    );
};

export default Pagination;