import { useState } from "react";
import { Home } from "./components/Home";
import "./styles.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { CommonModal } from "./common/modal/CommonModal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};
export default function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        {/* <div className="modal"> */}
        <Box sx={{ ...style, maxWidth: 400, width: "80%" }}>
          <CommonModal handleClose={handleClose} type={open} />
        </Box>
      </Modal>
      <div className="create">
        <button onClick={() => setOpen("category")} className="category">
          Create Category
        </button>
        <button onClick={() => setOpen("product")} className="product">
          Create Product
        </button>
      </div>
      <Home />
    </div>
  );
}
