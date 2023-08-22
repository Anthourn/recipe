"use client";
import styles from "../styles/login.module.css";
import { Button, TextField, IconButton } from "@mui/material";
import { InputAdornment, Input } from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const login = () => {
  const [passwordisVisible, setPasswordVisibility] = useState(false);
  function toggleVisibility() {
    setPasswordVisibility(!passwordisVisible);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form>
            <label>username</label>
            <TextField
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            ></TextField>
            <label>password</label>
            <TextField
              type={passwordisVisible ? "text" : "password"}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={() => {
                        toggleVisibility();
                      }}
                    >
                      {passwordisVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <div className={styles.loginButtonPair}>
              <Button
                className={styles.loginButton}
                variant="text"
                size="medium"
              >
                forgot Password?
              </Button>
              <Button
                className={styles.loginButton}
                variant="text"
                size="medium"
              >
                log in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default login;
