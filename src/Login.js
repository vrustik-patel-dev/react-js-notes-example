import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory  } from 'react-router-dom';

import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './Csss/Login.css';

const Login = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [etype, setEtype] = useState("Password");

  const history = useHistory();

  const auth = () => {
      if(uname==='admin'){
          if(password==='admin'){
            history.push('/notes');
          }
          setOpen(true);
          setEtype('Password');
          setPassword('');
      }else{
        setOpen(true);
        setEtype('Username');
        setUname('');
        setPassword('');
      }
  }

  return (
    <div className="fullBody">
    <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label={etype}
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Wrong <strong>{etype}....!!!!!</strong>
        </Alert>
      </Collapse>
    <div className="Login">
        <form>
            <div className="title">
                <h1 className="titleText">Login</h1>
            </div>

            <input 
                type='text' 
                className="inputuser"
                value={uname} 
                onChange={e => setUname(e.target.value)} 
                placeholder="Username" 
            />
            <input 
                type='password' 
                className="inputuser"
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="Password" 
            />
            <Button className="submitButton" onClick={()=>{auth()}}>
                Login
            </Button>

            <div className="title">
                <p className="fullText">Use Username: admin & Password: admin</p>
            </div>

        </form>
    </div>
    </div>
  );
}

export default Login;