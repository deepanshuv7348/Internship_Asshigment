import React, { useState } from 'react'
import "./admin.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080//api/employees', {
                email,
                password,
            });
            localStorage.setItem(response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during login:', error);
            alert('Invalid credentials');
        }


    }
        ; return (

            <div className='d-flex justify-content-center align-items-cente '>
                <form onSubmit={handleSubmit} className='forms '>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3 ">Login</button>
                </form>
            </div>


        )
}

export default AdminLogin
