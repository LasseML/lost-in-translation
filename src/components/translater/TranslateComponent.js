import {useState} from 'react'
import SignTranslater from './SignTranslater'
import TranslateInput from './TranslateInput'




function TranslateComponent() {
    const [translate, setTranslate] = useState('')

    const onTranslate =(textToTranslate) => {
        setTranslate(textToTranslate)
    }

  return (
    <div className="container">
      <TranslateInput inputString={onTranslate}/>
      <SignTranslater stringToTranslate={translate} />
    </div>
  );
}

export default TranslateComponent;