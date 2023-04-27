import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook ,FaTwitter,FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <div className=''>
            <Button variant="primary" className='p-2 mb-2'>  <FaGoogle className='' />  Log in with Google</Button>
            <Button variant="secondary"> <FaGithub className='' />  Log in with GitHub</Button>
            </div>

           <div className='mt-5'>
            <h2>Find Us On</h2>
            <ListGroup className='mt-3'>
      <ListGroup.Item>  <FaFacebook className='text-primary' /> FaceBook</ListGroup.Item>
      <ListGroup.Item>  <FaTwitter className='text-primary' /> Twitter</ListGroup.Item>
      <ListGroup.Item> <FaInstagram className='text-danger' /> Instagrammmm</ListGroup.Item>
    
  
    </ListGroup>
    <QZone></QZone>

           </div>

        </div>
    );
};

export default RightNav;