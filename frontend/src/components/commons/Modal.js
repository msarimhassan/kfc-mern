import React from "react";
import { LocationSearching, ArrowDropDown } from "@mui/icons-material";
import { Modal, Typography, Box, Button } from "@mui/material";
import Map from "./Map";
import AutoComplete from "./AutoComplete";
import { useContext } from "react";
import locationContext from "../../context/locationContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "#1C1816",
  boxShadow: 24,
  p: 4,
  borderRadius: ".4rem",
  height: window.innerWidth < 768 ? "85vh" : "90vh",
};
export default function ModalFunc() {
  const context = useContext(locationContext);
  const { getLocation } = context;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // handle the location when clicked on select current location
  const handleClick = () => {
    getLocation();
  };

  return (
    <div>
      <div className="sel-loc" onClick={handleOpen}>
        Select Location <ArrowDropDown />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          sx: {
            backgroundColor: "#ffffff4a",
          },
        }}
      >
        <Box sx={style} id="modal">
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Select Location
          </Typography>

          <Map />

          <AutoComplete style={{ width: "100%" }} />
          <Box
            sx={{ display: "flex", marginTop: "1rem", gap: ".5rem" }}
            className="modal-search-loc"
            onClick={handleClick}
          >
            <LocationSearching style={{ color: "#e4002b" }} />
            <strong>Select My Current Location</strong>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "1rem",
              gap: ".5rem",
              justifyContent: "center",
            }}
            onClick={handleClick}
          >
            <Button
              sx={{
                width: "30vw",
                color: "white",
                borderColor: "white",
                "&.MuiButtonBase-root:hover": {
                  borderColor: "white",
                },
              }}
              size="large"
              variant="outlined"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                width: "30vw",
                color: "white",
                borderColor: "#e4002b",
                backgroundColor: "#e4002b",
                "&.MuiButtonBase-root:hover": {
                  borderColor: "#e4002b",
                  backgroundColor: "#e4002b",
                },
              }}
              size="large"
              variant="outlined"
              onClick={handleClose}
            >
              Select
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}