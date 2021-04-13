using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace DesafioTrilhaDoConhecimento.Views.Reports
{
    public partial class RptFormPessoas : Form
    {
        List<DataBase.Pessoa> pessoasLocal;

        public RptFormPessoas(List<DataBase.Pessoa> pessoas)
        {
            InitializeComponent();
            pessoasLocal = pessoas;
        }

        private void RptFormPessoas_Load(object sender, EventArgs e)
        {
            bindingSourcePessoas.DataSource = pessoasLocal;
            rptPessoas.SetDisplayMode(Microsoft.Reporting.WinForms.DisplayMode.PrintLayout);
            rptPessoas.RefreshReport();
        }
    }
}
