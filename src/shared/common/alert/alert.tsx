import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from 'shared/form/button';

const useStyles = makeStyles(() => createStyles({
  dialogContent: {
    width: '400px',
  },
}));

interface AlertI {
  message?: string;
  onSuccess: (success: voidFunction) => void;
  onCancel: (success: voidFunction) => void;
  open?: boolean;
  successBtnText?: string;
  cancelBtnText?: string;
  title?: string;
}

const AlertComponent: React.FunctionComponent<AlertI> = (props) => {
  const classes = useStyles();
  const { message, open, onSuccess, onCancel, successBtnText, cancelBtnText, title } = props;

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          label={cancelBtnText || 'Cancel'}
          className="default"
          onClick={onCancel}
        />
        <Button
          variant="contained"
          label={successBtnText || 'Ok'}
          className="primary"
          onClick={onSuccess}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AlertComponent;
