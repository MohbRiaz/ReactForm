import React, { useState } from 'react';
import {Button, Alert } from "react-bootstrap";
import { useUserAuth } from '../context/UserAuth';
import { useNavigate } from "react-router-dom";



const Home = () => {
    const { user, logOut } = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogOut = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    };
    return(
        <>
        <div className='p-4 box mt-3 text-center'> Hello <br/>{user && user.email}</div>
        <div className='d-grip gap-2'>
            <Button variant = "primary" onClick={handleLogOut}> Log out</Button>
            {error && <Alert variant="danger">{error}</Alert>}
        </div>
        </>
    )
}

export default Home;