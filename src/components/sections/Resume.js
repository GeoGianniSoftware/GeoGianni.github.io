import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
            <div className="resume-item border-line-h old">
                <div className="date">2023 - 2025</div>
                <div className="name">Senior Developer</div>
                <div><b><i>BeraTone</i></b></div>
                <div className="company">BeraTone</div>
                <ul>
                  <li>Built core multiplayer infrastructure using Photon’s Quantum 3 deterministic engine (ECS architecture).</li>
                  <li>Coordinated with Art, Sound, Animation, and Level Design teams; supported leadership on gameplay and MMORPG systems.</li>
                  <li>Produced and co-directed game trailer that helped secure $2M in seed investment.</li>
                  <li>Designed and implemented player-facing systems including 70+ quests, crafting/recipes, reputation & dialogue for 50+ NPCs, cosmetics, housing & decoration, and one-time drops.</li>
                  <li>Created level design tools, workflow automation, prototype UIs, and asset organization systems that improved development efficiency.</li>
                  <li>Guided level designers through concept, gameplay, and content passes for multiple environments across 6 levels.</li>
                  <li>Authored and maintained in-house notion, GDDs, TDDs, and feature specifications.</li>
                  <li>Scoped and delivered multiple partner/corporate collaborations, including Web3 integrations.</li>
                </ul>
              </div>
          <div className="resume-item border-line-h old">
                <div className="date">2022 - 2023</div>
                <div className="name">Lead Developer</div>
                <div><b><i>The Final Bastion</i></b></div>
                <div className="company">GeoGianni Games</div>
                <ul>
                  <li>Game AI</li>
                  <li>Game Databases</li>
                  <li>Level Design & Creation</li>
                  <li>Photon Network & Steam Integration</li>
                  <li>PvP & PvE Gamemodes</li>
                  <li>Achievements</li>
                  <li>Time of Day System</li>
                  <li>In-game Currency & Progression</li>
                  <li>Tower Design</li>
                  <li>Game Balancing</li>
                  <li>Team Management</li>
                  <li>Financial Management</li>
                  <li>Beta & Early Access Release</li>
                </ul>
              </div>
              <div className="resume-item border-line-h old">
                <div className="date">2019 - 2020</div>
                <div className="name">Lead Backend Engineer</div>
                <div className="company">PlateChasr</div>
                <ul>
                  <li>Developed and Operated an application backend software and database using JAVA, JSON and Firebase</li>
                  <li>Launched and Maintained Apple IOS release</li>
                  <li>Aligned Administrative & Corporate decisions with technical needs</li>
                  <li>Directed communication between Administration and technical staff</li>
                  <li>Oversaw application crowd testing</li>
                </ul>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            
          <div className="resume-items">
            <div className="resume-item border-line-h old">
                <div className="date">2023 - 2024</div>
                <div className="name">Lead Developer</div>
                <div><b><i>Unreleased Title</i></b></div>
                <div className="company">Freelance Client</div>
                <ul>
                  <li>Assist in project design & direction</li>
                  <li>Game Databases</li>
                  <li>Weapon System</li>
                  <li>Game AI</li>
                  <li>Building System</li>
                  <li>Dynamic World Grid</li>
                  <li>Procedural World Generation</li>
                  <li>Faction System</li>
                </ul>
              </div>
            <div className="resume-item border-line-h old">
                <div className="date">2021 - 2023</div>
                <div className="name">Senior Developer</div>
                <div><b><i>Fire & Maneuver</i></b></div>
                <div className="company">Armchair Historian Interactive</div>
                <ul>
                  <li>Game Battle AI</li>
                  <li>Unit, Perk, Weapon & Nation Database</li>
                  <li>Game Level Creator</li>
                  <li>Water & other Environmental Shaders</li>
                  <li>Time, Season & Weather System</li>
                  <li>Progression System</li>
                  <li>Tutorial, Scenario & Task System</li>
                  <li>Objective Capture Gamemode</li>
                  <li>Environmental Tiles and Effects</li>
                  <li>Cover and Destructible Building System</li>
                  <li>Unit Battle UI Mechanics & Interactions</li>
                  <li>Game Victory Conditions & Effects</li>
                </ul>
              </div>
              <div className="resume-item border-line-h old">
                <div className="date">April 2022</div>
                <div className="name">Unity Developer / VFX Artist</div>
                <div><b><i>Saturday Night Live</i></b></div>
                <div className="company">NBCUniversal</div>
                <ul>
                  <li>Worked with leadership to independently bring a scene from concept to final render</li>
                  <li>Advised management on improved revision work flow for greater vision accuracy</li>
                  <li>Created multiple 11th hour assets, including modeling, texturing, and finalizing to render</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;
