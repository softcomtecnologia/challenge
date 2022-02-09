using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace DesafioTrilhaDoConhecimento.Views
{
    public partial class FrmPesquisar : Form
    {
        public enum TipoPesquisa
        {
            Pessoa
        }

        private TipoPesquisa tipoPesquisaLocal;

        private List<DataBase.Pessoa> listaDePessoasFiltradas;

        public FrmPesquisar(TipoPesquisa tipoPesquisa = TipoPesquisa.Pessoa)
        {
            InitializeComponent();

            tipoPesquisaLocal = tipoPesquisa;
            popularDataGrid();
            popularComboCategorias();
        }

        #region Eventos dos Controles do Formulário
        private void txtFiltroPesquisa_TextChanged(object sender, EventArgs e)
        {
            popularDataGrid();
        }

        private void dtGridLista_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            switch (tipoPesquisaLocal)
            {
                case TipoPesquisa.Pessoa:
                    var controllerPessoa = new Pessoa();

                    switch (dtGridLista.Columns[e.ColumnIndex].Name)
                    {
                        case "btnEditar":

                            var id = (int)dtGridLista.CurrentRow.Cells["Código"].Value;

                            var pessoa = controllerPessoa.BuscarPorId(id);

                                    var frmPessoa = new frmCadastroPessoas(pessoa);
                                    frmPessoa.Show();

                            break;

                        case "btnExcluir":

                            var returnMsg = MessageBox.Show($"Deseja Excluir!", "Pergunta", MessageBoxButtons.YesNo, MessageBoxIcon.Question);

                            if (returnMsg == DialogResult.Yes)
                            {
                                var idPessoa = (int)dtGridLista.CurrentRow.Cells["Código"].Value;
                                var controllerFilho = new Filho();

                                controllerFilho.ExcluirPorIdDoPai(idPessoa);

                                controllerPessoa.Excluir(idPessoa);

                                popularDataGrid();
                            }

                            break;

                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        }

        private void btnImprimir_Click(object sender, EventArgs e)
        {
            var frmReportPessoas = new Reports.RptFormPessoas(listaDePessoasFiltradas);
            frmReportPessoas.Show();
        }
        #endregion

        #region Métodos do Formulário
        private void popularDataGrid()
        {

            try
            {
                switch (tipoPesquisaLocal)
                {
                    case TipoPesquisa.Pessoa:

                        var controllerPessoa = new Pessoa();

                        var idCategoria = 0;

                        if(cboCategoria.SelectedItem != null)
                            idCategoria = ((DataBase.Categoria)cboCategoria.SelectedItem).Id;

                        IEnumerable<DataBase.Pessoa> queryFiltros;

                        if (idCategoria == 0)
                        {
                            queryFiltros = from p in controllerPessoa.Lista()
                                           where (p.Nome.Contains(txtFiltroPesquisa.Text) ||
                                           p.Sobrenome.Contains(txtFiltroPesquisa.Text) ||
                                           p.Cpf.Contains(txtFiltroPesquisa.Text)) 
                                           select p;

                        }
                        else
                        {
                            queryFiltros = from p in controllerPessoa.Lista()
                                           where (p.Nome.Contains(txtFiltroPesquisa.Text) ||
                                           p.Sobrenome.Contains(txtFiltroPesquisa.Text) ||
                                           p.Cpf.Contains(txtFiltroPesquisa.Text)) &&
                                           p.IdCategoria == idCategoria
                                           select p;
                        }

                        listaDePessoasFiltradas = queryFiltros.ToList();

                        var queryColunas = from p in queryFiltros
                                    select new
                                    {
                                        Código = p.Id,
                                        Nome = p.Nome,
                                        Sobrenome = p.Sobrenome,
                                        Cpf = p.Cpf
                                     };

                        dtGridLista.DataSource = null;
                        dtGridLista.Columns.Clear();

                        dtGridLista.DataSource = queryColunas.ToList();

                        dtGridLista.Columns[0].Width = 60;
                        dtGridLista.Columns[1].AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
                        dtGridLista.Columns[2].Width = 200;
                        dtGridLista.Columns[3].Width = 100;

                        #region Botão Editar
                        var btnEditar = new DataGridViewButtonColumn();

                        dtGridLista.Columns.Add(btnEditar);
                        btnEditar.HeaderText = "";
                        btnEditar.Text = "Editar";
                        btnEditar.Name = "btnEditar";
                        btnEditar.UseColumnTextForButtonValue = true;
                        btnEditar.Width = 80;
                        #endregion

                        #region Botão Excluir
                        var btnExcluir = new DataGridViewButtonColumn();

                        dtGridLista.Columns.Add(btnExcluir);
                        btnExcluir.HeaderText = "";
                        btnExcluir.Text = "Excluir";
                        btnExcluir.Name = "btnExcluir";
                        btnExcluir.UseColumnTextForButtonValue = true;
                        btnExcluir.Width = 80;
                        #endregion

                        break;
                    default:
                        break;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro ao popular Lista:/n{ex.Message}", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void popularComboCategorias()
        {
            try
            {
                cboCategoria.Items.Clear();

                var categorias = new Categoria();

                foreach (var categoria in categorias.Lista())
                {
                    cboCategoria.Items.Add(categoria);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro ao popular a Lista de Categorias:{ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
        #endregion

        private void cboCategoria_Leave(object sender, EventArgs e)
        {
            popularDataGrid();
        }

        private void cboCategoria_SelectedIndexChanged(object sender, EventArgs e)
        {
            popularDataGrid();
        }
    }
}
