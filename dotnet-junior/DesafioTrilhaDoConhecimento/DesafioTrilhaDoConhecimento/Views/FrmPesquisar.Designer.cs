
namespace DesafioTrilhaDoConhecimento.Views
{
    partial class FrmPesquisar
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
            this.pnlPrincipal = new System.Windows.Forms.Panel();
            this.btnImprimir = new System.Windows.Forms.Button();
            this.tblLayoutPesquisa = new System.Windows.Forms.TableLayoutPanel();
            this.lblCategoria = new System.Windows.Forms.Label();
            this.lblFiltroPesquisa = new System.Windows.Forms.Label();
            this.txtFiltroPesquisa = new System.Windows.Forms.TextBox();
            this.dtGridLista = new System.Windows.Forms.DataGridView();
            this.cboCategoria = new System.Windows.Forms.ComboBox();
            this.cabecalhoPadrao = new DesafioTrilhaDoConhecimento.Views.UserControls.CabecalhoPadrao();
            this.pnlPrincipal.SuspendLayout();
            this.tblLayoutPesquisa.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dtGridLista)).BeginInit();
            this.SuspendLayout();
            // 
            // pnlPrincipal
            // 
            this.pnlPrincipal.BackColor = System.Drawing.SystemColors.Control;
            this.pnlPrincipal.Controls.Add(this.btnImprimir);
            this.pnlPrincipal.Controls.Add(this.tblLayoutPesquisa);
            this.pnlPrincipal.Controls.Add(this.cabecalhoPadrao);
            this.pnlPrincipal.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pnlPrincipal.Location = new System.Drawing.Point(5, 5);
            this.pnlPrincipal.Margin = new System.Windows.Forms.Padding(5);
            this.pnlPrincipal.Name = "pnlPrincipal";
            this.pnlPrincipal.Size = new System.Drawing.Size(790, 440);
            this.pnlPrincipal.TabIndex = 3;
            // 
            // btnImprimir
            // 
            this.btnImprimir.Image = global::DesafioTrilhaDoConhecimento.Properties.Resources.BtnImprimir;
            this.btnImprimir.Location = new System.Drawing.Point(644, 2);
            this.btnImprimir.Name = "btnImprimir";
            this.btnImprimir.Size = new System.Drawing.Size(75, 66);
            this.btnImprimir.TabIndex = 3;
            this.btnImprimir.UseVisualStyleBackColor = true;
            this.btnImprimir.Click += new System.EventHandler(this.btnImprimir_Click);
            // 
            // tblLayoutPesquisa
            // 
            this.tblLayoutPesquisa.ColumnCount = 4;
            this.tblLayoutPesquisa.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 220F));
            this.tblLayoutPesquisa.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 380F));
            this.tblLayoutPesquisa.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 75F));
            this.tblLayoutPesquisa.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 115F));
            this.tblLayoutPesquisa.Controls.Add(this.lblCategoria, 2, 0);
            this.tblLayoutPesquisa.Controls.Add(this.lblFiltroPesquisa, 0, 0);
            this.tblLayoutPesquisa.Controls.Add(this.txtFiltroPesquisa, 1, 0);
            this.tblLayoutPesquisa.Controls.Add(this.dtGridLista, 0, 1);
            this.tblLayoutPesquisa.Controls.Add(this.cboCategoria, 3, 0);
            this.tblLayoutPesquisa.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tblLayoutPesquisa.Location = new System.Drawing.Point(0, 92);
            this.tblLayoutPesquisa.Name = "tblLayoutPesquisa";
            this.tblLayoutPesquisa.RowCount = 2;
            this.tblLayoutPesquisa.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 7.471264F));
            this.tblLayoutPesquisa.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 92.52873F));
            this.tblLayoutPesquisa.Size = new System.Drawing.Size(790, 348);
            this.tblLayoutPesquisa.TabIndex = 2;
            // 
            // lblCategoria
            // 
            this.lblCategoria.AutoSize = true;
            this.lblCategoria.Dock = System.Windows.Forms.DockStyle.Fill;
            this.lblCategoria.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold);
            this.lblCategoria.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.lblCategoria.Location = new System.Drawing.Point(603, 0);
            this.lblCategoria.Name = "lblCategoria";
            this.lblCategoria.Size = new System.Drawing.Size(69, 25);
            this.lblCategoria.TabIndex = 3;
            this.lblCategoria.Text = "Categoria:";
            this.lblCategoria.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // lblFiltroPesquisa
            // 
            this.lblFiltroPesquisa.AutoSize = true;
            this.lblFiltroPesquisa.Dock = System.Windows.Forms.DockStyle.Fill;
            this.lblFiltroPesquisa.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold);
            this.lblFiltroPesquisa.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.lblFiltroPesquisa.Location = new System.Drawing.Point(3, 0);
            this.lblFiltroPesquisa.Name = "lblFiltroPesquisa";
            this.lblFiltroPesquisa.Size = new System.Drawing.Size(214, 25);
            this.lblFiltroPesquisa.TabIndex = 0;
            this.lblFiltroPesquisa.Text = "Pesquisar (Nome, Sobrenome e Cpf):";
            this.lblFiltroPesquisa.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // txtFiltroPesquisa
            // 
            this.txtFiltroPesquisa.Dock = System.Windows.Forms.DockStyle.Fill;
            this.txtFiltroPesquisa.Location = new System.Drawing.Point(223, 3);
            this.txtFiltroPesquisa.Name = "txtFiltroPesquisa";
            this.txtFiltroPesquisa.Size = new System.Drawing.Size(374, 20);
            this.txtFiltroPesquisa.TabIndex = 1;
            this.txtFiltroPesquisa.TextChanged += new System.EventHandler(this.txtFiltroPesquisa_TextChanged);
            // 
            // dtGridLista
            // 
            this.dtGridLista.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.tblLayoutPesquisa.SetColumnSpan(this.dtGridLista, 4);
            this.dtGridLista.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dtGridLista.GridColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.dtGridLista.Location = new System.Drawing.Point(3, 28);
            this.dtGridLista.Name = "dtGridLista";
            this.dtGridLista.Size = new System.Drawing.Size(784, 317);
            this.dtGridLista.TabIndex = 2;
            this.dtGridLista.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dtGridLista_CellClick);
            // 
            // cboCategoria
            // 
            this.cboCategoria.FormattingEnabled = true;
            this.cboCategoria.Location = new System.Drawing.Point(678, 3);
            this.cboCategoria.Name = "cboCategoria";
            this.cboCategoria.Size = new System.Drawing.Size(109, 21);
            this.cboCategoria.TabIndex = 4;
            this.cboCategoria.SelectedIndexChanged += new System.EventHandler(this.cboCategoria_SelectedIndexChanged);
            this.cboCategoria.Leave += new System.EventHandler(this.cboCategoria_Leave);
            // 
            // cabecalhoPadrao
            // 
            this.cabecalhoPadrao.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.cabecalhoPadrao.Dock = System.Windows.Forms.DockStyle.Top;
            this.cabecalhoPadrao.DragForm = this;
            this.cabecalhoPadrao.Icone = null;
            this.cabecalhoPadrao.LblId = 0;
            this.cabecalhoPadrao.Location = new System.Drawing.Point(0, 0);
            this.cabecalhoPadrao.Name = "cabecalhoPadrao";
            this.cabecalhoPadrao.Size = new System.Drawing.Size(790, 92);
            this.cabecalhoPadrao.TabIndex = 1;
            this.cabecalhoPadrao.VisibleButtonNew = false;
            this.cabecalhoPadrao.VisibleButtonSave = false;
            this.cabecalhoPadrao.VisibleLblId = false;
            this.cabecalhoPadrao.VisibleLogoMarca = true;
            // 
            // FrmPesquisar
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.pnlPrincipal);
            this.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "FrmPesquisar";
            this.Padding = new System.Windows.Forms.Padding(5);
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "FrmPesquisar";
            this.pnlPrincipal.ResumeLayout(false);
            this.tblLayoutPesquisa.ResumeLayout(false);
            this.tblLayoutPesquisa.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dtGridLista)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel pnlPrincipal;
        private UserControls.CabecalhoPadrao cabecalhoPadrao;
        private System.Windows.Forms.TableLayoutPanel tblLayoutPesquisa;
        private System.Windows.Forms.Label lblFiltroPesquisa;
        private System.Windows.Forms.TextBox txtFiltroPesquisa;
        private System.Windows.Forms.DataGridView dtGridLista;
        private System.Windows.Forms.Button btnImprimir;
        private System.Windows.Forms.Label lblCategoria;
        private System.Windows.Forms.ComboBox cboCategoria;
    }
}