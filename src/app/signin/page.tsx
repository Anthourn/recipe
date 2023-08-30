"use client";
import styles from "../styles/login.module.css";
import {
  Button,
  TextField,
  IconButton,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Link,
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
              <TextField
                className={styles.userField}
                label="Email"
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
              <TextField
                variant="standard"
                label="Password"
                type={passwordisVisible ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle Visibility"
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
                Sign in
              </Button>
            </form>

            <div className={styles.loginButtonPair}>
              <Link href="/forgotpassword"> Forgot password?</Link>

              <Link href="/signup"> Sign up</Link>
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
