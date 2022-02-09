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
    public partial class FrmLogin : Form
    {
        public FrmLogin()
        {
            InitializeComponent();
            popularUsuarios();
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

        private void btnCancelar_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void btnEntrar_Click(object sender, EventArgs e)
        {
            //Verificando se os campos estão preenchidos
            if (cboUsuarios.Text == "" || txtSenha.Text == "")
            {
                MessageBox.Show($"Usuário e Senha são obrigatórios!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                return;
            }

            var controllerPessoas = new Pessoa();
            var frmPrincipal = new FrmPrincipal();

            if (Tag.Equals("CriarConta")){

                if (MessageBox.Show($"Usuário não localizado, Deseja criar um novo usuário?", "Pergunta", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.No)
                    return;

                var pessoa = new DataBase.Pessoa();

                pessoa.Nome = cboUsuarios.Text;
                pessoa.Senha = txtSenha.Text;
                pessoa.IdCategoria = 1;
                pessoa.Foto = Properties.Resources.SoftnickBracosCruzadosParteDeCima;

                var newPessoa = controllerPessoas.Salvar(pessoa);

                //Setando o usuario de sessão para futuramente usar as permissões
                Controllers.UsuarioSessao.Usuario = newPessoa;

                frmPrincipal.Show();

                var frmPessoa = new frmCadastroPessoas(newPessoa);
                frmPessoa.Show();

                MessageBox.Show("Conclua seu Cadastro!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);

                return;
            }

            var idUsuario = 0;

            if (cboUsuarios.SelectedItem != null)
                idUsuario = ((DataBase.Pessoa)cboUsuarios.SelectedItem).Id;

            //Retornando o usuário, filtrando o id e senha, utilizando LINQ
            var queryAuth = (from p in controllerPessoas.Lista()
                             where p.Id == idUsuario && 
                                   p.Senha == txtSenha.Text
                             select p).FirstOrDefault();

            //Caso retorne null informa ao usuário
            if (queryAuth == null)
            {
                MessageBox.Show("Usuário ou Senha Inválidos!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                return;
            }

            //Setando o usuario de sessão para futuramente usar as permissões
            Controllers.UsuarioSessao.Usuario = queryAuth;

            this.Visible = false;

            frmPrincipal.Show();

        }
        private void cboUsuarios_Leave(object sender, EventArgs e)
        {
            var controllerPessoas = new Pessoa();
            var idUsuario = 0;

            if (cboUsuarios.SelectedItem != null)
                idUsuario = ((DataBase.Pessoa)cboUsuarios.SelectedItem).Id;

            //Retornando o usuário, filtrando o id, utilizando LINQ
            var queryAuth = (from p in controllerPessoas.Lista()
                             where p.Id == idUsuario
                             select p).FirstOrDefault();

            //Caso retorne null
            if (queryAuth == null)
            {
                btnEntrar.Text = "Criar Conta";
                Tag = "CriarConta";
                return;
            }
            else
            {
                btnEntrar.Text = "Entrar";
                Tag = "Entrar";
            }
        }

        private void popularUsuarios()
        {
            try
            {
                var controllerPessoa = new Pessoa();

                var query = from p in controllerPessoa.Lista()
                            orderby p.Id ascending
                            where p.Nome != "" && p.Senha != ""
                            select p;

                cboUsuarios.DataSource = query.ToList();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro ao popular a Lista de Usuários:{ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

    }
}
