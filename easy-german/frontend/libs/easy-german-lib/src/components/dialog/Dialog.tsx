import { Dialog as MuiDialog, DialogTitle } from '@mui/material';

export interface DialogProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

export default function Dialog(props: DialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(false);
  };

  return (
    <MuiDialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
    </MuiDialog>
  );
}
