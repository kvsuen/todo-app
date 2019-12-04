import React from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import {
  toggleComplete,
  deleteItem
} from '../../../../redux/actions/itemActions';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles(theme => ({
  expansionPanel: {
    margin: '10px'
  },
  heading: {
    flex: 1,
    margin: 'auto 15px',
    textAlign: 'left'
  },
  dueDate: {
    margin: 'auto 15px'
  },
  expansionPanelSummary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px'
  }
}));

const Item = ({
  toggleComplete,
  deleteItem,
  id,
  title,
  description,
  dueDate,
  isCompleted,
  handleOpen
}) => {
  const classes = useStyles();

  return (
    <div className={classes.expansionPanel}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{ content: classes.expansionPanelSummary }}
        >
          {isCompleted ? (
            <CheckBoxIcon
              onClick={event => {
                event.stopPropagation();
                toggleComplete(id);
              }}
            />
          ) : (
            <CheckBoxOutlineBlankIcon
              onClick={event => {
                event.stopPropagation();
                toggleComplete(id);
              }}
            />
          )}

          <Typography className={classes.heading} variant="h6">
            {title}
          </Typography>
          <Typography className={classes.dueDate}>
            Complete by: {format(dueDate, 'yyyy-MM-dd')}
          </Typography>
          <div>
            <EditIcon
              onClick={event => {
                event.stopPropagation();
                handleOpen({ id, title, description, dueDate, isCompleted });
              }}
            />
            <DeleteIcon
              onClick={event => {
                event.stopPropagation();
                deleteItem(id);
              }}
            />
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

const mapDispatchToProps = {
  toggleComplete,
  deleteItem
};

export default connect(null, mapDispatchToProps)(Item);
