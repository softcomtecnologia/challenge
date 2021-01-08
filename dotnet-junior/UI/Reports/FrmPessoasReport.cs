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

namespace KnowledgeTrail.Reports
{
    public partial class FrmPessoasReport : Form
    {
        public string FonteDeDados;
        public FrmPessoasReport()
        {
            InitializeComponent();
        }

        private void FrmPessoasReport_Load(object sender, EventArgs e)
        {
            var pessoa = new Pessoas();            
            PessoasBindingSource.DataSource= pessoa.GetListPessoas(FonteDeDados);

            this.reportViewer1.SetDisplayMode(Microsoft.Reporting.WinForms.DisplayMode.PrintLayout);
            this.reportViewer1.RefreshReport();
        }
    }
}
