import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
      <div className="resume-title border-line-h">
        <div className="icon">
            <i className="fa fa-briefcase" />
        </div>
        <div className="name">Experience</div>
          <div className="resume-items">
                <div className="resume-item border-line-h old"> {/* Hood Tales: Morocco  2025 - 2026 */}
                    <div className="resume-item-header">
                      <img className="resume-item-icon" src="images/workicons/work_hoodtales.jpg" alt="Hood Tales: Morocco" />
                      <div>
                        <div className="date">2025 - 2026</div>
                        <div className="name">Senior Unity Engineer (Performance & Systems)</div>
                        <div><b><i>Hood Tales: Morocco</i></b></div>
                        <div className="company">Silver Diamond Softwares [Contract]</div>
                      </div>
                    </div>
                    <div className="resume-standouts">
                      <span className="resume-standout">Stabilized frame rate to 60fps on target hardware</span>
                      <span className="resume-standout">2000+ line scripts → modular HFSM</span>
                      <span className="resume-standout">4x world density, 50% fewer draw calls</span>
                      <span className="resume-standout">City-scale LOD & streaming pipeline</span>
                    </div>
                    <div className="resume-tool">
                      <i className="fa fa-wrench" aria-hidden="true" />
                      <span><span className="tool-name">Open-World Chunk Streaming Editor</span> — Custom editor tool for authoring, previewing, and debugging city-scale LOD and streaming boundaries in-editor</span>
                    </div>
                    <ul>
                      <li>Brought in to stabilize and optimize a complex Unity production, resolving systemic performance, scalability, and architectural issues.</li>
                      <li>Re-architected core systems using dependency injection and event-driven patterns, eliminating thousands of direct object dependencies.</li>
                      <li>Replaced monolithic mission scripts (2000+ lines each) with a data-driven HFSM system, enabling scalable and maintainable gameplay logic.</li>
                      <li>Developed open-world chunk streaming and city-scale LOD systems (impostors, instancing, prebaked data), significantly increasing world density while reducing runtime cost.</li>
                      <li>Implemented instanced rendering, prebaked collision, and navigation pipelines to stabilize large-scale environments and reduce runtime overhead.</li>
                      <li>Built core infrastructure (spawn scheduling, centralized save/blackboard systems, tooling), and led development across a distributed, multi-national team.</li>
                    </ul>
                  </div>
                <div className="resume-item border-line-h old"> {/* BeraTone 2023 - 2025*/}
                    <div className="resume-item-header">
                      <img className="resume-item-icon" src="images/workicons/work_beratone.jpg" alt="BeraTone" />
                      <div>
                        <div className="date">2023 - 2025</div>
                        <div className="name">Senior Unity Developer</div>
                        <div><b><i>BeraTone</i></b></div>
                        <div className="company">BeraTone</div>
                      </div>
                    </div>
                    <div className="resume-standouts">
                      <span className="resume-standout">Helped secure $2M seed investment</span>
                      <span className="resume-standout">70+ quests, 50+ NPCs shipped</span>
                      <span className="resume-standout">Quantum 3 multiplayer from zero</span>
                      <span className="resume-standout">6 full environments, end-to-end</span>
                    </div>
                    <div className="resume-tool">
                      <i className="fa fa-wrench" aria-hidden="true" />
                      <span><span className="tool-name">Level Design Workflow Suite</span> — Automated layout, prop placement, and validation tools that cut environment authoring time by 40%</span>
                    </div>
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
                <div className="resume-item border-line-h old"> {/* Fire & Maneuver  2021 - 2023 */}
                    <div className="resume-item-header">
                      <img className="resume-item-icon" src="images/workicons/work_f&m.jpg" alt="Fire & Maneuver" />
                      <div>
                        <div className="date">2021 - 2023</div>
                        <div className="name">Senior Developer</div>
                        <div><b><i>Fire & Maneuver</i></b></div>
                        <div className="company">Armchair Historian Interactive</div>
                      </div>
                    </div>
                    <div className="resume-standouts">
                      <span className="resume-standout">12+ shipped gameplay systems</span>
                      <span className="resume-standout">Strategic battle AI from scratch</span>
                      <span className="resume-standout">Custom shader pipeline (water, env)</span>
                      <span className="resume-standout">Steam Early Access launch</span>
                    </div>
                    <div className="resume-tool">
                      <i className="fa fa-wrench" aria-hidden="true" />
                      <span><span className="tool-name">Game Level Creator</span> — Visual editor for designing, balancing, and playtesting strategy maps without code changes</span>
                    </div>
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
                <div className="resume-item border-line-h old"> {/* SNL  April 2022 */}
                    <div className="resume-item-header">
                      <img className="resume-item-icon" src="images/workicons/work_snl.jpg" alt="Saturday Night Live" />
                      <div>
                        <div className="date">April 2022</div>
                        <div className="name">Unity Developer / VFX Artist</div>
                        <div><b><i>Saturday Night Live</i></b></div>
                        <div className="company">NBCUniversal</div>
                      </div>
                    </div>
                    <div className="resume-standouts">
                      <span className="resume-standout">Concept to final render, solo delivery</span>
                      <span className="resume-standout">Live broadcast deadline — zero margin</span>
                    </div>
                    <div className="resume-tool">
                      <i className="fa fa-wrench" aria-hidden="true" />
                      <span><span className="tool-name">Rapid Asset Pipeline</span> — Streamlined modeling-to-render workflow enabling 11th-hour asset delivery for live production</span>
                    </div>
                    <ul>
                      <li>Worked with leadership to independently bring a scene from concept to final render</li>
                      <li>Advised management on improved revision work flow for greater vision accuracy</li>
                      <li>Created multiple 11th hour assets, including modeling, texturing, and finalizing to render</li>
                    </ul>
                  </div>
                <div className="resume-item border-line-h old"> {/* The Final Bastion  2022 - 2023 */}
                    <div className="resume-item-header">
                      <img className="resume-item-icon" src="images/workicons/work_thefinalbastion.jpg" alt="The Final Bastion" />
                      <div>
                        <div className="date">2022 - 2023</div>
                        <div className="name">Lead Developer</div>
                        <div><b><i>The Final Bastion</i></b></div>
                        <div className="company">GeoGianni Games</div>
                      </div>
                    </div>
                    <div className="resume-standouts">
                      <span className="resume-standout">Full game shipped to Early Access</span>
                      <span className="resume-standout">Photon multiplayer — PvP & PvE</span>
                      <span className="resume-standout">Solo technical & business leadership</span>
                    </div>
                    <div className="resume-tool">
                      <i className="fa fa-wrench" aria-hidden="true" />
                      <span><span className="tool-name">Tower Defense Balancing Dashboard</span> — Data-driven tuning interface for real-time balance iteration across PvP and PvE modes</span>
                    </div>
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
                <div className="resume-item border-line-h old"> {/* Freelance 2023 - 2024 */}
                    <div className="resume-item-header">
                      <img className="resume-item-icon" src="images/workicons/work_unreleased.jpg" alt="Unreleased Title" />
                      <div>
                        <div className="date">2023 - 2024</div>
                        <div className="name">Lead Developer</div>
                        <div><b><i>Unreleased Title</i></b></div>
                        <div className="company">Freelance Client [Contract]</div>
                      </div>
                    </div>
                    <div className="resume-standouts">
                      <span className="resume-standout">Procedural world generation system</span>
                      <span className="resume-standout">Full systems architecture ownership</span>
                    </div>
                    <div className="resume-tool">
                      <i className="fa fa-wrench" aria-hidden="true" />
                      <span><span className="tool-name">Dynamic World Grid Editor</span> — Visual tool for configuring procedural generation rules, faction territories, and world grid parameters</span>
                    </div>
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
                <div className="resume-item border-line-h old"> {/* Platechasr  2019 - 2020 */}
                    <div className="resume-item-header">
                      <img className="resume-item-icon" src="images/workicons/work_platechasr.jpg" alt="PlateChasr" />
                      <div>
                        <div className="date">2019 - 2020</div>
                        <div className="name">Lead Backend Engineer</div>
                        <div className="company">PlateChasr</div>
                      </div>
                    </div>
                    <div className="resume-standouts">
                      <span className="resume-standout">iOS App Store launch</span>
                      <span className="resume-standout">Full backend architecture (Java, Firebase)</span>
                    </div>
                    <div className="resume-tool">
                      <i className="fa fa-wrench" aria-hidden="true" />
                      <span><span className="tool-name">Crowd Testing Dashboard</span> — Admin interface for managing beta testers, tracking bug reports, and monitoring app stability metrics</span>
                    </div>
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
      </div>
    </Fragment>
  );
};
export default ResumeSection;
