import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

const LandingSection = () => {
    return(
        <div id='landingSection' >
            <h1 id='landingTitle'>Looking To Have A Pool Table Moved?</h1>
            <Link to='/job-form'>
                <Button id='landing-button'>Get A Free Quote Now</Button>   
            </Link>
        </div>
    )
}

export default LandingSection;