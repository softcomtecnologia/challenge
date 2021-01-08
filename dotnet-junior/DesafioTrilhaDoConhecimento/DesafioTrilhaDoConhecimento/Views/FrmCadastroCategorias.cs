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
    public partial class FrmCadastroCategorias : Form
    {
        public FrmCadastroCategorias()
        {
            InitializeComponent();
            popularDataGrid();
        }

        private void popularDataGrid()
        {
            dtgCategorias.DataSource = null;
            dtgCategorias.Columns.Clear();

            var controllerCategorias = new Categoria();

            var queryCategorias = from c in controllerCategorias.Lista()
                                  select new
                                  {
                                      Código = c.Id,
                                      Descrição = c.Nome
                                  };

            dtgCategorias.DataSource = queryCategorias.ToList();

            dtgCategorias.Columns[0].Width = 60;
            dtgCategorias.Columns[1].AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;

            #region Botão Editar
            var btnEditar = new DataGridViewButtonColumn();

            dtgCategorias.Columns.Add(btnEditar);
            btnEditar.HeaderText = "";
            btnEditar.Text = "Editar";
            btnEditar.Name = "btnEditar";
            btnEditar.UseColumnTextForButtonValue = true;
            btnEditar.Width = 80;
            #endregion

            #region Botão Excluir
            var btnExcluir = new DataGridViewButtonColumn();

            dtgCategorias.Columns.Add(btnExcluir);
            btnExcluir.HeaderText = "";
            btnExcluir.Text = "Excluir";
            btnExcluir.Name = "btnExcluir";
            btnExcluir.UseColumnTextForButtonValue = true;
            btnExcluir.Width = 80;
            #endregion
        }

        private void dtgCategorias_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            var controllerCategoria = new Categoria();

            switch (dtgCategorias.Columns[e.ColumnIndex].Name)
            {
                case "btnEditar":

                    var id = (int)dtgCategorias.CurrentRow.Cells["Código"].Value;

                    var categoria = controllerCategoria.BuscarPorId(id);

                    if(categoria.PreCadastrada == true)
                    {
                        MessageBox.Show($"Categorias Pré-Cadastradas não podem ser editadas", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                        return;
                    }

                    cabecalhoPadrao.LblId = categoria.Id;
                    txtDescricao.Text = categoria.Nome;

                    break;

                case "btnExcluir":

                    var returnMsg = MessageBox.Show($"Deseja Excluir!", "Pergunta", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                    var idExcluir = (int)dtgCategorias.CurrentRow.Cells["Código"].Value;
                    var categoriaExcluir = controllerCategoria.BuscarPorId(idExcluir);

                    if (returnMsg == DialogResult.Yes)
                    {
                        try
                        {
                            controllerCategoria.Excluir(categoriaExcluir);

                            popularDataGrid();
                        }
                        catch (Exception ex)
                        {
                            MessageBox.Show($"Erro ao salvar:{ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                    }

                    break;

                default:
                    break;
            }
        }

        private void cabecalhoPadrao_OnButtonNewClick(object sender, EventArgs e)
        {
            txtDescricao.Text = "";
            cabecalhoPadrao.LblId = 0;

            txtDescricao.Focus();
        }

        private void cabecalhoPadrao_OnButtonSaveClick(object sender, EventArgs e)
        {
            var categoria = new DataBase.Categoria();

            categoria.Id = cabecalhoPadrao.LblId;
            categoria.Nome = txtDescricao.Text;

            var controllerCategoria = new Categoria();
            try
            {
                controllerCategoria.Salvar(categoria);

                popularDataGrid();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro ao salvar:{ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }
    }
}
