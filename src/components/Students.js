import React from 'react';
import { Link } from 'react-router-dom';
import BasicTable from './BasicTable';

const Students = () => {
  return (
    <div>
      <div className='addStudentLink'>
        <Link className='studentButton' href='#' to='/addStudents'>
          Add Students
        </Link>
      </div>
      <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'white' }}>
        Student Details
      </h1>
      <BasicTable />
    </div>
  );
};

export default Students;
