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
My name is <b>Gianni Rivero</b> and I am a <u>Senior Unity Developer</u>
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
            <a target="_blank" rel="noreferrer" href="https://github.com/GeoGianniSoftware">
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gianni-rivero/">
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/geogianni">
              <span className="fa fa-twitch" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@geogiannigames">
              <span className="fa fa-youtube" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/geogiannigames/">
              <span className="fa fa-instagram" />
            </a>
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
          <ResumeSection />
          <Skills />
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
