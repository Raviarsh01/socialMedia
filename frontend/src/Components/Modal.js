import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import axios from "axios";

const ModalPopup = ({ open }) => {
  return (
    <Modal open={open}>
      <div>Model</div>
    </Modal>
  );
};

export default ModalPopup;
