
namespace DesafioTrilhaDoConhecimento.Views
{
    partial class FrmLogin
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
            this.tblLayoutPrincipal = new System.Windows.Forms.TableLayoutPanel();
            this.cboUsuarios = new System.Windows.Forms.ComboBox();
            this.lblUsuario = new System.Windows.Forms.Label();
            this.lblSenha = new System.Windows.Forms.Label();
            this.txtSenha = new System.Windows.Forms.TextBox();
            this.btnCancelar = new System.Windows.Forms.Button();
            this.btnEntrar = new System.Windows.Forms.Button();
            this.pnlPrincipal = new System.Windows.Forms.Panel();
            this.tblLayoutPrincipal.SuspendLayout();
            this.pnlPrincipal.SuspendLayout();
            this.SuspendLayout();
            // 
            // tblLayoutPrincipal
            // 
            this.tblLayoutPrincipal.BackColor = System.Drawing.Color.White;
            this.tblLayoutPrincipal.ColumnCount = 2;
            this.tblLayoutPrincipal.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tblLayoutPrincipal.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tblLayoutPrincipal.Controls.Add(this.cboUsuarios, 0, 1);
            this.tblLayoutPrincipal.Controls.Add(this.lblUsuario, 0, 0);
            this.tblLayoutPrincipal.Controls.Add(this.lblSenha, 0, 2);
            this.tblLayoutPrincipal.Controls.Add(this.txtSenha, 0, 3);
            this.tblLayoutPrincipal.Controls.Add(this.btnCancelar, 0, 4);
            this.tblLayoutPrincipal.Controls.Add(this.btnEntrar, 1, 4);
            this.tblLayoutPrincipal.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tblLayoutPrincipal.Location = new System.Drawing.Point(50, 50);
            this.tblLayoutPrincipal.Name = "tblLayoutPrincipal";
            this.tblLayoutPrincipal.RowCount = 6;
            this.tblLayoutPrincipal.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tblLayoutPrincipal.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tblLayoutPrincipal.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tblLayoutPrincipal.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tblLayoutPrincipal.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tblLayoutPrincipal.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tblLayoutPrincipal.Size = new System.Drawing.Size(241, 163);
            this.tblLayoutPrincipal.TabIndex = 0;
            // 
            // cboUsuarios
            // 
            this.cboUsuarios.AutoCompleteMode = System.Windows.Forms.AutoCompleteMode.Append;
            this.cboUsuarios.AutoCompleteSource = System.Windows.Forms.AutoCompleteSource.ListItems;
            this.tblLayoutPrincipal.SetColumnSpan(this.cboUsuarios, 2);
            this.cboUsuarios.Dock = System.Windows.Forms.DockStyle.Fill;
            this.cboUsuarios.FormattingEnabled = true;
            this.cboUsuarios.Location = new System.Drawing.Point(3, 20);
            this.cboUsuarios.Margin = new System.Windows.Forms.Padding(3, 0, 3, 0);
            this.cboUsuarios.Name = "cboUsuarios";
            this.cboUsuarios.Size = new System.Drawing.Size(235, 21);
            this.cboUsuarios.TabIndex = 0;
            this.cboUsuarios.Leave += new System.EventHandler(this.cboUsuarios_Leave);
            // 
            // lblUsuario
            // 
            this.lblUsuario.AutoSize = true;
            this.lblUsuario.Dock = System.Windows.Forms.DockStyle.Fill;
            this.lblUsuario.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblUsuario.Location = new System.Drawing.Point(3, 1);
            this.lblUsuario.Margin = new System.Windows.Forms.Padding(3, 1, 3, 0);
            this.lblUsuario.Name = "lblUsuario";
            this.lblUsuario.Size = new System.Drawing.Size(114, 19);
            this.lblUsuario.TabIndex = 0;
            this.lblUsuario.Text = "Usuário:";
            // 
            // lblSenha
            // 
            this.lblSenha.AutoSize = true;
            this.lblSenha.Dock = System.Windows.Forms.DockStyle.Fill;
            this.lblSenha.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSenha.Location = new System.Drawing.Point(3, 41);
            this.lblSenha.Margin = new System.Windows.Forms.Padding(3, 1, 3, 0);
            this.lblSenha.Name = "lblSenha";
            this.lblSenha.Size = new System.Drawing.Size(114, 19);
            this.lblSenha.TabIndex = 1;
            this.lblSenha.Text = "Senha:";
            // 
            // txtSenha
            // 
            this.tblLayoutPrincipal.SetColumnSpan(this.txtSenha, 2);
            this.txtSenha.Dock = System.Windows.Forms.DockStyle.Fill;
            this.txtSenha.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.txtSenha.Location = new System.Drawing.Point(3, 60);
            this.txtSenha.Margin = new System.Windows.Forms.Padding(3, 0, 3, 0);
            this.txtSenha.Name = "txtSenha";
            this.txtSenha.PasswordChar = 'º';
            this.txtSenha.Size = new System.Drawing.Size(235, 21);
            this.txtSenha.TabIndex = 1;
            // 
            // btnCancelar
            // 
            this.btnCancelar.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnCancelar.DialogResult = System.Windows.Forms.DialogResult.Cancel;
            this.btnCancelar.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnCancelar.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnCancelar.Image = global::DesafioTrilhaDoConhecimento.Properties.Resources.btnFechar;
            this.btnCancelar.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnCancelar.Location = new System.Drawing.Point(3, 86);
            this.btnCancelar.Margin = new System.Windows.Forms.Padding(3, 6, 3, 6);
            this.btnCancelar.Name = "btnCancelar";
            this.btnCancelar.Size = new System.Drawing.Size(114, 51);
            this.btnCancelar.TabIndex = 4;
            this.btnCancelar.Text = "Cancelar";
            this.btnCancelar.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnCancelar.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnCancelar.UseVisualStyleBackColor = true;
            this.btnCancelar.Click += new System.EventHandler(this.btnCancelar_Click);
            // 
            // btnEntrar
            // 
            this.btnEntrar.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnEntrar.Dock = System.Windows.Forms.DockStyle.Fill;
            this.btnEntrar.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnEntrar.Image = global::DesafioTrilhaDoConhecimento.Properties.Resources.BtnProximo;
            this.btnEntrar.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnEntrar.Location = new System.Drawing.Point(123, 86);
            this.btnEntrar.Margin = new System.Windows.Forms.Padding(3, 6, 3, 6);
            this.btnEntrar.Name = "btnEntrar";
            this.btnEntrar.Size = new System.Drawing.Size(115, 51);
            this.btnEntrar.TabIndex = 3;
            this.btnEntrar.Text = "Entrar";
            this.btnEntrar.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnEntrar.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnEntrar.UseVisualStyleBackColor = true;
            this.btnEntrar.Click += new System.EventHandler(this.btnEntrar_Click);
            // 
            // pnlPrincipal
            // 
            this.pnlPrincipal.BackColor = System.Drawing.Color.Gainsboro;
            this.pnlPrincipal.BackgroundImage = global::DesafioTrilhaDoConhecimento.Properties.Resources.img_login_retangulosombra;
            this.pnlPrincipal.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.pnlPrincipal.Controls.Add(this.tblLayoutPrincipal);
            this.pnlPrincipal.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pnlPrincipal.Location = new System.Drawing.Point(0, 0);
            this.pnlPrincipal.Name = "pnlPrincipal";
            this.pnlPrincipal.Padding = new System.Windows.Forms.Padding(50, 50, 50, 40);
            this.pnlPrincipal.Size = new System.Drawing.Size(341, 253);
            this.pnlPrincipal.TabIndex = 0;
            this.pnlPrincipal.MouseDown += new System.Windows.Forms.MouseEventHandler(this.tblLayoutPrincipal_MouseDown);
            this.pnlPrincipal.MouseMove += new System.Windows.Forms.MouseEventHandler(this.tblLayoutPrincipal_MouseMove);
            this.pnlPrincipal.MouseUp += new System.Windows.Forms.MouseEventHandler(this.tblLayoutPrincipal_MouseUp);
            // 
            // FrmLogin
            // 
            this.AcceptButton = this.btnEntrar;
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.CancelButton = this.btnCancelar;
            this.ClientSize = new System.Drawing.Size(341, 253);
            this.Controls.Add(this.pnlPrincipal);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "FrmLogin";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "FrmModeloCadastro";
            this.TransparencyKey = System.Drawing.Color.FromArgb(((int)(((byte)(224)))), ((int)(((byte)(224)))), ((int)(((byte)(224)))));
            this.tblLayoutPrincipal.ResumeLayout(false);
            this.tblLayoutPrincipal.PerformLayout();
            this.pnlPrincipal.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.TableLayoutPanel tblLayoutPrincipal;
        private System.Windows.Forms.Panel pnlPrincipal;
        private System.Windows.Forms.Label lblUsuario;
        private System.Windows.Forms.Label lblSenha;
        private System.Windows.Forms.TextBox txtSenha;
        private System.Windows.Forms.Button btnCancelar;
        private System.Windows.Forms.Button btnEntrar;
        private System.Windows.Forms.ComboBox cboUsuarios;
    }
}