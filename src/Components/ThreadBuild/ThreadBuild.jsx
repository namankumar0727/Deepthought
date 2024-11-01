// ThreadBuild.js

import infoIcon from '@/assets/info-icon.png';
import './ThreadBuild.css'
import { useState } from "react";
const ThreadBuild = () => {
  const [threads, setThreads] = useState([{ subThread: '', interpretation: '' }]);

  const addSubThread = () => {
    setThreads([...threads, { subThread: '', interpretation: '' }]);
  };

  const handleChange = (index, field, value) => {
    const newThreads = [...threads];
    newThreads[index][field] = value;
    setThreads(newThreads);
  };

  return (
    <div className="card">
      <div className='paragraph1'><p>Threadbuild</p><img src={infoIcon} alt="" /></div>
      <p className='description'><strong>Description:</strong> Watch the video and threadbuild, and jot out key threads while watching the video.</p>
      {threads.map((thread, index) => (
        <div key={index} className='thread'>
          <input
            type="text"
            placeholder="Sub thread"
            value={thread.subThread}
            onChange={(e) => handleChange(index, 'subThread', e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Sub Interpretation"
            value={thread.interpretation}
            onChange={(e) => handleChange(index, 'interpretation', e.target.value)}
            className="input"
          />
          <div className="dropdownContainer">
            <select className="dropdown">
              <option>Select Category</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
            <select className="dropdown">
              <option>Select Process</option>
              <option>Process 1</option>
              <option>Process 2</option>
            </select>
          </div>
        </div>
      ))}
      <button onClick={addSubThread} className="button">+ Sub-thread</button>
      <textarea placeholder="Summary for Thread A" className="textarea"></textarea>
    </div>
  );
};

  
export default ThreadBuild;
