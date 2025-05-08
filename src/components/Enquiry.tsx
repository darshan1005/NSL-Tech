import { useState } from 'react';
import { Button } from '@mui/material';
import Form from './Form';

const Enquiry = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Sticky Enquiry Button */}
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        sx={{
          position: 'fixed',
          top: '60%',
          right: 15,
          zIndex: 1000,
          width: 'max-content',
          height: 40,
          transform: 'rotate(-90deg)',
          transformOrigin: 'right center',
          borderRadius: '8px 8px 0 0',
        }}
      >
        Enquiry us
      </Button>

      {open && <Form open={open} handleClose={handleClose} />}
    </>
  );
};

export default Enquiry;
