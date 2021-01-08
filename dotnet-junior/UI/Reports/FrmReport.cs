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
    public partial class FrmReport : Form
    {
        public FrmReport()
        {
            InitializeComponent();
        }

        private void FrmReport_Load(object sender, EventArgs e)
        {           
            // TODO: esta linha de código carrega dados na tabela 'knowledgeTrail_LaercioDataSet.Pessoas'. Você pode movê-la ou removê-la conforme necessário.
            this.pessoasTableAdapter.Fill(this.knowledgeTrail_LaercioDataSet.Pessoas);            
            this.rptReport.SetDisplayMode(Microsoft.Reporting.WinForms.DisplayMode.PrintLayout);            
            this.rptReport.RefreshReport();
        }

    }
}
