import {useHistory} from "react-router-dom";
import Button from "./Button";

const divStyle = {
    float: 'right',
};

const AppHeader = () => {
    const history = useHistory()
    const buttonText = sessionStorage.getItem('userName') + "'s ProfilePage"
    const changePage = () => {
        history.push('/profile')
    }

    return (
        <div className='nav-bar'>
            <ul>
                <li><h3>Translate App!</h3></li>
                <li style={divStyle}>
                    <Button text={buttonText} onClick={changePage} />
                </li>
            </ul>
        </div>
    )
}

export default AppHeader
