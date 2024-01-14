import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";

import {useHistory} from "react-router-dom"
// import { Logout } from "@mui/icons-material";

const Header = ({ children, hasHiddenAuthButtons }) => {

  const history=useHistory()
  const  Login =()=>{
    history.push('/login')
  }
  const Logout = ()=>{
    localStorage.clear();
    history.push("/")
  }
  
  const Register = ()=>{
    history.push("/register")
  }
  const BackToExplore = ()=>{
    history.push("/")
  }
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        {hasHiddenAuthButtons?( <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={BackToExplore}
        >
          Back to explore
        </Button>):
        localStorage.getItem("username")?(
          <Stack direction="row" spacing={2}>
              <div style={{display:"flex",alignItems:"center"}}>
                <img src= "avatar.png" alt = {localStorage.getItem("username")}/>
              <span>{localStorage.getItem("username")}</span>
              </div>
              <Button className="title" onClick={()=>Logout()}>
                  LOGOUT
              </Button>
             
          </Stack>
        ):(
          <Stack direction="row" spacing={1}>
            <Button className="title" onClick={Login}>Login</Button>
            <Button className="button color" onClick={Register}>Register</Button>
          </Stack>
        )
        }
       
      </Box>
    );
};

export default Header;
