import infoIcon from '@/assets/info-icon.png';
import './FourSAMethod.css';
import { useState } from 'react';

const FourSAMethod = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="styles-card">
      <div className='paragraph3'><p>4SA Method</p><img src={infoIcon} alt="" /></div>
      <p className='description'><strong>Description:</strong> To Explore more read more</p>
      
      <div className="styles-section" onClick={() => toggleSection('introduction')}>
        <div><h3>Introduction {expandedSection === 'introduction' ? '▲' : '▼'}</h3></div>
        {expandedSection === 'introduction' && (
          <p>The 4SA Method, How to bring an idea into progress?</p>
        )}
      </div>

      <div className="styles-section" onClick={() => toggleSection('threadA')}>
        <div><h3>Thread A {expandedSection === 'threadA' ? '▲' : '▼'}</h3></div>
        {expandedSection === 'threadA' && (
          <p>How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?</p>
        )}
      </div>

      <div className="styles-section" onClick={() => toggleSection('example1')}>
      <div><h3>Example 1 {expandedSection === 'example1' ? '▲' : '▼'}</h3></div>
        {expandedSection === 'example1' && (
          <p>You have a concept. How will you put it into progress?</p>
        )}
      </div>
    </div>
  );
};

export default FourSAMethod;
