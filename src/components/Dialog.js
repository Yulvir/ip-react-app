import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ContactCard from './ContactCard'
import TeamMembersCard from './TeamMembersCard'

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var CardToShow;
  if (props.textButton === "Team") {
      CardToShow = <TeamMembersCard/>;
      } else {
      CardToShow = <ContactCard />;
    }

  return (
    <a>

      {<Button onClick={handleClickOpen}>
        {props.textButton}
      </Button>}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogTitle id="alert-dialog-title">
            {props.title}
        </DialogTitle>

        <DialogContent>
            {CardToShow}
        </DialogContent>

        <DialogActions>

           <Button onClick={handleClose} color="primary">
             Close
           </Button>

        </DialogActions>

      </Dialog>
    </a>
  );
}
