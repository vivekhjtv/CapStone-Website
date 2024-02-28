import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const TeamMember = ({
  name,
  role,
  description,
  githubLink,
  linkedinLink,
  imagePath,
}) => {
  return (
    <div className="col-md-3">
      <div className="a-box team_card">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img
                src={imagePath}
                alt={name}
                className="team-member-image img_team"
              />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3
            style={{
              color: '#04ff4b',
              fontSize: '30px',
            }}
          >
            {name}
          </h3>

          <div
            style={{
              color: 'white',
            }}
          >
            {role}
          </div>
          <p style={{ textAlign: 'justify ', color: '#0096c7' }}>
            {description}
          </p>
          <div className="social-icons">
            <a href={githubLink}>
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  color: 'green',
                  marginRight: '10px',
                  fontSize: '30px',
                }}
              />
            </a>
            <a href={linkedinLink}>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: 'green', fontSize: '30px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
