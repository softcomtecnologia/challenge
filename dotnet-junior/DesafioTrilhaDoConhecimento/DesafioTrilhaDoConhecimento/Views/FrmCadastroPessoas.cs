using DataBase;
using DesafioTrilhaDoConhecimento.Controllers;
using DesafioTrilhaDoConhecimento.Properties;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace DesafioTrilhaDoConhecimento
{
    public partial class frmCadastroPessoas : Form
    {
        DataBase.Pessoa pessoaLocal;

        public frmCadastroPessoas(DataBase.Pessoa pessoa = null)
        {
            InitializeComponent();

            if (pessoa != null)
            {
                pessoaLocal = pessoa;
                popularTela();
                popularDataGridView();

            }

            popularComboCategorias();
            setarPermissoes();
        }

        private void popularTela()
        {
            var pessoa = pessoaLocal;

            lblId.Text = pessoa.Id.ToString();
            txtNome.Text = pessoa.Nome;
            txtSobrenome.Text = pessoa.Sobrenome;
            txtEmail.Text = pessoa.Email;
            txtSenha.Text = pessoa.Senha;
            txtPais.Text = pessoa.Pais;
            cboUf.Text = pessoa.Estado;
            txtCidade.Text = pessoa.Cidade;
            txtBairro.Text = pessoa.Bairro;
            txtEndereco.Text = pessoa.Logradouro;
            txtNumero.Text = pessoa.Numero;
            txtCep.Text = pessoa.Cep;
            txtComplemento.Text = pessoa.Complemento;
            cboSexo.Text = pessoa.Sexo;
            txtSalarioBase.Text = pessoa.SalarioBase.ToString();
            txtCpf.Text = pessoa.Cpf;

            var controllerCategoria = new Categoria();
            var queryCat = (from cat in controllerCategoria.Lista()
                            where cat.Id == pessoa.IdCategoria
                            select cat).FirstOrDefault();

            cboCategoria.SelectedItem = pessoa.IdCategoria;
            cboCategoria.Text = queryCat.Nome;
            cboCategoria.Refresh();

            imgFoto.Image = pessoa.Foto;
        }

        #region Movendo Formulário
        private bool _dragging = false;
        private Point _offset;
        private Point _start_point = new Point(0, 0);

        private void tblLayoutPrincipal_MouseDown(object sender, MouseEventArgs e)
        {
            _dragging = true; // _dragging is your variable flag
            _start_point = new Point(e.X, e.Y);
        }

        private void tblLayoutPrincipal_MouseUp(object sender, MouseEventArgs e)
        {
            _dragging = false;
        }

        private void tblLayoutPrincipal_MouseMove(object sender, MouseEventArgs e)
        {
            if (_dragging)
            {
                Point p = PointToScreen(e.Location);
                Location = new Point(p.X - this._start_point.X, p.Y - this._start_point.Y);
            }
        }
        #endregion

        #region Manipulação da Foto
        private void imgFoto_DragEnter(object sender, DragEventArgs e)
        {
            if (e.Data.GetDataPresent(DataFormats.Bitmap))
                e.Effect = DragDropEffects.Move;
        }

        private void imgFoto_DragDrop(object sender, DragEventArgs e)
        {
            var bmp = (Bitmap)e.Data.GetData(DataFormats.Bitmap);
            imgFoto.Image = bmp;
        }

        private void btnAdicionarFoto_Click(object sender, EventArgs e)
        {
            var dialog = new OpenFileDialog();


            dialog.InitialDirectory = @"C:\";
            dialog.RestoreDirectory = true;
            dialog.Title = "Localizar Foto";
            dialog.DefaultExt = "jpg";
            dialog.Filter = "image files (*.jpg)|*.jpg|image files (*.png)|*.png";
            dialog.FilterIndex = 2;
            dialog.CheckFileExists = true;
            dialog.CheckPathExists = true;
            dialog.Multiselect = false;

            var dialogResult = dialog.ShowDialog();

            if (dialogResult == DialogResult.OK)
            {

                var img = Image.FromFile(dialog.FileName);

                if(img.Size.Width > 800 || img.Size.Height > 800)
                {
                    MessageBox.Show("Tamanho da imagem deve ter resolução menor ou igual a 800x800!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                    return;
                }

                imgFoto.SizeMode = PictureBoxSizeMode.Zoom;

                imgFoto.Height = 100;
                imgFoto.Width = 100;

                imgFoto.Image = img;

            }

        }
        #endregion

        #region Ação dos Botões
        private void btnFechar_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            try
            {
                DataBase.Pessoa pessoa = new DataBase.Pessoa();

                pessoa.Id = Convert.ToInt32(lblId.Text);
                pessoa.Nome = txtNome.Text;
                pessoa.Sobrenome = txtSobrenome.Text;
                pessoa.Email = txtEmail.Text;
                pessoa.Senha = txtSenha.Text;
                pessoa.Foto = (Bitmap)imgFoto.Image;
                pessoa.Pais = txtPais.Text;
                pessoa.Estado = cboUf.Text;
                pessoa.Cidade = txtCidade.Text;
                pessoa.Bairro = txtBairro.Text;
                pessoa.Logradouro = txtEndereco.Text;
                pessoa.Numero = txtNumero.Text;
                pessoa.Cep = txtCep.Text;
                pessoa.Complemento = txtComplemento.Text;
                pessoa.Sexo = cboSexo.Text;
                pessoa.SalarioBase = Convert.ToDouble(txtSalarioBase.Text);
                pessoa.Cpf = txtCpf.Text;

                var controllerCategoria = new Categoria();

                if (cboCategoria.Text != null)
                    pessoa.IdCategoria = (from c in controllerCategoria.Lista()
                                          where c.Nome.Equals(cboCategoria.Text)
                                          select c).ToList().FirstOrDefault().Id;

                var controllerPessoa = new Pessoa();
                controllerPessoa.Salvar(pessoa);

                MessageBox.Show($"Salvo com Sucesso!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);

            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro ao salvar:{ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void btnAtualizar_Click(object sender, EventArgs e)
        {
            popularDataGridView();
        }

        private void btnNovo_Click(object sender, EventArgs e)
        {
            lblId.Text = "0";
            txtNome.Text = null;
            txtSobrenome.Text = null;
            txtEmail.Text = null;
            txtSenha.Text = null;
            txtPais.Text = null;
            cboUf.Text = null;
            txtCidade.Text = null;
            txtBairro.Text = null;
            txtEndereco.Text = null;
            txtNumero.Text = null;
            txtCep.Text = null;
            txtComplemento.Text = null;
            cboCategoria.Text = null;
            cboSexo.Text = null;
            txtSalarioBase.Text = "0.00";
            txtCpf.Text = null;
            imgFoto.Image = Resources.SoftnickBracosCruzadosParteDeCima;

            popularDataGridView();
        }

        private void btnCategorias_Click(object sender, EventArgs e)
        {
            var frmCategorias = new Views.FrmCadastroCategorias();
            frmCategorias.ShowDialog();

            popularComboCategorias();
        }
        #endregion

        #region Populando Controles
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

        private void popularDataGridView()
        {
            dataGridView.DataSource = null;
            dataGridView.Columns.Clear();

            try
            {
                var controllerFilho = new Filho();

                var query = from f in controllerFilho.Lista()
                            where f.IdPessoas.Equals(Convert.ToInt32(lblId.Text))
                            orderby f.Id ascending
                            select new
                            {
                                Código = f.Id,
                                Nome = f.Nome
                            };

                dataGridView.DataSource = query.ToList();

                #region Botão Editar
                var btnEditar = new DataGridViewButtonColumn();

                dataGridView.Columns.Add(btnEditar);
                btnEditar.HeaderText = "";
                btnEditar.Text = "Editar";
                btnEditar.Name = "btnEditar";
                btnEditar.UseColumnTextForButtonValue = true;
                btnEditar.Width = 80;
                #endregion

                #region Botão Excluir
                var btnExcluir = new DataGridViewButtonColumn();

                dataGridView.Columns.Add(btnExcluir);
                btnExcluir.HeaderText = "";
                btnExcluir.Text = "Excluir";
                btnExcluir.Name = "btnExcluir";
                btnExcluir.UseColumnTextForButtonValue = true;
                btnExcluir.Width = 80;
                #endregion


            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro ao popular a Lista de Filhos:{ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
        #endregion

        private void dataGridView_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            var controllerFilho = new Filho();

            switch (dataGridView.Columns[e.ColumnIndex].Name)
            {
                case "btnEditar":
                    
                    var id = (int)dataGridView.CurrentRow.Cells["Código"].Value;

                    var filho = controllerFilho.BuscarPorId(id);

                    lblFilhoRegistro.Text = filho.Id.ToString();
                    txtFilhoNome.Text = filho.Nome;
                    txtFilhoIdade.Text = filho.Idade.ToString();
                    cboFilhoSexo.Text = filho.Sexo;

                    break;

                case "btnExcluir":

                    var returnMsg = MessageBox.Show($"Deseja Excluir!", "Pergunta", MessageBoxButtons.YesNo, MessageBoxIcon.Question);

                    if (returnMsg == DialogResult.Yes)
                    {
                        controllerFilho.Excluir((int)dataGridView.CurrentRow.Cells["Código"].Value);

                        popularDataGridView();
                    }

                    break;

                default:
                    break;
            }
        }

        private void setarPermissoes()
        {
            btnCategorias.Visible = Controllers.UsuarioSessao.Usuario.PermitirAbrirCategorias;
        }

        private void btnFilhoSalvar_Click(object sender, EventArgs e)
        {
            try { 
                var filho = new DataBase.Filho();

                filho.Id = Convert.ToInt32(lblFilhoRegistro.Text);
                filho.Nome = txtFilhoNome.Text;
                filho.Idade = Convert.ToInt32(txtFilhoIdade.Text);
                filho.Sexo = cboFilhoSexo.Text;
                filho.IdPessoas = Convert.ToInt32(lblId.Text);

                var controllerFilho = new Filho();
                controllerFilho.Salvar(filho);

                popularDataGridView();

                MessageBox.Show($"Salvo com Sucesso!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);

            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro ao salvar:{ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }

        private void txtSalarioBase_TextChanged(object sender, EventArgs e)
        {

            pessoaLocal.SalarioBase = Convert.ToDouble(txtSalarioBase.Text);

            if(cboCategoria.SelectedItem != null)
                pessoaLocal.IdCategoria = ((DataBase.Categoria)cboCategoria.SelectedItem).Id;

            lblSalarioBrutoValor.Text = Salario.GetSalario(pessoaLocal, 5).ToString("C",CultureInfo.CurrentCulture);
        }

        private void btnFilhoNovo_Click(object sender, EventArgs e)
        {
            lblFilhoRegistro.Text = "0";
            txtFilhoIdade.Text = null;
            txtFilhoNome.Text = null;
            cboFilhoSexo.Text = null;

            txtFilhoNome.Focus();
        }
    }
}
