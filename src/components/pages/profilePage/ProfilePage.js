import Button from "../../globalLayoutComponents/Button";
import { useState } from 'react'

const divStyle = {
    margin: '15px',
};

const ProfilePage = ({ history }) => {
    const [arr, setArr] = useState(JSON.parse(sessionStorage.getItem('transArr')))
    let user = sessionStorage.getItem('userName')

    const logout = () => {
       sessionStorage.clear()
       window.location.reload(false)
    }
    const deleteTranslations = () => {
        const eraseArr = []
        setArr(arr => [])
        sessionStorage.setItem('transArr', JSON.stringify(eraseArr))
    }

    const goBack = () => {
        history.push('/translate')
    }

    return (
        <div className='container'>
            <h2 className='profile-header'>PROFILE PAGE</h2>
            <div className='username-actions'>
                <h3 style={divStyle}>User name: {user}</h3>
                <Button text='Erase translations' onClick={deleteTranslations} />
                <Button text='Logout' onClick={logout} />

            <h4 style={divStyle}>Translated items:</h4>
            <>
                {arr.map((transItem) => (<p style={divStyle} key={transItem}>{transItem}</p>))}
            </>
                <Button style={divStyle} text='Back' onClick={goBack} />
            </div>

        </div>
    )

}

export default ProfilePage