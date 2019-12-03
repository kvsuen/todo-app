import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newItem } from '../../../redux/actions/itemActions';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    },
    display: 'flex',
    flexDirection: 'column'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ouline: 0
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    outline: '0',
    borderRadius: '0',
    boxShadow:
      '4px 4px 2px -1px rgba(0,0,0,0.2), 3px 3px 2px 0px rgba(0,0,0,0.14), -3px 3px 5px 0px rgba(0,0,0,0.12)'
  },
  createButton: {
    marginTop: '15px'
  }
}));

const AddButton = ({ newItem }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    title: '',
    description: '',
    dueDate: new Date(),
    isCompleted: false
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
      <Tooltip title="Add" aria-label="add" onClick={handleOpen}>
        <Fab color="primary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
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
            <Typography variant="h6" gutterBottom>
              New To-Do Item
            </Typography>
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
                rowsMax="4"
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
              <Button
                className={classes.createButton}
                variant="contained"
                color="primary"
                type="submit"
              >
                Create!
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
};

export default connect(null, mapDispatchToProps)(AddButton);
