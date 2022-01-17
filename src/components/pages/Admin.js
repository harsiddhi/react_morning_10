import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
export default function Admin() {
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    let stateupdate = (event)=>{
    if(event.target.name == 'email') {
    setemail(event.target.value)    } 
    else if(event.target.name == 'password')  {
    setpassword(event.target.value) } 
   }
   let getData = (event)=>
   {
       event.preventDefault();
       console.log(email  + password)

   }

    return (
        <div>
        <div className='container'>
            
        <Form onSubmit={getData}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" 
name='email'
value={email} onChange={stateupdate} />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password"  
name='password' value={password} onChange={stateupdate}/>
</Form.Group>

<Button variant="primary" type="submit">
Submit
</Button>
</Form>
    </div>
        </div>
    )
}
