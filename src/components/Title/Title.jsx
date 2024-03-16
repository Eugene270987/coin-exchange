
function Title(props) {
    const { size, addClasses } = props;
    const TitleComponent = `h${size}`;
    return (
        <TitleComponent className={`text-4xl text-gold-color font-extrabold title-${size} ${addClasses || ""}`}>{props.children}</TitleComponent>
    );
}

export default Title;