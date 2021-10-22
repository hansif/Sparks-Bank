import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebaseDb from './firebase';
const TransferMoney = () => {
    const history = useHistory();
    const [userData,setUserData] = useState({
         from:"",
         to:"",
         amount:"",
    });
    let name,value;
    const postUserData = (event) => {
         name = event.target.name;
         value = event.target.value;
         setUserData({...userData,[name]: value});
    };
    const submitButton = async (event) => {
        event.preventDefault();
        const { from,
            to,
            amount } = userData;
            if(amount<1)
            {                setUserData({
                from: "",
                                        to: "",
                                        amount: ""
            });
            alert("Fill the Valid Value")}



        else if (from &&
            to &&
            amount) {
            firebaseDb.child('User').orderByChild('Name').equalTo(from).once("value",snapshot => {
                if (snapshot.exists()){
                    firebaseDb.child('User').orderByChild('Name').equalTo(to).once("value",snapshot => {
                        if (snapshot.exists()){
                        firebaseDb.child('User').child(from).child('Balance').once("value").then(data => {
                            if(data.val() !== null){
                               if(data.val()>=amount) {
                                const res = fetch(
                                    "https://banking-system-cee68-default-rtdb.firebaseio.com/Transactions.json",
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            from,
                                            to,
                                            amount
                                        })
                                    }
                                );
                                if (res) {
                                    setUserData({
                                        from: "",
                                        to: "",
                                        amount: ""
                                    });
                                    firebaseDb.child('User').child(to).child('Balance').once("value").then(data1 => {
                                        if(data1.val() !== null){
                                    let from_money = data.val() - amount;
                                    let to_money = +(data1.val()) + +(amount);
                                    alert("Money Transfer");
                                    firebaseDb.child('User').child(from).update({'Balance': from_money});
                                    firebaseDb.child('User').child(to).update({'Balance': to_money});
                                        }
                                });
                                history.push('/transaction');
                                }
                                else {
                                    setUserData({
                                        from: "",
                                        to: "",
                                        amount: ""
                                    });
                                    alert("Fill the correct Data");
                                }
                               }
                               else {
                                   alert("Sender Money is Less");
                               }
                            }
                          });
                }
                else {
                    alert("The Receiver User is not Found");
                    setUserData({
                        from: "",
                                        to: "",
                                        amount: ""
                    });
                }
                });
            } 
                else {
                    alert("The Sender User is not Found");
                    setUserData({
                        from: "",
                                        to: "",
                                        amount: ""
                    });
                }

        });
    }
        else{
            setUserData({
                from: "",
                to: "",
                amount: ""
            });
            alert("Fill the Data completely")
        }
    }
    return ( 
        <div className="transfer">
          <h2>Enter the Transfer Details</h2>
            <form method="POST">
            <label className="lable">
                From:
                <input type="text" name="from" id="name1" 
                placeholder="Enter Sender's Name"  
                value={userData.from}
                onChange={ postUserData }/>
            </label>

            <label className="lable">
                To:
                <input type="text" name="to" id="name2"
                 placeholder="Enter Reciever's Name" 
                 value={userData.to}
                 onChange={ postUserData }/>
            </label>

            <label className="lable1">
                Amount:
                <input type="number" name="amount" id="amount"
                 placeholder="Enter the amount"
                 value={userData.amount}
                 onChange={ postUserData }/>
            </label>
            <button className="submit" onClick={ submitButton }>Submit</button>
        </form>
        </div>
     );
}
 
export default TransferMoney;