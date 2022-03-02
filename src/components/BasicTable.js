import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(name, age, course, batch, change) {
  return { name, age, course, batch, change };
}

const rows = [
  createData(
    'Eashan Banerjee',
    23,
    'MERN',
    'October',
    <Link className='editlink' to='/addStudents'>
      Edit
    </Link>
  ),
  createData(
    'Vishal Singh',
    23,
    'MERN',
    'October',
    <Link className='editlink' to='/addStudents'>
      Edit
    </Link>
  ),
  createData(
    'Mohd Amaan',
    23,
    'MERN',
    'November',
    <Link className='editlink' to='/addStudents'>
      Edit
    </Link>
  ),
  createData(
    'Bharat Khorwal',
    23,
    'MERN',
    'September',
    <Link className='editlink' to='/addStudents'>
      Edit
    </Link>
  ),
  createData(
    'Rishabh Sharma',
    23,
    'MERN',
    'November',
    <Link className='editlink' to='/addStudents'>
      Edit
    </Link>
  ),
];

const BasicTable = () => {
  return (
    <TableContainer
      sx={{
        width: '50%',
        margin: '40px auto',
        backgroundColor: 'antiquewhite',
        boxShadow: '5px 5px 100px antiquewhite',
        borderRadius: '0.8rem',
      }}
      component={Paper}
      className='table'
    >
      <Table sx={{ width: '100%' }} aria-label='simple table'>
        <TableHead>
          <TableRow className='tablehead'>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Age</TableCell>
            <TableCell align='right'>Course</TableCell>
            <TableCell align='right'>Batch</TableCell>
            <TableCell align='right'>Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.age}</TableCell>
              <TableCell align='right'>{row.course}</TableCell>
              <TableCell align='right'>{row.batch}</TableCell>
              <TableCell align='right'>{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
