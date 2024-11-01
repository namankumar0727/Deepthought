
import homeIcon from '@/assets/home-icon.png';
import toolsIcon from '@/assets/tools-icon.png';
import bellIcon from '@/assets/bell-icon.png';
import profilePic from '@/assets/profile-pic.png';

import './Navbar.css'
function Navbar() {
  return (
    <div className='nav-wrapper'>
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="Deep Thought Logo" className="navbar-logo" />
      </div>
      <div className="navbar-icons">
        <img src={homeIcon} alt="Home" className="icon" />
        <img src={toolsIcon} alt="Tools" className="icon" />
        <img src={bellIcon} alt="Notifications" className="icon" />
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="more-icon">⋮</span> {/* More icon as text or replace with image */}
      </div>
    </nav>
    </div>
  );
}

export default Navbar;