import Sign from './Sign'

const SignTranslater = ({stringToTranslate}) => {
    return (
        <div className='signBox'>
            {stringToTranslate.split("").map((letter) => (
                <Sign letter={letter} />
            ))}
        </div>
    )
}

export default SignTranslater
