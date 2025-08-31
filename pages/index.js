import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `
<div>
<p>
My name is <span class="highlight-name">Gianni Rivero</span>,
<br><br>
I am a Senior Game Developer specializing in Unity with expertise in multiplayer systems, tools engineering, and content pipelines.
<br><br>
I've led cross-disciplinary teams, built core infrastructure with Photon's Quantum 3 Deterministic Multiplayer Engine,
and delivered large scale player-facing features from quests and NPC systems to level design workflows.
<br><br>
My work has supported successful partnerships and helped secure multi-million dollar investment.</u>
</p>
</div>
`;
const IndexDark = () => {
  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/CorpotateLogo.png)" }}
          />
          <div className="title">Geo Gianni Games</div>
          <TypingAnimation />
          <div className="social">
            
          {/* centered GitHub button */}
<div className="github-row">
  <a
    href="https://github.com/GeoGianniSoftware"
    target="_blank"
    rel="noreferrer"
    className="github-btn"
    aria-label="View my GitHub profile"
  >
    <i className="fa fa-github" aria-hidden="true" />
    <span> My GitHub</span>
  </a>
</div>


          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="https://geogianni.com/assets/docs/resume.pdf" download="GeoGianniGamesResume" target="_blank" className="lnk">
              <span className="text">Download CV</span>
              <span class="ion ion-ios-cloud-download"></span>
            </a>
            <a href="mailto:GeoGianniSoftware@gmail.com?subject=This%20is%20a%20subject" className="lnk discover">
              <span className="text">Contact Me</span>
              <span class="ion ion-paper-airplane"></span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          <Clients />
          <Testimonials />
          <Pricing />
        </About>
        <Resume>
          <Skills />
          <ResumeSection />
        </Resume>
        <Work>
          <RecentWorks />
          <Quote />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
