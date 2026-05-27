import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import AboutMe from "../src/components/sections/AboutMe";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Quote from "../src/components/sections/Quote";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";

const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);

const bioNew = `
<div>
<p>
My name is <span class="highlight-name">Gianni Rivero</span>,
I am a Senior Unity Engineer specializing in performance optimization, systems architecture, and multiplayer.
<br><br>
I've worked across full production pipelines, building core infrastructure with Photon's Quantum 3 deterministic multiplayer engine, leading cross-disciplinary teams,
and delivering large-scale player-facing systems from quests and NPC behaviors to world and gameplay frameworks.
<br><br>
More recently, my work has focused on stabilizing and scaling complex Unity projects-reworking legacy systems, improving performance, and solving architectural bottlenecks at production scale.
<br><br>
My contributions have supported successful partnerships and secured projects multi-million dollar investment.
</p>
</div>
`;

const OnePageDashboard = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <Layout bg={"blured"} containerCls="onepage-dashboard">
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
        <link rel="stylesheet" href="css/onepage-dashboard.css" />
        <title>GeoGianni Games - 1-Pager Dashboard</title>
      </Head>

      {/* ROW 1 TOP: Profile Card (spans all 3 columns) */}
      <div className="card-started" id="home-card">
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/CorpotateLogo.png)" }}
          />
          <div className="title">Geo Gianni Games</div>
          <TypingAnimation />

          <div className="social">
            <div className="github-row" style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "10px" }}>
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
              <a
                href="/"
                className="github-btn"
                style={{ background: "#ff3344", borderColor: "#ff3344" }}
                aria-label="View Tabbed Layout"
              >
                <i className="fa fa-clone" aria-hidden="true" />
                <span> Tabbed View</span>
              </a>
            </div>
          </div>

          {/* profile buttons */}
          <div className="lnks">
            <a href="https://geogianni.com/assets/docs/GianniRiveroResume.docx" download="GeoGianniGamesResume" target="_blank" className="lnk">
              <span className="text">Download CV</span>
              <span className="ion ion-ios-cloud-download"></span>
            </a>
            <a href="mailto:GeoGianniSoftware@gmail.com?subject=Inquiry" className="lnk discover">
              <span className="text">Contact Me</span>
              <span className="ion ion-paper-airplane"></span>
            </a>
          </div>
        </div>
      </div>

      {/* ROW 2 LEFT: Recent Works */}
      <div className="bento-card card-works">
        <div className="bento-card-header">
          <i className="fa fa-user-o" aria-hidden="true"></i>
          <span>About Me</span>
        </div>
        <div className="bento-card-content">
          <AboutMe bio={bioNew} />
          <Services />
          <Clients />
          <Testimonials />
        </div>
      </div>

      {/* ROW 2 MIDDLE: About Me */}
      <div className="bento-card card-about">
        <div className="bento-card-header">
          <i className="fa fa-list-alt" aria-hidden="true"></i>
          <span>Skills & Resumé</span>
        </div>
        <div className="bento-card-content">
          <Skills />
          <ResumeSection />
        </div>
      </div>

      {/* ROW 2 RIGHT: Skills & Resumé */}
      <div className="bento-card card-resume">
        <div className="bento-card-header">
          <i className="fa fa-object-ungroup" aria-hidden="true"></i>
          <span>Recent Works</span>
        </div>
        <div className="bento-card-content">
          <RecentWorks />
          <Quote />
        </div>
      </div>

      {/* ROW 3 BOTTOM: Contact (spans all 3 columns) */}
      <div className="bento-card card-contact">
        <div className="bento-card-header">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <span>Contact & Inquiries</span>
        </div>
        <div className="bento-card-content">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

    </Layout>
  );
};

export default OnePageDashboard;
