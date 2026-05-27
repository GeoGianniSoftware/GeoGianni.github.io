import { Fragment } from "react";

const TECHNICAL_STACK = [
  "Unity3D",
  "C#",
  "HLSL",
  "Photon Quantum"
];

const TOOLS_WORKFLOW = [
  "AI-Assisted Tooling",
  "Agentic Development Assistance",
  "Collaborative Documentation",
  "Milestone-Based Development",
  "Sprint Planning",
  "Technical Debt Management",
  "Unit Testing",
  "Dependency Injection",
  "Code Review Process",
  "Architectural Design Patterns",
  "Git Version Control",
  "Performance Profiling",
  "Notion",
  "CI/CD Automation"
];

const ToolsWorkflow = () => {
  return (
    <Fragment>
      <div className="content skills">
        <div className="title">Tools & Workflow</div>

        <div className="skill-category technical-stack">
          <div className="skill-category-header">
            <i className="fa fa-cog" aria-hidden="true" />
            <span>Technical Stack</span>
          </div>
          <div className="skills-wide">
            <ul className="skills-strip">
              {TECHNICAL_STACK.map((s) => (
                <li key={s} className="skill-chip">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="skills-wide border-line-h">
          <ul className="skills-strip">
            {TOOLS_WORKFLOW.map((tool) => (
              <li key={tool} className="skill-chip">{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ToolsWorkflow;
