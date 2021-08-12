import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, dose1, dose2, dose1_Date, dose2_Date) {
  return { name, dose1, dose2, dose1_Date, dose2_Date };
}

const rows = [
  createData('CovidShield', 'Completed', 'pending', '23-06-2021', '-NA-'),
  createData('BCG', 'Completed', '-NA-', '10-11-2000', '-NA-'),
  createData('Hepatitis B BirthDOse', 'Completed', '-NA-', '02-11-2000', '-NA-'),
  createData('OPV Birth Dose', 'Completed', '-NA-', '12-11-2000', '-NA-'),
  createData('OPV 1&2', 'Completed', 'Completed', '04-12-2000', '20-01-2001'),
  createData('Rota Virus', 'Completed', 'Completed', '02-12-2000', '30-01-2001'),
  createData('Measles  Dose', 'Completed', 'Completed', '04-05-2001', '02-02-2002'),
  createData('Vitamin A 1st Dose', 'Completed', '-NA-', '04-05-2001', '-NA-'),
  createData('DPT  Booster', 'Completed', 'Completed', '01-02-2002', '05-08-2005'),
  createData('TT', 'Completed', 'Completed', '16-08-2010', '20-06-2016'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Vaccination(NAME)</TableCell>
            <TableCell align="right">dose1</TableCell>
            <TableCell align="right">dose2&nbsp;</TableCell>
            <TableCell align="right">dose1_Date&nbsp;</TableCell>
            <TableCell align="right">dose2_Date&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dose1}</TableCell>
              <TableCell align="right">{row.dose2}</TableCell>
              <TableCell align="right">{row.dose1_Date}</TableCell>
              <TableCell align="right">{row.dose2_Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
