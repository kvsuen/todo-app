import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newItem } from '../../../redux/actions/itemActions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const AddButton = ({ newItem }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    title: '',
    description: '',
    dueDate: new Date()
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleDateChange = date => {
    setValues({ ...values, dueDate: date });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await newItem(values);
    setValues({ title: '', description: '', dueDate: new Date() });
    handleClose();
  };

  return (
    <>
      <AddIcon onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form
              className={classes.root}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                id="title"
                label="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
              <TextField
                id="description"
                label="Description"
                name="description"
                multiline
                rowsMax="2"
                value={values.description}
                onChange={handleChange}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="dueDate"
                  label="Due Date"
                  name="dueDate"
                  value={values.dueDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
              </MuiPickersUtilsProvider>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

const mapDispatchToProps = {
  newItem
}


export default connect(null, mapDispatchToProps)(AddButton);
