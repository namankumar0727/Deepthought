// ProjectVideoCard.js
import infoIcon from '@/assets/info-icon.png';
import './ProjectVideoCard.css'

const ProjectVideoCard = () => {
  return (
    <div className='card'>
      <div className='paragraph'><p>Technical Project Management </p><img src={infoIcon} alt="" /></div>
      <p className='description'><strong>Description:</strong> Story of Alignment Scope of Agility Specific Accountable Staggering Approach</p>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/VCih31JB5cM?si=WSUCGd-iw-8-USd4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
    </div>
  );
};



export default ProjectVideoCard;
