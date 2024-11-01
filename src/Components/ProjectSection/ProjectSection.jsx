// src/Components/ProjectSection/ProjectSection.jsx

import './ProjectSection.css';

const ProjectSection = () => {
  return (
    <div className="project-section">
      <div className="project-title">
        <h1>Technical Project Management</h1>
        <button className="submit-task-btn">Submit task</button>
      </div>
      <div className="project-description">
        <h2>Explore the world of management</h2>
        <p>
          As a project manager, you play an important role in leading a project through initiation, planning, execution, 
          monitoring, controlling and completion. How? Do you want to manage each and every step of your life?
        </p>
      </div>
    </div>
  );
};

export default ProjectSection;
