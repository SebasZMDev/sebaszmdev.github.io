import LetterGlitch from "../components/effects/LetterGlitch.tsx";
import PixelCard from "../components/effects/PixelCard.tsx";
import SplitText from "../components/effects/SplitText.tsx";
import TextType from "../components/effects/TextType.tsx";
import TiltedCard from "../components/effects/TiltedCard.tsx";
import Proyects from "../components/Proyects.tsx";
import Skills from "../components/Skills.tsx";
import "../styles/HomeStyles.css";


function Home() {
  const handleAnimationComplete = () => {
    console.log("SplitText animation completed!");
  };

  function linkTo(link :string) {
    window.open(link,"_blank")
  }

  return (
    <div className="container">
      <header>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
        <div className="header-content">
          <TiltedCard
            imageSrc="https://preview.redd.it/8hqgg6k86eq61.jpg?auto=webp&s=092e75a244d47ddf830d2835aaed0701b329b738"
            altText=""
            captionText=""
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <div className="header-right">
            <SplitText
              text="Sebastian ZM"
              className="header-name"
              delay={100}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <TextType
              text={["Software Developer. . .", "Code. Creativity. Impact."]}
              typingSpeed={200}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
            />
            <div className="header-contact">
              <PixelCard>
                <img onClick={()=>linkTo('https://github.com/SebasZMDev')} src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" />
              </PixelCard>
              <PixelCard>
                <img onClick={()=>linkTo('https://www.linkedin.com/in/sebastian-zelada-morales-8a974024b')} src="https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg" />
              </PixelCard>
            </div>
          </div>
        </div>
      </header>
      
        <Proyects />
       <Skills/>
    </div>
  );
}

export default Home;
