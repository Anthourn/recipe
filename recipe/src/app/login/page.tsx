"use client";
import styles from "../styles/login.module.css";
import {
  Button,
  TextField,
  IconButton,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { InputAdornment, Input } from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const Login = () => {
  const [passwordisVisible, setPasswordVisibility] = useState(false);
  function toggleVisibility() {
    setPasswordVisibility(!passwordisVisible);
  }
  return (
    <>
      <div className={styles.pageBackground}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Sign in</h1>
          </div>
          <div className={styles.formContainer}>
            <form>
              <label>Email</label>
              <TextField
                className={styles.userField}
                variant="standard"
                type="text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <label>Password</label>
              <TextField
                variant="standard"
                type={passwordisVisible ? "text" : "password"}
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
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Button
                className={styles.loginButton}
                variant="contained"
                size="medium"
              >
                log in
              </Button>
            </form>

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
                sign up
              </Button>
            </div>
            <p className={styles.photoCredit}>
              Photo by{" "}
              <a href="https://unsplash.com/@moniqa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Monika Grabkowska
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/TAj4X5-eRqE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
