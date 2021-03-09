import {useState} from 'react'

const TranslateInput = (props) => {
const [translate, setTranslate] = useState('')

function handleTranslate(e){
    e.preventDefault()
   props.inputString(translate);
}

    return (
        <form className='translate-input'>
            <div>
                <input type='text' placeholder='Enter Text' value={translate}
                onChange={(e) => setTranslate(e.target.value)}/>
            </div>
            <button className='btn' onClick={handleTranslate}>
                Translate
            </button>
        </form>
    )
}

export default TranslateInput
