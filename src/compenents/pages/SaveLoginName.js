import { useState } from 'react'
import { withRouter } from 'react-router-dom'

const SaveLoginName = ({ onSave, history }) => {
    const [text, setText] = useState('')

    const onSubmit =(e) => {
        e.preventDefault()
        if (!text) {
            alert('Please type a name')
            return
        }
        sessionStorage.setItem('userName', text)
        const transArr = []
        sessionStorage.setItem("transArr", JSON.stringify(transArr))
        setText('')
        history.push('/translate')
    }

    return (
        <form className='save-login' onSubmit={onSubmit}>
            <div className='name-box'>
                <label>Name</label>
                <input type='text' placeholder='Write your name' value ={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <input type='submit' value='Login' />
        </form>
    )
}

export default withRouter(SaveLoginName)