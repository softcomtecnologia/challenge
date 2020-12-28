import React, { Component } from "react";
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VendasService from './VendasService'
import { DeleteForever, ListAlt } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

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
  deleteVenda = async (e, id) => {
    const res = await VendasService.deleteVenda(id);

   if (res) {
       const resp = await VendasService.getVendas();
       this.setState({vendas: resp});
     } 
   
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
            <StyledTableCell align="right">Valor</StyledTableCell>
            <StyledTableCell align="right">Abrir</StyledTableCell>
            <StyledTableCell align="right">Excluir</StyledTableCell>
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
              <StyledTableCell align="right">{row.valor}</StyledTableCell>
              <StyledTableCell align="right">
              <IconButton  color="primary" aria-label="abrir venda">
                    <ListAlt/>
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">
              <IconButton onClick={(e) => this.deleteVenda(e, row.id)}  color="primary" aria-label="abrir venda">
                    <DeleteForever/>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
            </TableBody>
          </Table>
        </TableContainer>
        )
    }
}

export default FormListVendas;
