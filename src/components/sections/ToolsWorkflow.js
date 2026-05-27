import { Fragment } from "react";

const TOOLS_WORKFLOW = [
  // AI & Development Processes
  "AI-Assisted Tooling",
  "Agentic Development Assistance",
  "Collaborative Documentation",

  // Project Management & Planning
  "Milestone-Based Development",
  "Sprint Planning",
  "Technical Debt Management",

  // Development Practices
  "Unit Testing",
  "Dependency Injection",
  "Code Review Process",
  "Architectural Design Patterns",

  // Tools & Infrastructure
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

        {/* single wide section */}
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
