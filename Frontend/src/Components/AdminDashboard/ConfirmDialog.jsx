import {Dialog, DialogTitle, DialogContent,Button, DialogActions, DialogContentText} from "@mui/material";

function ConfirmDialog({ open, setOpen, title, message, onConfirm }) {
    
    const handleConfirm = () => {
        onConfirm();
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <Dialog open={open}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Mégse
                </Button>
                <Button onClick={handleConfirm} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;