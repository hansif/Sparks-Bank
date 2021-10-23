import { useHistory } from "react-router";
const Card = ({className,title,imageUrl,abcd}) => {
    const history = useHistory();
    const onRoute = () => {
        let path =  abcd ;
        console.log(path);
        history.push(path);
    }
    return (
        <div className={ className } onClick={onRoute}>
            <img src={imageUrl} alt="notloaded" />
            <h1>{ title }</h1>
        </div>
     );
}
 
export default Card;