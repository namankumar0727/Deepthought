
import infoIcon from '@/assets/info-icon.png';
import './StructureYourPointers.css';

const StructureYourPointers = () => {
  return (
    <div className="styles-card">
      <div className='paragraph2'><p>Structure your Pointers</p><img src={infoIcon} alt="" /></div>
      <p className='description'>
        <strong>Description:</strong> Write a 300 - 400 word article from your thread. Publish your understanding and showcase your understanding to the entire world.
      </p>
      
      <div className="styles-field">
        <label>Title</label>
        <input type="text" placeholder="" className="styles-input" />
      </div>
      
      <div className="styles-field">
        <label>Content</label>
        <div className="styles-richTextEditor">
          <div className="styles-toolbar">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Insert</span>
            <span>Format</span>
            <span>Tools</span>
            <span>Table</span>
            <span>Help</span>
          </div>
          <textarea placeholder="Write your content here..." className="styles-textarea"></textarea>
        </div>
      </div>
    </div>
  );
};

export default StructureYourPointers;
