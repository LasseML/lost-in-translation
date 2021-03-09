import {useState} from 'react'
import SignTranslater from './SignTranslater'
import TranslateInput from './TranslateInput'

function TranslatePage() {
    const [translate, setTranslate] = useState('')
/*
* onTranslate takes a text to translate as input
* it retrieves the current translation history from session storage
* if the text already exists it places the text in the front of the translation history
* else it places the text in front of the translation history and removes the oldest translation if more than 10 are present
*/
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
