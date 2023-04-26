import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import {DataGrid} from '@mui/x-data-grid';
import {SERVER_URL} from '../constants.js'
import Assignment from './Assignment.js';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField
 } from '@mui/material';
// NOTE:  for OAuth security, http request must have
//   credentials: 'include' 
//

class addAssignment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {selected: 0, assignments: []};
    };
    
   onRadioClick = (event) => {
    console.log("Assignment.onRadioClick " + event.target.value);
    this.setState({selected: event.target.value});
  }
  
  render() {
    const columns = [
        { field: 'firstName', headerName: 'Assignment Name', width: 200 },
        { field: 'lastName', headerName: 'Due Date', width: 200 },
        { field: 'email', headerName: 'Course', width: 250 },
        ];
      
    const assignmentSelected = this.state.assignments[this.state.selected];
      return (
        <div>
            <DialogTitle>Add Assignment</DialogTitle>
            <DialogContent  style={{paddingTop: 20}} >
                <TextField autoFocus fullWidth label="Assignment Name" name="assignment_name" onChange={this.handleChange}  /> 
            </DialogContent>
            <DialogContent  style={{paddingTop: 20}} >
                <TextField autoFocus fullWidth label="Due Date" name="due_date" onChange={this.handleChange}  /> 
            </DialogContent>
            <DialogContent  style={{paddingTop: 20}} >
                <TextField autoFocus fullWidth label="Course Name" name="course_name" onChange={this.handleChange}  /> 
            </DialogContent>

             <DialogActions>
                <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
            </DialogActions>
        </div>
      )
  }
}  

export default addAssignment;