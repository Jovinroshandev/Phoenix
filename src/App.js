import { useEffect,useRef, useState } from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import "./App.css";
import BannerBGImage from "./assets/images/banner-bg-image.png";
import LoaderCharacter from "./assets/images/loader-character.gif";
import BookSection from "./components/bookSection";
import FirePhoenix from "./components/firePhoenix";
import JoinNow from "./components/joinNow";
import Social from "./components/social";

export default function App() {
  const [loading, setLoading] = useState(true);
  const homeView = useRef();
  const homemobileView = useRef();
  const whyView = useRef();
  const bookView = useRef();
  const JoinNowView = useRef();
  const SocialView = useRef();

  const scrollToSection = (section) => {
  const isMobile = window.innerWidth < 768; // tailwind md = 768px
  const sections = {
    home: isMobile ? homemobileView : homeView,
    why: whyView,
    book: bookView,
    join: JoinNowView,
    social: SocialView,
  };
  sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
};

  useEffect(() => {
    const img = new Image();
    img.src = BannerBGImage;
    img.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000); // wait for 3 seconds for more dramatic feel
    };
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="flex flex-col justify-center items-center text-white"
          style={{
            backgroundImage: `url(${BannerBGImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            opacity: loading ? 1 : 0,
          }}
        >
          <img src={LoaderCharacter} alt="Loader" className="w-40 md:w-64" />

          {/* Stylish Loading Bar */}
          <div className="w-60 md:w-96 h-2 bg-white bg-opacity-30 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-gradient-to-r from-yellow-300 to-red-600 rounded-full animate-progress-bar" />
          </div>

          {/* Animated Loading Text */}
          {/* FIRE LOADING... with fire glow one by one */}
          <div className="flex gap-0 md:gap-2 text-sm md:text-4xl font-extrabold tracking-widest">
            {"FIRE   LOADING...".split("").map((char, i) => (
              <span
                key={i}
                className="fire-letter animate-glow px-1"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${BannerBGImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar scrollToSection={scrollToSection}/>
          <div className="hidden md:block h-screen" ref={homeView}>
            <Banner/>
          </div>
          <div className="md:hidden h-96" ref={homemobileView}>
            <Banner/>
          </div>
          <div ref={whyView}>
            <FirePhoenix />
          </div>
          <div ref={bookView}>
            <BookSection />
          </div>
          <div ref={JoinNowView}>
            <JoinNow/>
          </div>
          <div ref={SocialView}>
            <Social/>
          </div>
        </div>
      )}
    </>
  );
}
