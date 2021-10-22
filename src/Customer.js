import { useState, useEffect } from 'react';
import firebaseDb from './firebase';
const Customer = () => { 
    var [userObjects, setUserObjects] = useState({})
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
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Object.keys(userObjects).map(id => {
                                return <tr key={id}>
                                    {/* <th scope="row"></th> */}
                                    <td><a href="/transfer">{userObjects[id].Name}</a></td>
                                    <td>{userObjects[id].Email}</td>
                                    <td>₹ {userObjects[id].Balance}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
        </div>
     );
}
 
export default Customer;