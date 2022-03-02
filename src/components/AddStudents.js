import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AddStudents extends Component {
  state = {
    Name: '',
  };

  HandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form action=''>
          <label htmlFor=''>Name</label>
          <input type='text' name='name' id='name' />
          <br />
          <label htmlFor=''>Age </label>
          <input type='number' name='age' id='age' />
          <br />
          <label htmlFor=''>Course</label>
          <input type='text' name='course' id='course' />
          <br />
          <label htmlFor=''>Batch</label>
          <input type='text' name='batch' id='batch' />
          <br />
          <Link to='/students'>
            <button>Exit</button>
          </Link>
          <Link to='/students'>
            <button>Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddStudents;
