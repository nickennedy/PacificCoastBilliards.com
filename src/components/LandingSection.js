import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

const LandingSection = () => {
    return(
        <div id='landingSection' >
            <div className="landing-options">
                <h1 className='landing-title'>Looking To Have A Pool Table Moved?</h1>
                <Link to='/job-form'>
                    <Button id='landing-button'>Get A Free Quote Now!</Button>   
                </Link>
            </div>
            {/* <div className="landing-options">
                <h4 className='landing-title'>Looking to Purchase A Pool Table?</h4>
                <Link to='/'>
                    <Button id='landing-button'>Shop Tables</Button>   
                </Link>
            </div> */}
        </div>
    )
}

export default LandingSection;