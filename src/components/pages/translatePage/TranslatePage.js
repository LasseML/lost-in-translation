import {useState} from 'react'
import SignTranslater from './SignTranslater'
import TranslateInput from './TranslateInput'

function TranslatePage() {
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

    return (
        <div className="container">
            <TranslateInput inputString={onTranslate}/>
            <SignTranslater stringToTranslate={translate} />
        </div>
    );
}

export default TranslatePage;