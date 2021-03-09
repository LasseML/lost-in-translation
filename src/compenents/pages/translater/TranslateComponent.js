import {useState} from 'react'
import SignTranslater from './SignTranslater'
import TranslateInput from './TranslateInput'
import Button from "../../Button";




function TranslateComponent({ history }) {
    const [translate, setTranslate] = useState('')

    const onTranslate =(textToTranslate) => {
        const translateHistory = JSON.parse(sessionStorage.getItem('transArr'))
        const index = translateHistory.indexOf(textToTranslate.toUpperCase())
        if (index > -1) {
            translateHistory.splice(index, 1)
        }
        translateHistory.unshift(textToTranslate.toUpperCase())
        if (translateHistory.length > 10){
            translateHistory.pop()
        }
        sessionStorage.setItem("transArr", JSON.stringify(translateHistory))

        setTranslate(textToTranslate)
    }

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