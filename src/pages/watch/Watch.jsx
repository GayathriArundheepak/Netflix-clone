import { ArrowBackIosOutlined } from '@material-ui/icons'
import "./Watch.scss";
import { Link } from 'react-router-dom';

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
      <Link to='/' style={{ color: 'white', textDecoration: 'none' }} >

            <ArrowBackIosOutlined/>
      </Link>
            <span>Home</span>
        </div>
      <video className='video' autoPlay progress controls src="https://www.shutterstock.com/shutterstock/videos/1100847317/preview/stock-footage-businessman-working-at-modern-office-stretching-while-taking-a-break-at-desk-job-workplace-holding.webm"/> 


    </div>
  )
}

export default Watch
