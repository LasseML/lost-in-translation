import { Link } from 'react-router-dom'


const ProfileButton = () => {
    return (
     <div>
         <Link to='/profile'>{ sessionStorage.getItem('userName')}'s Profile</Link>
     </div>
    )
}

export default ProfileButton