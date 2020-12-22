import React, { Component } from "react";
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VendasService from './VendasService'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


class FormListVendas extends Component {

  constructor(props) {
      super(props)
      this.state = {
          vendas: []
      };
  }

  componentDidMount() {
          VendasService.getVendas().then(vendas => {
              vendas.map(venda => {
                  const mapping = venda;
                  const arr = this.state.vendas.slice();
                  arr.push(mapping);
                  this.setState({ vendas: arr });
                  return this.state.vendas
              })
          })
  }


    render(){
        return (
          <TableContainer style={{marginTop: 0, marginLeft:250, width: 1090      }} >
          <Table >
            <TableHead>
            <TableRow>
            <StyledTableCell>cod</StyledTableCell>
            <StyledTableCell align="right">Nome</StyledTableCell>
            <StyledTableCell align="right">Telefone</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Valor</StyledTableCell>
          </TableRow>
            </TableHead>
            <TableBody>
              
    
       {this.state.vendas.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.fone}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
            </TableBody>
          </Table>
        </TableContainer>
        )
    }
}

export default FormListVendas;
