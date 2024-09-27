using Business;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KnowledgeTrail
{
    public partial class FrmLogin : Form
    {
        Login login;
        public FrmLogin()
        {            
            InitializeComponent();
            login = new Login();
            login.CriarBancoDeDados();
        }

        private void btnEntrar_Click(object sender, EventArgs e)
        {
            if (txtUsuario.Text != string.Empty && txtSenha.Text != string.Empty)
            {

                login.Usuario = txtUsuario.Text;
                login.Senha = txtSenha.Text;

                if (login.TSQL == "novo")
                {
                    if (!login.CadastrarUsuario())
                    {
                        MessageBox.Show("Usuário já existe!");
                        return;
                    }
                }

                if (login.ValidarLogin())
                {
                    this.Hide();
                    new FrmCadastroPessoas().Show();
                }
                else
                {
                    MessageBox.Show("Usuário ou senha inválidos!");
                }
            }
            else
            {
                MessageBox.Show("Informe usuário e senha!");
            }

        }

        private void lblCriarConta_Click(object sender, EventArgs e)
        {
            login.TSQL = "novo";
            btnEntrar.Text = "Salvar";
            btnEntrar.BackColor = System.Drawing.Color.DarkBlue;
            txtUsuario.Focus();
        }

        private void btnSair_Click(object sender, EventArgs e)
        {
            this.Close();
        }

    }
}
