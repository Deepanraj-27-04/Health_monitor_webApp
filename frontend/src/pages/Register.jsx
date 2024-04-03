import React from 'react'
import '../stylesheet/login.css'
import '../stylesheet/register.css'
import { useState } from 'react';
function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        blood_group:'',
        height:'',
        weight:'',
        address:'',
        gender:'',
        phone:'',
        dob:''
      });
      console.log(formData);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate sending registration data to a server
        try {
          const response = await fetch('http://192.168.141.106:5000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (response.ok) {
            console.log('Registration successful');
            console.log(response);
            // Reset form after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                blood_group:'',
                height:'',
                weight:'',
                address:'',
                gender:'',
                phone:'',
                dob:''
            });
          } else {
            console.error('Registration failed');
          }
        } catch (error) {
          console.error('Error during registration:', error);
        }
      };
    return (
        <form onSubmit={handleSubmit}>
        <div className='whole_body'>
           
            <p id='login_heading'>Register</p>
            <div>
                <div>
                    <p>Name</p>
                </div>
                <div>
                    <input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
                </div>
            </div>
            <div>
                <div>
                    <p>Password</p>
                </div>
                <div>
                    <input type="password" placeholder='password' name='password' value={formData.password} onChange={handleChange} />
                </div>
            </div>
            <div>
                <div>
                    <p>Email</p>
                </div>
                <div>
                    <input type='email' placeholder='email' name='email' value={formData.email} onChange={handleChange} />
                </div>
            </div>
            <div id='basic_weights'>
                <div id='whole_basic_weights'>
                    <div id='basic_weigth_name'>Blood Group</div>
                    <div>
                        <input type='text' placeholder='b-group' id='basic_weigth_input' name='blood_group' value={formData.blood_group} onChange={handleChange} />
                    </div>
                </div>
                <div id='whole_basic_weights'>
                    <div id='basic_weigth_name'>Height</div>
                    <div>
                        <input type='text' placeholder='Height' id='basic_weigth_input' name='height' value={formData.height} onChange={handleChange} />
                    </div>
                </div>
                <div id='whole_basic_weights'>
                    <div id='basic_weigth_name'>Weight</div>
                    <div>
                        <input type='text' placeholder='weight' id='basic_weigth_input' name='weight' value={formData.weight} onChange={handleChange}/>
                    </div>
                </div>
                
            </div>
            <div id='radio-input'>
                <div>
                <div>Male</div><div><input type="radio" name='gender' value='Male' checked={formData.gender === 'Male'} onChange={handleChange} /></div>
                </div>
                <div>
                <div>Female</div><div><input type="radio" name='gender' value='Female' checked={formData.gender === 'Female'} onChange={handleChange} /></div>
                </div>
                <div>
                <div>Others</div><div><input type="radio" name='gender' value='Others'  checked={formData.gender === 'Others'} onChange={handleChange} /></div>
                </div>
            </div>
            <div>
                <div>
                    <p>Date of Birth</p>
                </div>
                <div>
                    <input type='date' placeholder='DOB'  name='dob' value={formData.dob} onChange={handleChange} />
                </div>
            </div>
            <div>
                <div>
                    <p>Phone Number</p>
                </div>
                <div>
                    <input type="tel" placeholder='phone no' name='phone' value={formData.phone} onChange={handleChange} />
                </div>
            </div>
            <div>
                <div>
                    <p>Address</p>
                </div>
                <div>
                    <input type='text' placeholder='Address'  name='address' value={formData.address} onChange={handleChange} />
                </div>
            </div>

            <div>
            <input type="submit" value="Register" id='button'/>
            </div>
            {/* <p>Are you not a member ? <span>Register</span></p> */}
        </div>
        </form>
    )
}

export default Register