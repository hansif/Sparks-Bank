import Card from './Card'
import customer_icon from './customer_image_2.png'
import transfer_icon from './transfer_money.png'
import transaction_icon from './transaction_history.png'
const Section = () => {
    return ( 
        <div className="section">
            <h2>Welcome to the most Secure and Safe Bank</h2>
            <h4>Our Services</h4>
            <div className="cards">
            <Card className="customer_logo" title="View All Customers" imageUrl={customer_icon}/>
            <Card className="transfer_logo" title="Transfer Money" imageUrl={transfer_icon}/>
            <Card className="history" title="Transaction History" imageUrl={transaction_icon}/>
            </div>
        </div>
     );
}
export default Section;