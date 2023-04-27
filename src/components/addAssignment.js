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
      // this.state = {selected: 0, assignments: []};
      this.state = {assignmentName: "", dueDate: "", courseName: 0}; 
  };
    
    assignmentHandler = (event) => {
      this.setState({[event.target.assignmentName]: event.target.value});
    };

    assignmentHandler = (event) => {
      this.setState({[event.target.dueDate]: event.target.value}); 
    };

    assignmentHandler = (event) => {
      this.setState({[event.target.course_id]: event.target.value}); 
    };


  // CHANGE URL AND INFO IM SENDING TO MATH BACKEND 
  addAssignment = (event) => {
    event.preventDefault(); 
    const token = Cookies.get('XSRF-TOKEN');
    fetch(`${SERVER_URL}/assignment?name=${this.state.assignmentName}&dueDate=${this.state.dueDate}&courseld=${this.state.course_id}`,
      {  
        method: 'POST', 
        headers: 
        { 
          'X-XSRF-TOKEN': token,
          'Content-Type': 'application/json'
        },
      } )

    .then(res => {
        if (res.ok) {
          toast.success("Assignment successfully added", {
              position: toast.POSITION.BOTTOM_LEFT
          });
          this.fetchAssignments();
        } else {
          toast.error("Error new assignment failed.", {
              position: toast.POSITION.BOTTOM_LEFT
          });
          console.error('Post http status =' + res.status);
        }})
    .catch(err => {
      toast.error("Error new assignment failed.", {
            position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err);
    })
  } 

  render() {
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

