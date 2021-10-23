import { useState } from 'react';
import firebaseDb from './firebase';
import { useEffect } from 'react';
const UserDetails = (props) => {   
    const [Username, setUsername] = useState('');
    const [Useremail, setUseremail] = useState('');
    const [Userbalance, setUserbalance] = useState('');
    
    var [userObjects, setUserObjects] = useState({})
    useEffect(() => {
        firebaseDb.child('Transactions').orderByChild('from').equalTo(props.match.params.name).on('value', snapshot => {
            if (snapshot.val() != null) {
                console.log(snapshot.val());
                setUserObjects({
                    ...snapshot.val()
                })
            }
            else
                setUserObjects({})

        })
    }, [])
    var [userObjects1, setUserObjects1] = useState({})
    useEffect(() => {
        firebaseDb.child('Transactions').orderByChild('to').equalTo(props.match.params.name).on('value', snapshot => {
            if (snapshot.val() != null) {
                console.log(snapshot.val());
                setUserObjects1({
                    ...snapshot.val()
                })
            }
            else
                setUserObjects1({})

        })
    }, [])
    firebaseDb.child('User').child(props.match.params.name).child('Name').once("value").then(data => {
        if(data.val() !== null){
            setUsername(data.val());
        }
    });
    firebaseDb.child('User').child(props.match.params.name).child('Email').once("value").then(data1 => {
        if(data1.val() !== null){
            setUseremail(data1.val());
        }
    });
    firebaseDb.child('User').child(props.match.params.name).child('Balance').once("value").then(data2 => {
        if(data2.val() !== null){
            setUserbalance(data2.val());
        }
    });

    // console.log(Username + " " + Useremail + " " + Userbalance + " " + props.match.params.name);
    return (  
        <div className="userdetails">
            <div className="userdetailsinfo">
            <div className="name">{ Username }</div>
            <div className="email">{ Useremail }</div>
            <div className="balance">{ Userbalance }</div>
            </div>
            <div className="from">
                <h1>Money Transferred from {props.match.params.name } </h1>
            <table >
                    <thead>
                        <tr>
                            {/* <th scope="col">S.No.</th> */}
                            <th scope="col">To</th>
                            <th scope="col">Money(₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Object.keys(userObjects).map(id => {
                                return <tr key={id}>
                                    {/* <th scope="row"></th> */}
                                    <td>{userObjects[id].to}</td>
                                    <td>₹ {userObjects[id].amount}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="to">
            <h1>Money Transferred to {props.match.params.name } </h1>
            <table >
                    <thead>
                        <tr>
                            {/* <th scope="col">S.No.</th> */}
                            <th scope="col">From</th>
                            <th scope="col">Money(₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Object.keys(userObjects1).map(id => {
                                return <tr key={id}>
                                    {/* <th scope="row"></th> */}
                                    <td>{userObjects1[id].from}</td>
                                    <td>₹ {userObjects1[id].amount}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default UserDetails;