const Card = ({className,title,imageUrl}) => {
    return (
        <div className={ className }>
            <img src={imageUrl} alt="notloaded" />
            <h1>{ title }</h1>
        </div>
     );
}
 
export default Card;