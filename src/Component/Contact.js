import React from 'react'
import { useEffect, useState } from 'react'

export const Contact = () => {
    const [Contact, setContact] = useState({
        username: '',
        Phone: '',
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({ ...Contact, [name]: value });
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...Contact, id: new Date().getTime().toString() };
        setRecords([...Records, newRecord]);
        setContact({ username: '', Phone: '' }); // Reset the Contact state to empty values
      }
      
    const ContactFromLocalStorage = JSON.parse(localStorage.getItem("Contact") || "[]")
    useEffect(() => {
        localStorage.setItem("Contact", JSON.stringify(Contact));
    }, [Contact])
        const [Records, setRecords] = useState([ContactFromLocalStorage])
   


    return (
        <div className='main' >
           <div className='main1'> <div className="d-flex  p-2 bd-highlight">
                <form>
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <div ><input type="text" className="form-control" value={Contact.username} name="username" onChange={handleInput} id="inputName" />
                    </div>
                    <div >
                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                        <input type="Number" className="form-control" value={Contact.Phone} name="Phone" onChange={handleInput} id="inputPhone" />
                    </div>
                    <button  className="btn btn-outline-primary m-3" type="submit" onClick={handleSubmit}>Add Contact
                    </button>
                </form>
            </div>
            </div>
            <div >Contacts</div>
            
            
            <table className='table-responsive' style={{width:"auto"}}>
                <thead>
                    <tr>
                        <th style={{padding:"0 300px 0 150px"}}>Username</th>
                        <th style={{padding:"0 200px 0 0"}}>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {Records.map((record) => (
                        <tr key={record.id}>
                            <td>{record.username}</td>
                            <td>{record.Phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>



    )
}
