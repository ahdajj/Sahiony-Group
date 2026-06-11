'use client'
import { type Language, HeroText } from '../lib/i18n';

export function  Heroarea({ lang }: { lang: Language }) {
    const text = HeroText[lang];
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('container-hero'); 
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
  return (
   <div className="Main-Hero">

            <video
                className="Hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto">
                 <source src="/video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="Hero-overlay">
                <div className="Hero-meta">
                    <small>{text.groupName}</small>
                    <span>{text.brandSubtitle}</span>
                    <h1>{text.Greeting} </h1>
                    <button 
                        onClick={scrollToNextSection}
                        className="Hero-cta-button"
                    >
                        {text.Herobutton}
                    </button>
                </div>
            </div>

    </div>
  );
}
