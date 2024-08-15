const CommonParagraph = (props) => {
    return (
        <p className={`${props.className} font-normal text-base opacity-80`}>{props.text}</p>
    )
}

export default CommonParagraph
