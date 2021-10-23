import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import firebaseDb from './firebase';
const Customer = () => { 
    var [userObjects, setUserObjects] = useState({})
    var history = useHistory();
    useEffect(() => {
        firebaseDb.child('User').on('value', snapshot => {
            if (snapshot.val() != null)
                setUserObjects({
                    ...snapshot.val()
                })
            else
                setUserObjects({})

        })
    }, [])
    /*
    if(!((i+1<n && grid[i+1][j]!=0) || (i-1>=0 && grid[i-1][j]!=0) ||
                        (j+1<m && grid[i][j+1]!=0) || (j-1>=0 && grid[i][j-1]!=0)))
                             return -1;
    */
    return ( 
        <div className="customer">
             <table >
                    <thead>
                        <tr>
                            {/* <th scope="col">S.No.</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Balance(₹)</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Object.keys(userObjects).map(id => {
                                return <tr key={id}>
                                    {/* <th scope="row"></th> */}
                                    <td>{userObjects[id].Name}</td>
                                    <td>{userObjects[id].Email}</td>
                                    <td>₹ {userObjects[id].Balance}</td> 
                                    <td className="tda"><a onClick={ () => {
                                        history.push("/customer/" + userObjects[id].Name);
                                    }}>View User Details</a></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
        </div>
     );
}
 
export default Customer;