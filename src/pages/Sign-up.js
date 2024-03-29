import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
// import addUser from '../firebase/userModel_firestore ';
import { Grid, Box, Paper, Typography, TextField, Button} from "@material-ui/core";
import NavBar from "../components/navBar";
import {useRecoilState} from 'recoil';
import MuiPhoneNumber from "material-ui-phone-number";
import {Link} from 'react-router-dom';
import store from '../store';
import logo from '../assets/logo.png';


const useStyles = makeStyles({
    btn: { 
        backgroundColor: '#f36f27',
        color: '#fff',
        '&:hover': { 
            backgroundColor: '#f36f27',
            color: '#fff'
        }
    }
})

const Login = () => {
  const styles = useStyles ();
  
  const handleSubmit = (e)=>{
      e.preventDefault();

  } 
  const [phone, setPhone] = useRecoilState (store.phoneNo);
  const [email, setEmail] = useRecoilState (store.email);
  const [name, setName] = useRecoilState (store.name);
  const [display, ] = useState (true)

  const handleOnBlur = e => {

      setPhone(e.target.value);
      console.log(phone)
      

  };

  return (
   <div style={{overflow: 'hidden'}}> 
   <NavBar active={'login'} Color='transparent' scroll={false} / > 
    <Grid container>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
            sx={{
              my: 16,
              height: '100vh',
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
        >
            <img src={logo} width="100" alt="logo" />
            <Typography component="h1" variant="h5">
             Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                variant='outlined'
                id="name"
                label="Username"
                name="username"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                variant='outlined'
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                autoFocus
              />
            <MuiPhoneNumber
                margin="normal"
                required
                fullWidth
                id="phone"
                defaultCountry={"in"}
                label="Phone Number"
                name="Phone No."
                autoFocus
                variant='outlined'
                onChange={(e)=>setPhone(e)}
                value={phone}
                onBlur={handleOnBlur}
                 />
                <div id='recaptcha'></div>

              <Button
                fullWidth
                variant="contained"
                type='submit'
                sx={{ mt: 3, mb: 2 }}
                className={styles.btn}
                onClick={handleSubmit}
                style={{
                    display: display?'inline-flex':'none'
                }}                
              >
                  Submit
              </Button>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="OTP"
                  label="OTP"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  style={{
                      display: !display?'inline-flex':'none'
                  }}
                />
              <Typography variant='caption'>Already have an account?<Link to={{pathname: '/login'}}>Login In</Link></Typography>
            </Box>
        </Box>
      </Grid>
    </Grid>
    </div>
  );
};

export default Login;
