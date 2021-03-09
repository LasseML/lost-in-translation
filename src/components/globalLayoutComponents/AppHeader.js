import {useHistory} from "react-router-dom";
import Button from "./Button";

const divStyle = {
    float: 'right',
};

const AppHeader = () => {
    const history = useHistory()
    const session = sessionStorage.getItem('userName')
    let isLoggedIn = !(session === null)
    const changePage = () => {
        history.push('/profile')
    }

    return (
        <div className='nav-bar'>
            <ul>
                <li><h3>Translate App!</h3></li>
                {isLoggedIn
                    ?  <li style={divStyle}> <Button text={"Your Profile"} onClick={changePage} /></li>
                    :<></>
                    }
            </ul>
        </div>
    )
}

export default AppHeader
