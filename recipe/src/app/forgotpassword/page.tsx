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

const forgotPassword = () => {
  const [passwordisVisible, setPasswordVisibility] = useState(false);
  function toggleVisibility() {
    setPasswordVisibility(!passwordisVisible);
  }
  return (
    <>
      <div className={styles.pageBackground}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Reset my password</h1>
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

              <Button
                className={styles.loginButton}
                variant="contained"
                size="medium"
              >
                Send email
              </Button>
            </form>

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
export default forgotPassword;
