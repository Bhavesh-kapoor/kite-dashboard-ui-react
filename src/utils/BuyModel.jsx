import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { BuyModelContext } from "../context/BuyModelContext";
import { TextField } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BuyModel({ stock, open }) {
  const { handleCloseBuyModel,mode } = useContext(BuyModelContext);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(stock?.price);
  const [amount, setAmount] = useState(price * quantity);

  const handleQty = (value) => {
    setQuantity(value);
    setAmount(value * price);
  };
  const buyStock = async (e) => {
    e.preventDefault();
    const res = await axios
      .post(`${import.meta.env.VITE_API_URL}orders`, {
        name: stock?.name,
        quantity: quantity,
        price: amount,
        mode: mode,
      })
      .then((res) => {
        handleCloseBuyModel();
        toast.success("Order Place successfully!");
      });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseBuyModel}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h3 className="text-center text-bold text-uppercase">
              {mode} this <b> {stock?.name} </b>stock{" "}
            </h3>
            <hr />
            <form onSubmit={buyStock}>
              <div className="row">
                <div className="col-md-5">
                  <TextField
                    type="number"
                    id="outlined-basic"
                    value={price}
                    label="Price"
                    variant="outlined"
                  />
                </div>
                <div className="col-md-5">
                  <TextField
                    type="number"
                    id="outlined-basic"
                    label="Quantity"
                    value={quantity}
                    onChange={(e) => handleQty(e.target.value)}
                    variant="outlined"
                  />
                </div>
              </div>
              <hr />
              <div className="bg-light  mt-2">
                <div className="p-2">
                  <button
                    className="btn btn-dark"
                    onClick={handleCloseBuyModel}
                    style={{ width: "140px" }}
                  >
                    Close
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="submit"
                    className="btn btn-danger "
                    style={{ width: "140px" }}
                  >
                    {mode} at {amount}
                  </button>
                </div>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
