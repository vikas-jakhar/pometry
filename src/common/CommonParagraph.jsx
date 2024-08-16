const CommonParagraph = (props) => {
    return (
        <p className={`${props.className} font-normal text-base opacity-80`}>{props.text}
            <span className={`${props.breakTextClass}`}>{props.breakText}</span>
            <span className="bg-darkRed-gradient bg-no-repeat bg-cover font-semibold bg-clip-text text-transparent">{props.redText}</span></p>
    )
}

export default CommonParagraph
