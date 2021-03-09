import {useState} from 'react'
import SignTranslater from './SignTranslater'
import TranslateInput from './TranslateInput'
import Button from "../../Button";
import {useHistory} from "react-router-dom";




function TranslateComponent() {
    const [translate, setTranslate] = useState('')

    const onTranslate =(textToTranslate) => {
        setTranslate(textToTranslate)
    }
    const history = useHistory()

    const changePage = () => {
        history.push('/profile')
    }

    const buttonText = sessionStorage.getItem('userName')
    return (
        <div className="container">
            <Button color='green' text={buttonText} onClick={changePage} />
            <TranslateInput inputString={onTranslate}/>
            <SignTranslater stringToTranslate={translate} />
        </div>
    );
}

export default TranslateComponent;