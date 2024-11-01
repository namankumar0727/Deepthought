import './Footer.css'
import questionmark1 from '@/assets/questionmark1.png'
import meeting from '@/assets/meeting.png'
import schedule from '@/assets/schedule.png'
const Footer = () => {
  return (
    <div className='container-footer'>
    <div className="icon-circle">
  <img src={questionmark1} alt="Question Icon" className="icon"/>
</div>

<div className="icon-circle">
  <img src={meeting} alt="Meeting Icon" className="icon"/>
</div>

<div className="icon-circle">
  <img src={schedule} alt="Calendar Icon" className="icon"/>
</div>
</div>

  )
}
export default Footer