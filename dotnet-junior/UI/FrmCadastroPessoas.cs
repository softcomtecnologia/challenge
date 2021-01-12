using Business;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KnowledgeTrail
{
    public partial class FrmCadastroPessoas : Form
    {
        private int IdSelecionado = 0;
        private int IdFilhoSelecionado = 0;
        private string TipoTSQL = "novo";
        private string caminhoFoto;

        Bitmap img;
        public FrmCadastroPessoas()
        {
            InitializeComponent();
        }

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            if (ValidarInformacoes())
            {
                var pessoa = new Pessoas();
                pessoa.CPF = txtCPF.Text;
                pessoa.Nome = txtNome.Text;
                pessoa.Sobrenome = txtSobreNome.Text;
                pessoa.Sexo = cboSexo.Text;
                pessoa.Email = txtEmail.Text;
                pessoa.Categoria = cboCategoria.Text;
                pessoa.SalarioBase = Convert.ToDouble(txtSalarioBase.Text);
                pessoa.CEP = txtCEP.Text;
                pessoa.Endereco = txtEndereco.Text;
                pessoa.Numero = txtNumero.Text;
                pessoa.Bairro = txtBairro.Text;
                pessoa.UF = cboUF.Text;
                pessoa.Cidade = cboCidade.Text;

                if (imgFoto.Image != null)
                {
                    MemoryStream memory = new MemoryStream();
                    img = new Bitmap(imgFoto.Image);
                    img.Save(memory, ImageFormat.Bmp);
                    pessoa.foto = memory.ToArray();
                }

                switch (TipoTSQL)
                {
                    case "novo":
                        if (pessoa.Salvar())
                        {
                            MessageBox.Show("Salvo com sucesso!");
                            LimparTela();
                        }
                        break;
                    case "atualizar":
                        if (pessoa.Atualizar(IdSelecionado))
                        {
                            MessageBox.Show("Atualizado com sucesso!");
                            LimparTela();
                        }
                        break;
                }
                
            }                            
        }

        private void LimparTela()
        {
            txtCPF.Text = null;
            txtNome.Text = null;
            txtSobreNome.Text = null;
            cboSexo.Text = null;
            txtEmail.Text = null;
            cboCategoria.Text = null;
            txtSalarioBase.Text = "0";
            txtCEP.Text = null;
            txtEndereco.Text = null;
            txtNumero.Text = null;
            txtBairro.Text = null;
            cboUF.Text = null;
            cboCidade.Text = null;
            imgFoto.Image = null;
            IdSelecionado = 0;
            IdFilhoSelecionado = 0;
            txtNomeFilho.Text = null;
            txtIdadeFilho.Text = null;
            cboSexoFilho.Text = null;
            dgvFilhos.DataSource = null;
            TipoTSQL = "novo";
        }

        private bool ValidarInformacoes()
        {
            
            if (txtNome.Text == string.Empty)
            {
                MessageBox.Show("O nome da pessoa é obrigatório.");
                txtNome.Focus();
                return false;
            }         

            return true;
        }

        private void txtSalarioBase_Leave(object sender, EventArgs e)
        {
            if (txtSalarioBase.Text == string.Empty)
            {
                MessageBox.Show("Valor inválido.");
                txtSalarioBase.Focus();
            }
        }

        public void btnPesquisar_Click(object sender, EventArgs e)
        {
            BuscarPessoa();
        }

        private void BuscarPessoa()
        {
            var pessoa = new Pessoas();
            FrmBuscar frm = new FrmBuscar();
            frm.Owner = this;
            frm.Show();
        }

        public void SetDados(Pessoas pessoa)
        {
            txtCPF.Text = pessoa.CPF;
            txtNome.Text = pessoa.Nome;
            txtSobreNome.Text = pessoa.Sobrenome;
            cboSexo.Text = pessoa.Sexo;
            txtEmail.Text = pessoa.Email;
            cboCategoria.Text = pessoa.Categoria;
            txtSalarioBase.Text = Convert.ToString(pessoa.SalarioBase);
            txtCEP.Text = pessoa.CEP;
            txtEndereco.Text = pessoa.Endereco;
            txtNumero.Text = pessoa.Numero;
            txtBairro.Text = pessoa.Bairro;
            cboUF.Text = pessoa.UF;
            cboCidade.Text = pessoa.Cidade;
           
            if (pessoa.foto != null)
            {
                imgFoto.Image = Util_Convert.ByteArrayToImage(pessoa.foto);
            }
            else
            {
                imgFoto.Image = null;
            }
            
            IdSelecionado = pessoa.Id;
            TipoTSQL = "atualizar";
        }

        private void btnNovo_Click(object sender, EventArgs e)
        {
            LimparTela();
            txtCPF.Focus();
        }

        private void btnCancelar_Click(object sender, EventArgs e)
        {
            LimparTela();
        }

        private void btnSalvarFilho_Click(object sender, EventArgs e)
        {
            if (IdSelecionado == 0 && txtNome.Text == string.Empty)
            {
                MessageBox.Show("Selecione uma pessoa antes de inserir o filho!");                
                return;
            }

            if (IdSelecionado == 0 && txtNome.Text != string.Empty)
            {
                MessageBox.Show("Necessário Salvar a pessoa antes de inserir os filhos!");
                return;
            }

            if (txtNomeFilho.Text == string.Empty)
            {
                MessageBox.Show("Nome do Filho é obrigatório!");
                txtNomeFilho.Focus();
                return;
            }

            var filho = new Filho();
            filho.IdPai = IdSelecionado;
            filho.NomeFilho = txtNomeFilho.Text;
            
            if (!string.IsNullOrEmpty(txtIdadeFilho.Text))
            {
                filho.Idade = Convert.ToInt32(txtIdadeFilho.Text);
            }
            
            filho.Sexo = cboSexoFilho.Text;

            if (IdFilhoSelecionado == 0)
            {
                if (filho.Salvar())
                {                    
                    MessageBox.Show("Salvo com sucesso!");
                }
            }
            else
            {
                if (filho.Atualizar(IdFilhoSelecionado))
                {
                    MessageBox.Show("Atualizado com sucesso!");
                }
            }

            IdFilhoSelecionado = 0;
            txtNomeFilho.Text = null;
            txtIdadeFilho.Text = null;
            cboSexoFilho.Text = null;
            BuscarFilhos();

        }

        public void BuscarFilhos()
        {
            dgvFilhos.DataSource = null;
            var filhos = new Filho();
            dgvFilhos.DataSource = filhos.Buscar("SELECT ID, IDPai, NomeFilho AS Nome, Idade, Sexo FROM Filhos WHERE IDPai =" + IdSelecionado);

            foreach (DataGridViewColumn column in dgvFilhos.Columns)
            {
                if (column.Name == "Nome" || column.Name == "Idade" || column.Name == "Sexo")
                {
                    if (column.Name == "Idade" || column.Name == "Sexo")
                    {
                        column.Width = 70;
                    }
                    else 
                    {
                        column.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
                    }
                }
                else
                {
                    column.Visible = false;
                }
            }
        }

        private void FrmCadastroPessoas_Load(object sender, EventArgs e)
        {
            BuscarFilhos();
        }

        private void btnEditarFilho_Click(object sender, EventArgs e)
        {
            if (dgvFilhos.CurrentRow != null)
            {
                IdFilhoSelecionado = Convert.ToInt32(dgvFilhos.CurrentRow.Cells["ID"].Value);
                txtNomeFilho.Text = Convert.ToString(dgvFilhos.CurrentRow.Cells["Nome"].Value);
                txtIdadeFilho.Text = Convert.ToString(dgvFilhos.CurrentRow.Cells["Idade"].Value);
                cboSexoFilho.Text = Convert.ToString(dgvFilhos.CurrentRow.Cells["Sexo"].Value);
            }
        }

        private void btnExcluirFilho_Click(object sender, EventArgs e)
        {

            if (IdFilhoSelecionado == 0)
            {
                MessageBox.Show("Nenhum Filho Selecionado!");
                return;
            }

            var result = MessageBox.Show($"Deseja excluir o filho(a) {txtNomeFilho.Text}?", "Pergunta", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            
            if (result == DialogResult.Yes)
            {    
                var filho = new Filho();
                filho.ExecutarSQL($"DELETE FROM Filhos WHERE ID=" + dgvFilhos.CurrentRow.Cells["ID"].Value);
                txtNomeFilho.Text = null;
                txtIdadeFilho.Text = null;
                cboSexoFilho.Text = null;
                IdFilhoSelecionado = 0;
            }

            BuscarFilhos();
        }

        private void btnCarregarFoto_Click(object sender, EventArgs e)
        {
            if (txtNome.Text == string.Empty)
            {
                MessageBox.Show("Nenhuma pessoa selecionada!");
                return;
            }
            
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                caminhoFoto = openFileDialog1.FileName;
                img = new Bitmap(caminhoFoto);
                                
                if (img.Width > 800 || img.Height > 800)
                {
                    MessageBox.Show("Imagem maior que o permitido! A resolução máxima é 800 x 800");
                    return;
                }

                imgFoto.Image = img;
            }
        }

        private void btnRemoverFoto_Click(object sender, EventArgs e)
        {
            imgFoto.Image = null;
        }

        private void btnPesquisaCep_Click(object sender, EventArgs e)
        {
            if (txtCEP.Text != string.Empty)
            {
                var pessoa = new Pessoas();
                pessoa.CEP = txtCEP.Text;

                if (pessoa.VerificarCEP())
                {
                    txtEndereco.Text = pessoa.Endereco;
                    txtBairro.Text = pessoa.Bairro;
                    cboUF.Text = pessoa.UF;
                    cboCidade.Text = pessoa.Cidade;
                }
                
            }

        }

        private void FrmCadastroPessoas_FormClosed(object sender, FormClosedEventArgs e)
        {
            Application.Exit();
        }
    }
}
