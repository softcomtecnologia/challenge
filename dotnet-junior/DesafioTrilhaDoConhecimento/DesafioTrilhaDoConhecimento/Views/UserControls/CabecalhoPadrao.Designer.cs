
namespace DesafioTrilhaDoConhecimento.Views.UserControls
{
    partial class CabecalhoPadrao
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

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.tblLayoutPrincipal = new System.Windows.Forms.TableLayoutPanel();
            this.imgLogoSoftcom = new System.Windows.Forms.PictureBox();
            this.tblLayoutBotoes = new System.Windows.Forms.TableLayoutPanel();
            this.btnNovo = new System.Windows.Forms.Button();
            this.btnSalvar = new System.Windows.Forms.Button();
            this.btnFechar = new System.Windows.Forms.Button();
            this.pnlTarjaGold = new System.Windows.Forms.Panel();
            this.lblRegistro = new System.Windows.Forms.Label();
            this.lblId = new System.Windows.Forms.Label();
            this.tblLayoutPrincipal.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.imgLogoSoftcom)).BeginInit();
            this.tblLayoutBotoes.SuspendLayout();
            this.pnlTarjaGold.SuspendLayout();
            this.SuspendLayout();
            // 
            // tblLayoutPrincipal
            // 
            this.tblLayoutPrincipal.BackColor = System.Drawing.SystemColors.ControlLightLight;
            this.tblLayoutPrincipal.ColumnCount = 2;
            this.tblLayoutPrincipal.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tblLayoutPrincipal.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tblLayoutPrincipal.Controls.Add(this.imgLogoSoftcom, 0, 0);
            this.tblLayoutPrincipal.Controls.Add(this.tblLayoutBotoes, 1, 0);
            this.tblLayoutPrincipal.Controls.Add(this.pnlTarjaGold, 0, 1);
            this.tblLayoutPrincipal.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tblLayoutPrincipal.Location = new System.Drawing.Point(0, 0);
            this.tblLayoutPrincipal.Name = "tblLayoutPrincipal";
            this.tblLayoutPrincipal.RowCount = 2;
            this.tblLayoutPrincipal.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 70F));
            this.tblLayoutPrincipal.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 30F));
            this.tblLayoutPrincipal.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tblLayoutPrincipal.Size = new System.Drawing.Size(709, 92);
            this.tblLayoutPrincipal.TabIndex = 5;
            this.tblLayoutPrincipal.MouseDown += new System.Windows.Forms.MouseEventHandler(this.tblLayoutPrincipal_MouseDown);
            this.tblLayoutPrincipal.MouseMove += new System.Windows.Forms.MouseEventHandler(this.tblLayoutPrincipal_MouseMove);
            this.tblLayoutPrincipal.MouseUp += new System.Windows.Forms.MouseEventHandler(this.tblLayoutPrincipal_MouseUp);
            // 
            // imgLogoSoftcom
            // 
            this.imgLogoSoftcom.BackColor = System.Drawing.Color.White;
            this.imgLogoSoftcom.Image = global::DesafioTrilhaDoConhecimento.Properties.Resources.LogoSoftcom;
            this.imgLogoSoftcom.Location = new System.Drawing.Point(3, 3);
            this.imgLogoSoftcom.Name = "imgLogoSoftcom";
            this.imgLogoSoftcom.Size = new System.Drawing.Size(151, 37);
            this.imgLogoSoftcom.SizeMode = System.Windows.Forms.PictureBoxSizeMode.AutoSize;
            this.imgLogoSoftcom.TabIndex = 98;
            this.imgLogoSoftcom.TabStop = false;
            // 
            // tblLayoutBotoes
            // 
            this.tblLayoutBotoes.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.tblLayoutBotoes.ColumnCount = 3;
            this.tblLayoutBotoes.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle());
            this.tblLayoutBotoes.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle());
            this.tblLayoutBotoes.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle());
            this.tblLayoutBotoes.Controls.Add(this.btnNovo, 0, 0);
            this.tblLayoutBotoes.Controls.Add(this.btnSalvar, 0, 0);
            this.tblLayoutBotoes.Controls.Add(this.btnFechar, 2, 0);
            this.tblLayoutBotoes.Location = new System.Drawing.Point(509, 3);
            this.tblLayoutBotoes.Name = "tblLayoutBotoes";
            this.tblLayoutBotoes.RowCount = 1;
            this.tblLayoutBotoes.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tblLayoutBotoes.Size = new System.Drawing.Size(197, 64);
            this.tblLayoutBotoes.TabIndex = 4;
            // 
            // btnNovo
            // 
            this.btnNovo.Anchor = System.Windows.Forms.AnchorStyles.Right;
            this.btnNovo.BackColor = System.Drawing.Color.LightGray;
            this.btnNovo.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnNovo.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Black;
            this.btnNovo.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.btnNovo.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btnNovo.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnNovo.ForeColor = System.Drawing.Color.Transparent;
            this.btnNovo.Image = global::DesafioTrilhaDoConhecimento.Properties.Resources.BtnNovo;
            this.btnNovo.Location = new System.Drawing.Point(65, 0);
            this.btnNovo.Margin = new System.Windows.Forms.Padding(0);
            this.btnNovo.Name = "btnNovo";
            this.btnNovo.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.btnNovo.Size = new System.Drawing.Size(65, 64);
            this.btnNovo.TabIndex = 96;
            this.btnNovo.TabStop = false;
            this.btnNovo.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnNovo.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnNovo.UseVisualStyleBackColor = false;
            this.btnNovo.Click += new System.EventHandler(this.btnNovo_Click);
            // 
            // btnSalvar
            // 
            this.btnSalvar.Anchor = System.Windows.Forms.AnchorStyles.Right;
            this.btnSalvar.BackColor = System.Drawing.Color.LightGray;
            this.btnSalvar.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnSalvar.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Black;
            this.btnSalvar.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.btnSalvar.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btnSalvar.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSalvar.ForeColor = System.Drawing.Color.Transparent;
            this.btnSalvar.Image = global::DesafioTrilhaDoConhecimento.Properties.Resources.btnSalvar;
            this.btnSalvar.Location = new System.Drawing.Point(0, 0);
            this.btnSalvar.Margin = new System.Windows.Forms.Padding(0);
            this.btnSalvar.Name = "btnSalvar";
            this.btnSalvar.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.btnSalvar.Size = new System.Drawing.Size(65, 64);
            this.btnSalvar.TabIndex = 95;
            this.btnSalvar.TabStop = false;
            this.btnSalvar.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnSalvar.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnSalvar.UseVisualStyleBackColor = false;
            this.btnSalvar.Click += new System.EventHandler(this.btnSalvar_Click);
            // 
            // btnFechar
            // 
            this.btnFechar.Anchor = System.Windows.Forms.AnchorStyles.Right;
            this.btnFechar.BackColor = System.Drawing.Color.LightGray;
            this.btnFechar.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnFechar.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Black;
            this.btnFechar.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.btnFechar.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btnFechar.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnFechar.ForeColor = System.Drawing.Color.Transparent;
            this.btnFechar.Image = global::DesafioTrilhaDoConhecimento.Properties.Resources.btnFechar;
            this.btnFechar.Location = new System.Drawing.Point(130, 0);
            this.btnFechar.Margin = new System.Windows.Forms.Padding(0);
            this.btnFechar.Name = "btnFechar";
            this.btnFechar.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.btnFechar.Size = new System.Drawing.Size(67, 64);
            this.btnFechar.TabIndex = 94;
            this.btnFechar.TabStop = false;
            this.btnFechar.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnFechar.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnFechar.UseVisualStyleBackColor = false;
            this.btnFechar.Click += new System.EventHandler(this.btnFechar_Click);
            // 
            // pnlTarjaGold
            // 
            this.pnlTarjaGold.BackColor = System.Drawing.Color.Gold;
            this.tblLayoutPrincipal.SetColumnSpan(this.pnlTarjaGold, 2);
            this.pnlTarjaGold.Controls.Add(this.lblRegistro);
            this.pnlTarjaGold.Controls.Add(this.lblId);
            this.pnlTarjaGold.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pnlTarjaGold.Location = new System.Drawing.Point(0, 73);
            this.pnlTarjaGold.Margin = new System.Windows.Forms.Padding(0, 3, 0, 3);
            this.pnlTarjaGold.Name = "pnlTarjaGold";
            this.pnlTarjaGold.Size = new System.Drawing.Size(709, 24);
            this.pnlTarjaGold.TabIndex = 99;
            // 
            // lblRegistro
            // 
            this.lblRegistro.AutoSize = true;
            this.lblRegistro.Dock = System.Windows.Forms.DockStyle.Right;
            this.lblRegistro.Font = new System.Drawing.Font("Tahoma", 10F);
            this.lblRegistro.Location = new System.Drawing.Point(630, 0);
            this.lblRegistro.Name = "lblRegistro";
            this.lblRegistro.Size = new System.Drawing.Size(63, 17);
            this.lblRegistro.TabIndex = 5;
            this.lblRegistro.Text = "Registro:";
            // 
            // lblId
            // 
            this.lblId.AutoSize = true;
            this.lblId.Dock = System.Windows.Forms.DockStyle.Right;
            this.lblId.Font = new System.Drawing.Font("Tahoma", 10F);
            this.lblId.Location = new System.Drawing.Point(693, 0);
            this.lblId.Margin = new System.Windows.Forms.Padding(3, 3, 3, 0);
            this.lblId.Name = "lblId";
            this.lblId.Size = new System.Drawing.Size(16, 17);
            this.lblId.TabIndex = 4;
            this.lblId.Text = "0";
            // 
            // CabecalhoPadrao
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.Controls.Add(this.tblLayoutPrincipal);
            this.Name = "CabecalhoPadrao";
            this.Size = new System.Drawing.Size(709, 92);
            this.tblLayoutPrincipal.ResumeLayout(false);
            this.tblLayoutPrincipal.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.imgLogoSoftcom)).EndInit();
            this.tblLayoutBotoes.ResumeLayout(false);
            this.pnlTarjaGold.ResumeLayout(false);
            this.pnlTarjaGold.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel tblLayoutPrincipal;
        private System.Windows.Forms.PictureBox imgLogoSoftcom;
        private System.Windows.Forms.TableLayoutPanel tblLayoutBotoes;
        private System.Windows.Forms.Button btnNovo;
        private System.Windows.Forms.Button btnFechar;
        private System.Windows.Forms.Panel pnlTarjaGold;
        private System.Windows.Forms.Label lblRegistro;
        private System.Windows.Forms.Label lblId;
        private System.Windows.Forms.Button btnSalvar;
    }
}
