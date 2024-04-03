import React from 'react'
import '../stylesheet/login.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Register from './Register';
import Chart from './Chart';
function Login() {
        const [formData, setFormData] = useState({
          email: '',
          password: ''
        });
        const navigate=useNavigate();
        console.log(formData);
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          // Simulate sending login data to a server
          // try {
            const response = await fetch('http://192.168.141.106:5000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            }).then((res)=>res.json())
            .then((res)=>{
              console.log(res)
              if(res.message=='Logged in Successful'){
                localStorage.setItem('loggedInEmail', formData.email);
                navigate('/analytics')
              }
            })
            
        //     console.log(JSON.stringify(response.formData));
        //     if (response.ok) {
        //       console.log('Login successful');
        //       console.log(response.json);
        //       // history.push('/analytics')
        //       // Reset form after successful login
        //       setFormData({
        //         email: '',
        //         password: ''
        //       });
        //     } else {
        //       console.error('Login failed');
        //     }
        //   } catch (error) {
        //     console.error('Error during login:', error);
        //   }
        };
    
    return (
        <form onSubmit={handleSubmit}>
        <div className='whole_body'>
            <p id='login_heading'>Login</p>
            <div>
                <div>
                    {/* <p>UserName</p> */}
                </div>
                <div>
                    <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange}/>
                </div>
            </div>
            <div>
                <div>
                    {/* <p>Password</p> */}
                </div>
                <div>
                    <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
                </div>
            </div>
            <div>
                <input type="submit" value="Login" id='button'/>
            </div>
            <p>Are you not a member ?<Link to={"/register"}><span>Register</span></Link> </p>
        </div>
        </form>
      );
  
}

export default Login;