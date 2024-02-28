import React from 'react';
import TeamMember from './TeamMember';

const TeamSection = ({ teamMembers }) => {
  return (
    <section className="Intro container mt-4" id="team">
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ fontFamily: 'Aladin' }}>
          Meet Our Team
        </h2>
        <p
          style={{
            fontSize: '28px',
            color: '#ffe900',
            fontFamily: 'Allura',
          }}
          className="text-center"
        >
          Thunder Devs: Transforming Visions into Digital Reality.
        </p>

        <div className="row mb-5">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
