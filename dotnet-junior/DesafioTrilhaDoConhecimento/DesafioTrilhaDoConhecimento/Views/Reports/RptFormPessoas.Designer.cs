
namespace DesafioTrilhaDoConhecimento.Views.Reports
{
    partial class RptFormPessoas
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
            this.bindingSourcePessoas = new System.Windows.Forms.BindingSource(this.components);
            this.rptPessoas = new Microsoft.Reporting.WinForms.ReportViewer();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSourcePessoas)).BeginInit();
            this.SuspendLayout();
            // 
            // rptPessoas
            // 
            this.rptPessoas.Dock = System.Windows.Forms.DockStyle.Fill;
            reportDataSource1.Name = "DataSetPessoas";
            reportDataSource1.Value = this.bindingSourcePessoas;
            this.rptPessoas.LocalReport.DataSources.Add(reportDataSource1);
            this.rptPessoas.LocalReport.ReportEmbeddedResource = "DesafioTrilhaDoConhecimento.Views.Reports.RptPessoas.rdlc";
            this.rptPessoas.Location = new System.Drawing.Point(0, 0);
            this.rptPessoas.Name = "rptPessoas";
            this.rptPessoas.ServerReport.BearerToken = null;
            this.rptPessoas.Size = new System.Drawing.Size(741, 450);
            this.rptPessoas.TabIndex = 0;
            // 
            // RptFormPessoas
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(741, 450);
            this.Controls.Add(this.rptPessoas);
            this.Name = "RptFormPessoas";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "RptFormPessoas";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.RptFormPessoas_Load);
            ((System.ComponentModel.ISupportInitialize)(this.bindingSourcePessoas)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private Microsoft.Reporting.WinForms.ReportViewer rptPessoas;
        private System.Windows.Forms.BindingSource bindingSourcePessoas;
    }
}