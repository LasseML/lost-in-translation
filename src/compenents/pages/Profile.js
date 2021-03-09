import Button from "../Button";
import { useState } from 'react'



const Profile = ({ history }) => {
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
                <h3>User name: {user}</h3>
                <Button text='Erase translations' onClick={deleteTranslations} />
                <Button text='Logout' onClick={logout} />
            </div>

            <h4>Translated items:</h4>
            <>
                {arr.map((transItem) => (<p key={transItem}>{transItem}</p>))}
            </>
            <Button text='Back' onClick={goBack} />
        </div>
    )

}

export default Profile