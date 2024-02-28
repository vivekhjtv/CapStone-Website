import React from 'react';

const ProjectCard = ({
  imageUrl,
  projectTitle,
  projectDescription,
  creatorLink,
  creatorName,
}) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card-container">
        <a href={creatorLink} className="hero-image-container">
          <img className="hero-image" src={imageUrl} alt={projectTitle} />
        </a>
        <main className="main-content">
          <h1>
            <a href={creatorLink}>{projectTitle}</a>
          </h1>
          <p>{projectDescription.substring(0, 188)}...</p>
        </main>
        <div className="card-attribute">
          <p>
            Creation of{' '}
            <span>
              <a href={creatorLink}>{creatorName}</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
