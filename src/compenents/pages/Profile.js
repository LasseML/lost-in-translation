import Button from "../Button";
import { useState } from 'react';



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
        console.log(sessionStorage.getItem('transArr'))
    }

    const goBack = () => {
        history.push('/translate')
    }

    return (
        <div>
            <h2>PROFILE PAGE</h2>
            <h3>User name: {user}</h3>
            <Button text='Logout' onClick={logout} />
            <Button text='Erase translations' onClick={deleteTranslations} />
            <h4>Translated items:</h4>
            <>
                {arr.map((transItem) => (<p key={transItem}>{transItem}</p>))}
            </>
            <Button text='Back' onClick={goBack} />
        </div>
    )

}

export default Profile