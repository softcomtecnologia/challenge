import React, { Component } from "react";
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ProdutoService from './ProdutoService'

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


class FormListProduto extends Component {

  constructor(props) {
      super(props)
      this.state = {
          produtos: []
      };
  }

  componentDidMount() {
          ProdutoService.getProdutos().then(produtos => {
              produtos.map(produto => {
                  const mapping = produto;
                  const arr = this.state.produtos.slice();
                  arr.push(mapping);
                  this.setState({ produtos: arr });
                  return this.state.produtos
              })
          })
  }


    render(){
        return (
          <TableContainer style={{marginTop: 0, marginLeft:250, width: 1100      }} >
          <Table >
            <TableHead>
            <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Descrição</StyledTableCell>
            <StyledTableCell align="right">Quantidade</StyledTableCell>
            <StyledTableCell align="right">Valor</StyledTableCell>
            <StyledTableCell align="right">cod</StyledTableCell>
          </TableRow>
            </TableHead>
            <TableBody>
       {this.state.produtos.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
            {  <StyledTableCell align="right">{row.id}</StyledTableCell>}
            </StyledTableRow>
          ))}
            </TableBody>
          </Table>
        </TableContainer>
        )
    }
}

export default FormListProduto;


