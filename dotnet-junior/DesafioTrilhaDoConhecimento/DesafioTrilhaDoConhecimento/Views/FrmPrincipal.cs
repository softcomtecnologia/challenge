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
    public partial class FrmPrincipal : Form
    {
        public FrmPrincipal()
        {
            InitializeComponent();
        }

        private void pessoaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            var frmListaPessoa = new FrmPesquisar();
            frmListaPessoa.ShowDialog();
        }

        private void categoriaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            var frmCategoria = new FrmCadastroCategorias();
            frmCategoria.ShowDialog();
        }

        private void cabecalhoPadrao1_OnButtonCloseClick(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void comissãoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Em Construção");
        }
    }
}
