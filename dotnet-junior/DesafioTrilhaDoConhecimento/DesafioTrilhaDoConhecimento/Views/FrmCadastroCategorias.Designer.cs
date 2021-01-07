
namespace DesafioTrilhaDoConhecimento.Views
{
    partial class FrmCadastroCategorias
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
            this.dtgCategorias = new System.Windows.Forms.DataGridView();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.lblDescricao = new System.Windows.Forms.Label();
            this.txtDescricao = new System.Windows.Forms.TextBox();
            this.cabecalhoPadrao = new DesafioTrilhaDoConhecimento.Views.UserControls.CabecalhoPadrao();
            ((System.ComponentModel.ISupportInitialize)(this.dtgCategorias)).BeginInit();
            this.tableLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // dtgCategorias
            // 
            this.dtgCategorias.AutoSizeRowsMode = System.Windows.Forms.DataGridViewAutoSizeRowsMode.DisplayedCells;
            this.dtgCategorias.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.tableLayoutPanel1.SetColumnSpan(this.dtgCategorias, 2);
            this.dtgCategorias.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dtgCategorias.Location = new System.Drawing.Point(0, 25);
            this.dtgCategorias.Margin = new System.Windows.Forms.Padding(0);
            this.dtgCategorias.MultiSelect = false;
            this.dtgCategorias.Name = "dtgCategorias";
            this.dtgCategorias.Size = new System.Drawing.Size(406, 338);
            this.dtgCategorias.TabIndex = 1;
            this.dtgCategorias.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dtgCategorias_CellClick);
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.BackColor = System.Drawing.Color.White;
            this.tableLayoutPanel1.ColumnCount = 2;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 16.25616F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 83.74384F));
            this.tableLayoutPanel1.Controls.Add(this.dtgCategorias, 0, 1);
            this.tableLayoutPanel1.Controls.Add(this.lblDescricao, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.txtDescricao, 1, 0);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(5, 97);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 2;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 7.162534F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 92.83746F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(406, 363);
            this.tableLayoutPanel1.TabIndex = 2;
            // 
            // lblDescricao
            // 
            this.lblDescricao.AutoSize = true;
            this.lblDescricao.Dock = System.Windows.Forms.DockStyle.Fill;
            this.lblDescricao.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblDescricao.Location = new System.Drawing.Point(3, 3);
            this.lblDescricao.Margin = new System.Windows.Forms.Padding(3, 3, 3, 0);
            this.lblDescricao.Name = "lblDescricao";
            this.lblDescricao.Size = new System.Drawing.Size(60, 22);
            this.lblDescricao.TabIndex = 2;
            this.lblDescricao.Text = "Descrição:";
            // 
            // txtDescricao
            // 
            this.txtDescricao.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtDescricao.Location = new System.Drawing.Point(69, 3);
            this.txtDescricao.Name = "txtDescricao";
            this.txtDescricao.Size = new System.Drawing.Size(334, 21);
            this.txtDescricao.TabIndex = 3;
            // 
            // cabecalhoPadrao
            // 
            this.cabecalhoPadrao.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.cabecalhoPadrao.Dock = System.Windows.Forms.DockStyle.Top;
            this.cabecalhoPadrao.DragForm = this;
            this.cabecalhoPadrao.Icone = null;
            this.cabecalhoPadrao.LblId = 0;
            this.cabecalhoPadrao.Location = new System.Drawing.Point(5, 5);
            this.cabecalhoPadrao.Name = "cabecalhoPadrao";
            this.cabecalhoPadrao.Size = new System.Drawing.Size(406, 92);
            this.cabecalhoPadrao.TabIndex = 0;
            this.cabecalhoPadrao.VisibleButtonNew = true;
            this.cabecalhoPadrao.VisibleButtonSave = true;
            this.cabecalhoPadrao.VisibleLblId = true;
            this.cabecalhoPadrao.VisibleLogoMarca = true;
            this.cabecalhoPadrao.OnButtonNewClick += new System.EventHandler(this.cabecalhoPadrao_OnButtonNewClick);
            this.cabecalhoPadrao.OnButtonSaveClick += new System.EventHandler(this.cabecalhoPadrao_OnButtonSaveClick);
            // 
            // FrmCadastroCategorias
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.ClientSize = new System.Drawing.Size(416, 465);
            this.ControlBox = false;
            this.Controls.Add(this.tableLayoutPanel1);
            this.Controls.Add(this.cabecalhoPadrao);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.MinimumSize = new System.Drawing.Size(416, 465);
            this.Name = "FrmCadastroCategorias";
            this.Padding = new System.Windows.Forms.Padding(5);
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Cadastro de Categorias";
            ((System.ComponentModel.ISupportInitialize)(this.dtgCategorias)).EndInit();
            this.tableLayoutPanel1.ResumeLayout(false);
            this.tableLayoutPanel1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private UserControls.CabecalhoPadrao cabecalhoPadrao;
        private System.Windows.Forms.DataGridView dtgCategorias;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Label lblDescricao;
        private System.Windows.Forms.TextBox txtDescricao;
    }
}