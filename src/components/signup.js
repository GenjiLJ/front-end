import React from 'react';
import Auth_service from '../service/auth.service';
import { useState,useRef } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './signup.css'
import Camera from './webcamsgn';
import Webcam from "react-webcam";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBadge,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState('')
  const boundingBox = useState('')
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [username, setUsername] = useState('');
  const [MessageUsername,setMessageUsername] = useState('')
  const [MessageEmail,setMessageEmail] = useState('')
  const [MessagePassword,setMessagePassword] = useState('')
  const [MessagePassword2,setMessagePassword2] = useState('')
  const handleSignup = async () => {
    const res = await Auth_service.signup(username,email,pass1,pass2, imageUrl);
    if(res.message === 'Email already exists' ){
      setMessageEmail(res.message)
    }
    if(res.message === 'Email must be greater than 12 characters' ){
      setMessageEmail(res.message)
    }
    if(res.message === 'Username must be greater than 4 characters' ){
      setMessageUsername(res.message)
      setMessageEmail('')
    }
    if(res.message === 'Password Dont match' ){
      setMessagePassword(res.message)
      setMessagePassword2('')
      setMessageEmail('')
      setMessageUsername('')
    }
    if(res.message === 'Password must be greater than 7 characters' ){
      setMessagePassword2(res.message)
      setMessageEmail('')
      setMessageUsername('')
    }
    console.log(res)
    console.log(res?.status);
    if (res.status  === true){
      navigate('/login');
    }
    else{
      navigate('/Signup');
    }
  }

  return (
    <MDBContainer fluid className='bg-image'>
      <Navbar className='bg-signup' variant='dark'>
          <MDBContainer>
            <Navbar.Brand href="/login">SPBE</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </Nav>
          </MDBContainer>
        </Navbar>
      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol col='10' md='6' className=''>
            <div className='camera-sgn'>
              <Camera imageUrl={imageUrl} setImageUrl={setImageUrl} boundingBox={boundingBox} />
            </div>
            
        </MDBCol>
        <MDBCol col='12'>
          {/* <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div> */}
          <MDBCard className='my-5 mx-auto bg-glass' style={{borderRadius:'2rem',maxWidth:'500px'}}>
          {/* <MDBCard className='mx-5 mb-5 my-5 p-5 shadow-5' style={{marginTop: '-50px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}> */}
            <MDBCardBody className='p-5 w-100 d-flex flex-column text-center'>

              <h2 className="fw-bold mb-5">Sign up</h2>
              <MDBBadge pill light color='warning'>{MessageEmail}</MDBBadge>
              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
              <MDBBadge pill light color='warning'>{MessageUsername}</MDBBadge>
              <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' onChange={(e)=>{setUsername(e.target.value)}}/>
              <MDBBadge pill light color='warning'>{MessagePassword2}</MDBBadge>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e)=>{setPass1(e.target.value)}}/>
              <MDBBadge pill light color='warning'>{MessagePassword}</MDBBadge>
              <MDBInput wrapperClass='mb-4' label='Re-enter Your Password' id='form1' type='password' onChange={(e)=>{setPass2(e.target.value)}}/>


              <MDBBtn className='w-100 mb-4' size='md'onClick={()=>{handleSignup()}}>sign up</MDBBtn>

              <div className="text-center">
                <div className='d-flex w-full'>
                <div>You have an account?</div>
                <div className='text-primary' style={{cursor:'pointer'}}  onClick={()=>{navigate('/login')}}>Login</div>
              </div>

              </div>

            </MDBCardBody>
          </MDBCard>

          
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
  );
}

export default Signup;