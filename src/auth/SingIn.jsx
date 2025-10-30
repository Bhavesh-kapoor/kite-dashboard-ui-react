import React, { useEffect, useState } from "react";
import "./Singin.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [loadingText, setLoadingText] = useState("Login");
  const [cookie, setCookie] = useCookies(["token"]);

  useEffect(() => {
    if (cookie?.token) {
      navigate("/");
    }
  }, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoadingText("Please wait.....");
    await axios
      .post(`${import.meta.env.VITE_API_URL}users/singin`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setCookie("token", res.data.data, {
          path: "/",
          maxAge: 3 * 24 * 60 * 60, // 3 days
          secure: false, // true only if HTTPS
          sameSite: "strict",
        });
        toast.success("Login successful!");
        navigate("/");

        setCookie;
      })
      .catch((err) => {
        setTimeout(() => {
          setLoadingText("Login");
        }, 200);

        if (err.response.data.status == 422) {
          let errors = err?.response?.data?.error;
          errors.forEach((item, index) => {
            console.log(item?.msg);
            toast.error(item?.msg);
          });
        }

        if (err.response.status == 409) {
          toast.error(err.response.data.message);
        }
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid login">
        <div className="bg-dark login-container mt-5 text-center shadow-sm p-5 mb-5 bg-white rounded ">
          <div>
            <img src="./zerodha-kite-logo-png_seeklogo-487028.png" />
          </div>
          <h1 className="fs-5  fw-normal mt-5">Login to Kite</h1>
          <form onSubmit={handleFormSubmit}>
            <Box
              sx={{ "& > :not(style)": { m: 1.2, width: "30ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                id="outlined-basic"
                label="Email"
                size="small"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-basic"
                label="Password "
                size="small"
                variant="outlined"
              />
            </Box>

            <button type="submit" className="btn  mt-2">
              {loadingText}
            </button>
          </form>
          <p className="text-muted mt-2">Forgot user ID or password?</p>
        </div>
      </div>
    </>
  );
};

export default SingIn;
