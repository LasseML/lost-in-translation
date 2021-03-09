const Sign = ({letter}) => {
    return (
        <div className='signContainer'>
            <img className='sign' src={ `../resources/signs/${letter}.png` } alt={letter}/>
        </div>
    )
}

export default Sign
