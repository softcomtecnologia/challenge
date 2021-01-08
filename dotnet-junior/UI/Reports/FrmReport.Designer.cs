
namespace KnowledgeTrail.Reports
{
    partial class FrmReport
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            Microsoft.Reporting.WinForms.ReportDataSource reportDataSource1 = new Microsoft.Reporting.WinForms.ReportDataSource();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FrmReport));
            this.PessoasBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.knowledgeTrail_LaercioDataSet = new KnowledgeTrail.KnowledgeTrail_LaercioDataSet();
            this.rptReport = new Microsoft.Reporting.WinForms.ReportViewer();
            this.pessoasTableAdapter = new KnowledgeTrail.KnowledgeTrail_LaercioDataSetTableAdapters.PessoasTableAdapter();
            ((System.ComponentModel.ISupportInitialize)(this.PessoasBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.knowledgeTrail_LaercioDataSet)).BeginInit();
            this.SuspendLayout();
            // 
            // PessoasBindingSource
            // 
            this.PessoasBindingSource.DataMember = "Pessoas";
            this.PessoasBindingSource.DataSource = this.knowledgeTrail_LaercioDataSet;
            // 
            // knowledgeTrail_LaercioDataSet
            // 
            this.knowledgeTrail_LaercioDataSet.DataSetName = "KnowledgeTrail_LaercioDataSet";
            this.knowledgeTrail_LaercioDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // rptReport
            // 
            this.rptReport.Dock = System.Windows.Forms.DockStyle.Fill;
            reportDataSource1.Name = "PessoasDataSet";
            reportDataSource1.Value = this.PessoasBindingSource;
            this.rptReport.LocalReport.DataSources.Add(reportDataSource1);
            this.rptReport.LocalReport.ReportEmbeddedResource = "KnowledgeTrail.Reports.RptReport.rdlc";
            this.rptReport.Location = new System.Drawing.Point(0, 0);
            this.rptReport.Name = "rptReport";
            this.rptReport.ServerReport.BearerToken = null;
            this.rptReport.ShowFindControls = false;
            this.rptReport.ShowRefreshButton = false;
            this.rptReport.Size = new System.Drawing.Size(800, 450);
            this.rptReport.TabIndex = 0;
            // 
            // pessoasTableAdapter
            // 
            this.pessoasTableAdapter.ClearBeforeFill = true;
            // 
            // FrmReport
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.rptReport);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "FrmReport";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "KnowledgeTrail - Relatório de Pessoas";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.FrmReport_Load);
            ((System.ComponentModel.ISupportInitialize)(this.PessoasBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.knowledgeTrail_LaercioDataSet)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private Microsoft.Reporting.WinForms.ReportViewer rptReport;
        private KnowledgeTrail_LaercioDataSet knowledgeTrail_LaercioDataSet;
        private System.Windows.Forms.BindingSource PessoasBindingSource;
        private KnowledgeTrail_LaercioDataSetTableAdapters.PessoasTableAdapter pessoasTableAdapter;
    }
}