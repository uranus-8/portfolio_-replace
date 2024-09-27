import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import Particles from "@/components/Particles";
import ThreeScene from '@/components/ThreeScene';
import ContactForm from '@/components/ContactForm';
// import { clsx } from 'clsx';
import styles from "./styles.module.sass";


export default function Home() {

  const sections = [
    { id: 'home', titile: 'Home' },
    { id: 'experience', titile: 'Experience' },
    { id: 'project', titile: 'Project' },
    { id: 'contact', titile: 'Contact' },
  ]

  return (
    <div className="container-fluid ibm-plex-sans-jp-regular">
    
      <div className="contents-wrapper">
        <Particles />

        <Header />

        <Pagination sections={sections} />

        {/* <!--First View--> */}
        <main className={`section ${styles.main}`} id="home">
          <div className={styles.visual}>
            <Image 
              src="/images/main_sp.png"
              width={878}
              height={1080}
              alt="uranus_image" 
              className="sp" />

              <ThreeScene />
            
          </div>
          <div className={styles.maintitle}>
            <h2 className="lato-black gradient-text">Gunji Portofolio</h2>
            <p className={styles.sub_title}>Web Designer / UI/UX Designer / Front-end Engineer</p>
          </div>
        </main>


        {/* <!--Second View--><!--Experience--> */}
        <div className="setion pad-20 section-conts" id="experience">
          <div className="d-md-flex conts">
            <div className="left-conts">
              <h3 className="lato-bold pad-y-10">Experience</h3>
              <div className="pab-5">
                <p>
                  Webデザイン、UI/UXデザイン、アニメーション制作、フロントエンドエンジニアリングなどを中心に活動しています。<br />
                  Webデザインのチームマネジメントや、各種案件のディレクションなども経験しました。<br />
                  デザイン制作にはAdobe XD、Figma、Photoshop、Illustrator、AfterEffects、PremiereProなどを用いてきました。<br /><br />

                  現在は、フロントエンドエンジニアとしてプロジェクトに参画し、新たなプラットフォーム開発に挑戦中です。<br />
                  TypeScriptを中心に、React、Vue、Angularなどを使った開発を行っています。<br />
                  WordPressやLaravelなどを用いたバックエンド領域での開発も一部経験があります。
                </p>
              </div>
              <div className="">
                <a className="btn btn-primary btn-lg mb-4" href="/works">Works</a>
                <p className="text-secondary">
                  ※閲覧は限定ユーザーのみになります。
                </p>
              </div>
            </div>
            <div className="right-conts">
              <Image 
                src="/images/experience.jpg" 
                width={1200}
                height={800}
                alt="" 
                className="pc"
                priority  
              />
            </div>
          </div>
        </div>

        {/* <!--Project--> */}
        <div className="section pad-20 section-conts project-conts" id="project">
          <div className="d-md-flex conts">
            <div className="left-conts">
              <div className="pab-5">
                <h3 className="lato-bold pad-y-10">Personal Project</h3>
                <Image 
                  src="/images/wild_offroader.jpg" 
                  width={1200}
                  height={683}
                  alt="Wild offroader" 
                  className="sp sp-img mb-3"
                />
                <p>
                  個人でゲーム開発を始めました！<br />
                  「Wild offroader」は、豊かな緑のオフロードコースをグングン駆け抜けて競走する3Dオフロードカーレースです！<br />
                  ゲームエンジンはUnity、モデリングはBlenderを用いて作成しました。<br />
                  以下のリンクをクリックすると、Unity Playにてデモをプレイすることができます。
                </p>
              </div>
              <div className="mt-3">
                <p>
                  <a className="btn btn-primary btn-lg mb-4" target="_blank" href="https://play.unity.com/en/games/267bffe6-b93b-496b-8d83-b642f3289858/wiiloffroaderver02">β-version Play</a>
                </p>
              </div>
            </div>
            <div className="right-conts">
              <Image 
              src="/images/wild_offroader.jpg"
              width={1200}
              height={683}
              alt="Wild offroader"
              className="pc" 
              />
            </div>
          </div>
        </div>

        {/* <!--Contact--> */}
        <div className="section pad-20 section-conts" id="contact">
          <div>
            <h3 className="lato-bold pad-y-10 text-center">Contact</h3>
            <p>メッセージは以下よりお願いします。お気軽にお問い合わせください。</p>
            <ContactForm />

            <Footer />
          </div>
        </div>

        <Pagination sections={sections} />
      </div>
    </div>
  );
}
