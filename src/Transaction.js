import { useState, useEffect } from 'react';
import firebaseDb from './firebase';
const Transaction = () => {
    var [userObjects, setUserObjects] = useState({})
    useEffect(() => {
        firebaseDb.child('Transactions').on('value', snapshot => {
            if (snapshot.val() != null)
                setUserObjects({
                    ...snapshot.val()
                })
            else
                setUserObjects({})

        })
    }, [])
    return ( 
        <div className="transation">
            <table >
                    <thead>
                        <tr>
                            {/* <th scope="col">S.No.</th> */}
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Money(₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Object.keys(userObjects).map(id => {
                                return <tr key={id}>
                                    {/* <th scope="row"></th> */}
                                    <td>{userObjects[id].from}</td>
                                    <td>{userObjects[id].to}</td>
                                    <td>₹ {userObjects[id].amount}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
        </div>
     );
}
 
export default Transaction;