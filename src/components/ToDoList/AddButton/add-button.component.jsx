import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newItem } from '../../../redux/actions/itemActions';
import AddEditModal from '../AddEditModal/add-edit-modal.component';

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AddButton = ({ newItem }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={handleOpen}>
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <AddEditModal
        open={open}
        handleClose={handleClose}
        submit={newItem}
        add={true}
      />
    </>
  );
};

const mapDispatchToProps = {
  newItem
};

export default connect(null, mapDispatchToProps)(AddButton);
