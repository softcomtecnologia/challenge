
namespace KnowledgeTrail
{
    partial class FrmCadastroPessoas
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FrmCadastroPessoas));
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            this.txtNome = new System.Windows.Forms.TextBox();
            this.lblNome = new System.Windows.Forms.Label();
            this.lblSobrenome = new System.Windows.Forms.Label();
            this.txtSobreNome = new System.Windows.Forms.TextBox();
            this.lblEmail = new System.Windows.Forms.Label();
            this.txtEmail = new System.Windows.Forms.TextBox();
            this.grpEndereco = new System.Windows.Forms.GroupBox();
            this.cboCidade = new System.Windows.Forms.ComboBox();
            this.lblCidade = new System.Windows.Forms.Label();
            this.cboUF = new System.Windows.Forms.ComboBox();
            this.lblUF = new System.Windows.Forms.Label();
            this.txtBairro = new System.Windows.Forms.TextBox();
            this.lblBairro = new System.Windows.Forms.Label();
            this.txtNumero = new System.Windows.Forms.TextBox();
            this.lblNumero = new System.Windows.Forms.Label();
            this.txtEndereco = new System.Windows.Forms.TextBox();
            this.lblEndereco = new System.Windows.Forms.Label();
            this.btnPesquisaCep = new System.Windows.Forms.Button();
            this.txtCEP = new System.Windows.Forms.MaskedTextBox();
            this.lblCep = new System.Windows.Forms.Label();
            this.lblCPF = new System.Windows.Forms.Label();
            this.txtCPF = new System.Windows.Forms.MaskedTextBox();
            this.cboSexo = new System.Windows.Forms.ComboBox();
            this.lblSexo = new System.Windows.Forms.Label();
            this.cboCategoria = new System.Windows.Forms.ComboBox();
            this.lblCategoria = new System.Windows.Forms.Label();
            this.lblSalarioBase = new System.Windows.Forms.Label();
            this.txtSalarioBase = new System.Windows.Forms.MaskedTextBox();
            this.dgvFilhos = new System.Windows.Forms.DataGridView();
            this.btnSalvarFilho = new System.Windows.Forms.Button();
            this.btnEditarFilho = new System.Windows.Forms.Button();
            this.btnExcluirFilho = new System.Windows.Forms.Button();
            this.grpFilhos = new System.Windows.Forms.GroupBox();
            this.txtIdadeFilho = new System.Windows.Forms.TextBox();
            this.lblIdadeFilho = new System.Windows.Forms.Label();
            this.lblNomeFilho = new System.Windows.Forms.Label();
            this.lblSexoFilho = new System.Windows.Forms.Label();
            this.txtNomeFilho = new System.Windows.Forms.TextBox();
            this.cboSexoFilho = new System.Windows.Forms.ComboBox();
            this.imgFoto = new System.Windows.Forms.PictureBox();
            this.grpFoto = new System.Windows.Forms.GroupBox();
            this.btnCarregarFoto = new System.Windows.Forms.Button();
            this.btnRemoverFoto = new System.Windows.Forms.Button();
            this.btnSalvar = new System.Windows.Forms.Button();
            this.btnCancelar = new System.Windows.Forms.Button();
            this.pnlHeader = new System.Windows.Forms.Panel();
            this.btnPesquisar = new System.Windows.Forms.Button();
            this.btnNovo = new System.Windows.Forms.Button();
            this.openFileDialog1 = new System.Windows.Forms.OpenFileDialog();
            this.grpEndereco.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgvFilhos)).BeginInit();
            this.grpFilhos.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.imgFoto)).BeginInit();
            this.grpFoto.SuspendLayout();
            this.pnlHeader.SuspendLayout();
            this.SuspendLayout();
            // 
            // txtNome
            // 
            this.txtNome.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtNome.Location = new System.Drawing.Point(109, 60);
            this.txtNome.Name = "txtNome";
            this.txtNome.Size = new System.Drawing.Size(140, 21);
            this.txtNome.TabIndex = 1;
            // 
            // lblNome
            // 
            this.lblNome.AutoSize = true;
            this.lblNome.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNome.Location = new System.Drawing.Point(106, 44);
            this.lblNome.Name = "lblNome";
            this.lblNome.Size = new System.Drawing.Size(39, 13);
            this.lblNome.TabIndex = 1;
            this.lblNome.Text = "Nome";
            // 
            // lblSobrenome
            // 
            this.lblSobrenome.AutoSize = true;
            this.lblSobrenome.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSobrenome.Location = new System.Drawing.Point(252, 44);
            this.lblSobrenome.Name = "lblSobrenome";
            this.lblSobrenome.Size = new System.Drawing.Size(72, 13);
            this.lblSobrenome.TabIndex = 2;
            this.lblSobrenome.Text = "Sobrenome";
            // 
            // txtSobreNome
            // 
            this.txtSobreNome.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtSobreNome.Location = new System.Drawing.Point(255, 60);
            this.txtSobreNome.Name = "txtSobreNome";
            this.txtSobreNome.Size = new System.Drawing.Size(158, 21);
            this.txtSobreNome.TabIndex = 2;
            // 
            // lblEmail
            // 
            this.lblEmail.AutoSize = true;
            this.lblEmail.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblEmail.Location = new System.Drawing.Point(9, 83);
            this.lblEmail.Name = "lblEmail";
            this.lblEmail.Size = new System.Drawing.Size(42, 13);
            this.lblEmail.TabIndex = 4;
            this.lblEmail.Text = "E-mail";
            // 
            // txtEmail
            // 
            this.txtEmail.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtEmail.Location = new System.Drawing.Point(12, 99);
            this.txtEmail.Name = "txtEmail";
            this.txtEmail.Size = new System.Drawing.Size(237, 21);
            this.txtEmail.TabIndex = 4;
            // 
            // grpEndereco
            // 
            this.grpEndereco.Controls.Add(this.cboCidade);
            this.grpEndereco.Controls.Add(this.lblCidade);
            this.grpEndereco.Controls.Add(this.cboUF);
            this.grpEndereco.Controls.Add(this.lblUF);
            this.grpEndereco.Controls.Add(this.txtBairro);
            this.grpEndereco.Controls.Add(this.lblBairro);
            this.grpEndereco.Controls.Add(this.txtNumero);
            this.grpEndereco.Controls.Add(this.lblNumero);
            this.grpEndereco.Controls.Add(this.txtEndereco);
            this.grpEndereco.Controls.Add(this.lblEndereco);
            this.grpEndereco.Controls.Add(this.btnPesquisaCep);
            this.grpEndereco.Controls.Add(this.txtCEP);
            this.grpEndereco.Controls.Add(this.lblCep);
            this.grpEndereco.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.grpEndereco.Location = new System.Drawing.Point(12, 125);
            this.grpEndereco.Name = "grpEndereco";
            this.grpEndereco.Size = new System.Drawing.Size(462, 122);
            this.grpEndereco.TabIndex = 6;
            this.grpEndereco.TabStop = false;
            // 
            // cboCidade
            // 
            this.cboCidade.FormattingEnabled = true;
            this.cboCidade.Location = new System.Drawing.Point(200, 86);
            this.cboCidade.Name = "cboCidade";
            this.cboCidade.Size = new System.Drawing.Size(252, 21);
            this.cboCidade.TabIndex = 13;
            // 
            // lblCidade
            // 
            this.lblCidade.AutoSize = true;
            this.lblCidade.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblCidade.Location = new System.Drawing.Point(197, 70);
            this.lblCidade.Name = "lblCidade";
            this.lblCidade.Size = new System.Drawing.Size(45, 13);
            this.lblCidade.TabIndex = 12;
            this.lblCidade.Text = "Cidade";
            // 
            // cboUF
            // 
            this.cboUF.FormattingEnabled = true;
            this.cboUF.Location = new System.Drawing.Point(153, 86);
            this.cboUF.Name = "cboUF";
            this.cboUF.Size = new System.Drawing.Size(41, 21);
            this.cboUF.TabIndex = 12;
            // 
            // lblUF
            // 
            this.lblUF.AutoSize = true;
            this.lblUF.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblUF.Location = new System.Drawing.Point(150, 70);
            this.lblUF.Name = "lblUF";
            this.lblUF.Size = new System.Drawing.Size(21, 13);
            this.lblUF.TabIndex = 10;
            this.lblUF.Text = "UF";
            // 
            // txtBairro
            // 
            this.txtBairro.Location = new System.Drawing.Point(9, 86);
            this.txtBairro.Name = "txtBairro";
            this.txtBairro.Size = new System.Drawing.Size(138, 21);
            this.txtBairro.TabIndex = 11;
            // 
            // lblBairro
            // 
            this.lblBairro.AutoSize = true;
            this.lblBairro.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblBairro.Location = new System.Drawing.Point(6, 70);
            this.lblBairro.Name = "lblBairro";
            this.lblBairro.Size = new System.Drawing.Size(41, 13);
            this.lblBairro.TabIndex = 8;
            this.lblBairro.Text = "Bairro";
            // 
            // txtNumero
            // 
            this.txtNumero.Location = new System.Drawing.Point(407, 39);
            this.txtNumero.Name = "txtNumero";
            this.txtNumero.Size = new System.Drawing.Size(45, 21);
            this.txtNumero.TabIndex = 10;
            // 
            // lblNumero
            // 
            this.lblNumero.AutoSize = true;
            this.lblNumero.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNumero.Location = new System.Drawing.Point(404, 23);
            this.lblNumero.Name = "lblNumero";
            this.lblNumero.Size = new System.Drawing.Size(51, 13);
            this.lblNumero.TabIndex = 6;
            this.lblNumero.Text = "Número";
            // 
            // txtEndereco
            // 
            this.txtEndereco.Location = new System.Drawing.Point(153, 38);
            this.txtEndereco.Name = "txtEndereco";
            this.txtEndereco.Size = new System.Drawing.Size(248, 21);
            this.txtEndereco.TabIndex = 9;
            // 
            // lblEndereco
            // 
            this.lblEndereco.AutoSize = true;
            this.lblEndereco.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblEndereco.Location = new System.Drawing.Point(150, 22);
            this.lblEndereco.Name = "lblEndereco";
            this.lblEndereco.Size = new System.Drawing.Size(59, 13);
            this.lblEndereco.TabIndex = 4;
            this.lblEndereco.Text = "Endereço";
            // 
            // btnPesquisaCep
            // 
            this.btnPesquisaCep.BackColor = System.Drawing.SystemColors.Window;
            this.btnPesquisaCep.FlatAppearance.BorderSize = 0;
            this.btnPesquisaCep.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnPesquisaCep.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnPesquisaCep.ForeColor = System.Drawing.SystemColors.Window;
            this.btnPesquisaCep.Image = ((System.Drawing.Image)(resources.GetObject("btnPesquisaCep.Image")));
            this.btnPesquisaCep.Location = new System.Drawing.Point(92, 36);
            this.btnPesquisaCep.Name = "btnPesquisaCep";
            this.btnPesquisaCep.Size = new System.Drawing.Size(23, 23);
            this.btnPesquisaCep.TabIndex = 8;
            this.btnPesquisaCep.UseVisualStyleBackColor = false;
            this.btnPesquisaCep.Click += new System.EventHandler(this.btnPesquisaCep_Click);
            // 
            // txtCEP
            // 
            this.txtCEP.Location = new System.Drawing.Point(9, 38);
            this.txtCEP.Mask = "99999-999";
            this.txtCEP.Name = "txtCEP";
            this.txtCEP.Size = new System.Drawing.Size(81, 21);
            this.txtCEP.TabIndex = 7;
            // 
            // lblCep
            // 
            this.lblCep.AutoSize = true;
            this.lblCep.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblCep.Location = new System.Drawing.Point(6, 22);
            this.lblCep.Name = "lblCep";
            this.lblCep.Size = new System.Drawing.Size(27, 13);
            this.lblCep.TabIndex = 1;
            this.lblCep.Text = "CEP";
            // 
            // lblCPF
            // 
            this.lblCPF.AutoSize = true;
            this.lblCPF.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblCPF.Location = new System.Drawing.Point(9, 44);
            this.lblCPF.Name = "lblCPF";
            this.lblCPF.Size = new System.Drawing.Size(27, 13);
            this.lblCPF.TabIndex = 7;
            this.lblCPF.Text = "CPF";
            // 
            // txtCPF
            // 
            this.txtCPF.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtCPF.Location = new System.Drawing.Point(12, 60);
            this.txtCPF.Mask = "000,000,000-00";
            this.txtCPF.Name = "txtCPF";
            this.txtCPF.Size = new System.Drawing.Size(90, 21);
            this.txtCPF.TabIndex = 0;
            // 
            // cboSexo
            // 
            this.cboSexo.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cboSexo.FormattingEnabled = true;
            this.cboSexo.Items.AddRange(new object[] {
            "M",
            "F"});
            this.cboSexo.Location = new System.Drawing.Point(419, 59);
            this.cboSexo.Name = "cboSexo";
            this.cboSexo.Size = new System.Drawing.Size(45, 21);
            this.cboSexo.TabIndex = 3;
            // 
            // lblSexo
            // 
            this.lblSexo.AutoSize = true;
            this.lblSexo.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSexo.Location = new System.Drawing.Point(416, 43);
            this.lblSexo.Name = "lblSexo";
            this.lblSexo.Size = new System.Drawing.Size(35, 13);
            this.lblSexo.TabIndex = 10;
            this.lblSexo.Text = "Sexo";
            // 
            // cboCategoria
            // 
            this.cboCategoria.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cboCategoria.FormattingEnabled = true;
            this.cboCategoria.Items.AddRange(new object[] {
            "Advogado",
            "Cozinheiro",
            "Vendedor"});
            this.cboCategoria.Location = new System.Drawing.Point(255, 99);
            this.cboCategoria.Name = "cboCategoria";
            this.cboCategoria.Size = new System.Drawing.Size(123, 21);
            this.cboCategoria.TabIndex = 5;
            // 
            // lblCategoria
            // 
            this.lblCategoria.AutoSize = true;
            this.lblCategoria.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblCategoria.Location = new System.Drawing.Point(252, 83);
            this.lblCategoria.Name = "lblCategoria";
            this.lblCategoria.Size = new System.Drawing.Size(62, 13);
            this.lblCategoria.TabIndex = 12;
            this.lblCategoria.Text = "Categoria";
            // 
            // lblSalarioBase
            // 
            this.lblSalarioBase.AutoSize = true;
            this.lblSalarioBase.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSalarioBase.Location = new System.Drawing.Point(381, 84);
            this.lblSalarioBase.Name = "lblSalarioBase";
            this.lblSalarioBase.Size = new System.Drawing.Size(76, 13);
            this.lblSalarioBase.TabIndex = 13;
            this.lblSalarioBase.Text = "Salário Base";
            // 
            // txtSalarioBase
            // 
            this.txtSalarioBase.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtSalarioBase.Location = new System.Drawing.Point(384, 100);
            this.txtSalarioBase.Name = "txtSalarioBase";
            this.txtSalarioBase.Size = new System.Drawing.Size(80, 21);
            this.txtSalarioBase.TabIndex = 6;
            this.txtSalarioBase.Text = "0";
            this.txtSalarioBase.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            this.txtSalarioBase.Leave += new System.EventHandler(this.txtSalarioBase_Leave);
            // 
            // dgvFilhos
            // 
            this.dgvFilhos.AllowUserToAddRows = false;
            this.dgvFilhos.AllowUserToDeleteRows = false;
            this.dgvFilhos.AllowUserToResizeColumns = false;
            this.dgvFilhos.AllowUserToResizeRows = false;
            dataGridViewCellStyle1.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.Black;
            this.dgvFilhos.AlternatingRowsDefaultCellStyle = dataGridViewCellStyle1;
            this.dgvFilhos.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.dgvFilhos.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvFilhos.Location = new System.Drawing.Point(9, 54);
            this.dgvFilhos.MultiSelect = false;
            this.dgvFilhos.Name = "dgvFilhos";
            this.dgvFilhos.ReadOnly = true;
            this.dgvFilhos.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.dgvFilhos.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect;
            this.dgvFilhos.Size = new System.Drawing.Size(366, 117);
            this.dgvFilhos.TabIndex = 17;
            // 
            // btnSalvarFilho
            // 
            this.btnSalvarFilho.BackColor = System.Drawing.Color.SeaGreen;
            this.btnSalvarFilho.FlatAppearance.BorderSize = 0;
            this.btnSalvarFilho.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnSalvarFilho.ForeColor = System.Drawing.SystemColors.Window;
            this.btnSalvarFilho.Location = new System.Drawing.Point(381, 26);
            this.btnSalvarFilho.Name = "btnSalvarFilho";
            this.btnSalvarFilho.Size = new System.Drawing.Size(75, 23);
            this.btnSalvarFilho.TabIndex = 16;
            this.btnSalvarFilho.Text = "Salvar";
            this.btnSalvarFilho.UseVisualStyleBackColor = false;
            this.btnSalvarFilho.Click += new System.EventHandler(this.btnSalvarFilho_Click);
            // 
            // btnEditarFilho
            // 
            this.btnEditarFilho.BackColor = System.Drawing.Color.RoyalBlue;
            this.btnEditarFilho.FlatAppearance.BorderSize = 0;
            this.btnEditarFilho.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnEditarFilho.ForeColor = System.Drawing.SystemColors.Window;
            this.btnEditarFilho.Location = new System.Drawing.Point(381, 55);
            this.btnEditarFilho.Name = "btnEditarFilho";
            this.btnEditarFilho.Size = new System.Drawing.Size(75, 23);
            this.btnEditarFilho.TabIndex = 17;
            this.btnEditarFilho.Text = "Editar";
            this.btnEditarFilho.UseVisualStyleBackColor = false;
            this.btnEditarFilho.Click += new System.EventHandler(this.btnEditarFilho_Click);
            // 
            // btnExcluirFilho
            // 
            this.btnExcluirFilho.BackColor = System.Drawing.Color.Firebrick;
            this.btnExcluirFilho.FlatAppearance.BorderSize = 0;
            this.btnExcluirFilho.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnExcluirFilho.ForeColor = System.Drawing.SystemColors.Window;
            this.btnExcluirFilho.Location = new System.Drawing.Point(381, 84);
            this.btnExcluirFilho.Name = "btnExcluirFilho";
            this.btnExcluirFilho.Size = new System.Drawing.Size(75, 23);
            this.btnExcluirFilho.TabIndex = 18;
            this.btnExcluirFilho.Text = "Excluir";
            this.btnExcluirFilho.UseVisualStyleBackColor = false;
            this.btnExcluirFilho.Click += new System.EventHandler(this.btnExcluirFilho_Click);
            // 
            // grpFilhos
            // 
            this.grpFilhos.Controls.Add(this.txtIdadeFilho);
            this.grpFilhos.Controls.Add(this.lblIdadeFilho);
            this.grpFilhos.Controls.Add(this.lblNomeFilho);
            this.grpFilhos.Controls.Add(this.lblSexoFilho);
            this.grpFilhos.Controls.Add(this.txtNomeFilho);
            this.grpFilhos.Controls.Add(this.btnExcluirFilho);
            this.grpFilhos.Controls.Add(this.cboSexoFilho);
            this.grpFilhos.Controls.Add(this.dgvFilhos);
            this.grpFilhos.Controls.Add(this.btnEditarFilho);
            this.grpFilhos.Controls.Add(this.btnSalvarFilho);
            this.grpFilhos.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.grpFilhos.Location = new System.Drawing.Point(12, 253);
            this.grpFilhos.Name = "grpFilhos";
            this.grpFilhos.Size = new System.Drawing.Size(462, 177);
            this.grpFilhos.TabIndex = 19;
            this.grpFilhos.TabStop = false;
            this.grpFilhos.Text = "Filhos";
            // 
            // txtIdadeFilho
            // 
            this.txtIdadeFilho.Location = new System.Drawing.Point(243, 29);
            this.txtIdadeFilho.Name = "txtIdadeFilho";
            this.txtIdadeFilho.Size = new System.Drawing.Size(45, 20);
            this.txtIdadeFilho.TabIndex = 15;
            // 
            // lblIdadeFilho
            // 
            this.lblIdadeFilho.AutoSize = true;
            this.lblIdadeFilho.Location = new System.Drawing.Point(240, 12);
            this.lblIdadeFilho.Name = "lblIdadeFilho";
            this.lblIdadeFilho.Size = new System.Drawing.Size(40, 13);
            this.lblIdadeFilho.TabIndex = 28;
            this.lblIdadeFilho.Text = "Idade";
            // 
            // lblNomeFilho
            // 
            this.lblNomeFilho.AutoSize = true;
            this.lblNomeFilho.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNomeFilho.Location = new System.Drawing.Point(6, 12);
            this.lblNomeFilho.Name = "lblNomeFilho";
            this.lblNomeFilho.Size = new System.Drawing.Size(39, 13);
            this.lblNomeFilho.TabIndex = 26;
            this.lblNomeFilho.Text = "Nome";
            // 
            // lblSexoFilho
            // 
            this.lblSexoFilho.AutoSize = true;
            this.lblSexoFilho.Font = new System.Drawing.Font("Tahoma", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSexoFilho.Location = new System.Drawing.Point(291, 12);
            this.lblSexoFilho.Name = "lblSexoFilho";
            this.lblSexoFilho.Size = new System.Drawing.Size(35, 13);
            this.lblSexoFilho.TabIndex = 27;
            this.lblSexoFilho.Text = "Sexo";
            // 
            // txtNomeFilho
            // 
            this.txtNomeFilho.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtNomeFilho.Location = new System.Drawing.Point(9, 28);
            this.txtNomeFilho.Name = "txtNomeFilho";
            this.txtNomeFilho.Size = new System.Drawing.Size(228, 21);
            this.txtNomeFilho.TabIndex = 14;
            // 
            // cboSexoFilho
            // 
            this.cboSexoFilho.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cboSexoFilho.FormattingEnabled = true;
            this.cboSexoFilho.Items.AddRange(new object[] {
            "M",
            "F"});
            this.cboSexoFilho.Location = new System.Drawing.Point(294, 28);
            this.cboSexoFilho.Name = "cboSexoFilho";
            this.cboSexoFilho.Size = new System.Drawing.Size(45, 21);
            this.cboSexoFilho.TabIndex = 16;
            // 
            // imgFoto
            // 
            this.imgFoto.BackColor = System.Drawing.Color.White;
            this.imgFoto.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.imgFoto.Location = new System.Drawing.Point(7, 18);
            this.imgFoto.Name = "imgFoto";
            this.imgFoto.Size = new System.Drawing.Size(214, 187);
            this.imgFoto.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.imgFoto.TabIndex = 20;
            this.imgFoto.TabStop = false;
            // 
            // grpFoto
            // 
            this.grpFoto.Controls.Add(this.btnCarregarFoto);
            this.grpFoto.Controls.Add(this.btnRemoverFoto);
            this.grpFoto.Controls.Add(this.imgFoto);
            this.grpFoto.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.grpFoto.Location = new System.Drawing.Point(480, 44);
            this.grpFoto.Name = "grpFoto";
            this.grpFoto.Size = new System.Drawing.Size(229, 236);
            this.grpFoto.TabIndex = 21;
            this.grpFoto.TabStop = false;
            this.grpFoto.Text = "Foto";
            // 
            // btnCarregarFoto
            // 
            this.btnCarregarFoto.BackColor = System.Drawing.Color.SeaGreen;
            this.btnCarregarFoto.FlatAppearance.BorderSize = 0;
            this.btnCarregarFoto.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnCarregarFoto.ForeColor = System.Drawing.SystemColors.Window;
            this.btnCarregarFoto.Location = new System.Drawing.Point(116, 207);
            this.btnCarregarFoto.Name = "btnCarregarFoto";
            this.btnCarregarFoto.Size = new System.Drawing.Size(105, 23);
            this.btnCarregarFoto.TabIndex = 22;
            this.btnCarregarFoto.Text = "Carregar Foto";
            this.btnCarregarFoto.UseVisualStyleBackColor = false;
            this.btnCarregarFoto.Click += new System.EventHandler(this.btnCarregarFoto_Click);
            // 
            // btnRemoverFoto
            // 
            this.btnRemoverFoto.BackColor = System.Drawing.Color.Firebrick;
            this.btnRemoverFoto.FlatAppearance.BorderSize = 0;
            this.btnRemoverFoto.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnRemoverFoto.ForeColor = System.Drawing.SystemColors.Window;
            this.btnRemoverFoto.Location = new System.Drawing.Point(7, 207);
            this.btnRemoverFoto.Name = "btnRemoverFoto";
            this.btnRemoverFoto.Size = new System.Drawing.Size(105, 23);
            this.btnRemoverFoto.TabIndex = 21;
            this.btnRemoverFoto.Text = "Excluir Foto";
            this.btnRemoverFoto.UseVisualStyleBackColor = false;
            this.btnRemoverFoto.Click += new System.EventHandler(this.btnRemoverFoto_Click);
            // 
            // btnSalvar
            // 
            this.btnSalvar.BackColor = System.Drawing.Color.SeaGreen;
            this.btnSalvar.FlatAppearance.BorderSize = 0;
            this.btnSalvar.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnSalvar.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSalvar.ForeColor = System.Drawing.SystemColors.Window;
            this.btnSalvar.Location = new System.Drawing.Point(597, 383);
            this.btnSalvar.Name = "btnSalvar";
            this.btnSalvar.Size = new System.Drawing.Size(112, 47);
            this.btnSalvar.TabIndex = 24;
            this.btnSalvar.Text = "Salvar";
            this.btnSalvar.UseVisualStyleBackColor = false;
            this.btnSalvar.Click += new System.EventHandler(this.btnSalvar_Click);
            // 
            // btnCancelar
            // 
            this.btnCancelar.BackColor = System.Drawing.Color.Firebrick;
            this.btnCancelar.FlatAppearance.BorderSize = 0;
            this.btnCancelar.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnCancelar.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnCancelar.ForeColor = System.Drawing.SystemColors.Window;
            this.btnCancelar.Location = new System.Drawing.Point(479, 383);
            this.btnCancelar.Name = "btnCancelar";
            this.btnCancelar.Size = new System.Drawing.Size(112, 47);
            this.btnCancelar.TabIndex = 23;
            this.btnCancelar.Text = "Cancelar";
            this.btnCancelar.UseVisualStyleBackColor = false;
            this.btnCancelar.Click += new System.EventHandler(this.btnCancelar_Click);
            // 
            // pnlHeader
            // 
            this.pnlHeader.BackColor = System.Drawing.Color.Gold;
            this.pnlHeader.Controls.Add(this.btnPesquisar);
            this.pnlHeader.Controls.Add(this.btnNovo);
            this.pnlHeader.Location = new System.Drawing.Point(0, 0);
            this.pnlHeader.Name = "pnlHeader";
            this.pnlHeader.Size = new System.Drawing.Size(717, 38);
            this.pnlHeader.TabIndex = 25;
            // 
            // btnPesquisar
            // 
            this.btnPesquisar.BackColor = System.Drawing.Color.RoyalBlue;
            this.btnPesquisar.FlatAppearance.BorderSize = 0;
            this.btnPesquisar.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnPesquisar.ForeColor = System.Drawing.SystemColors.Window;
            this.btnPesquisar.Location = new System.Drawing.Point(609, 6);
            this.btnPesquisar.Name = "btnPesquisar";
            this.btnPesquisar.Size = new System.Drawing.Size(98, 28);
            this.btnPesquisar.TabIndex = 1;
            this.btnPesquisar.Text = "Pesquisar";
            this.btnPesquisar.UseVisualStyleBackColor = false;
            this.btnPesquisar.Click += new System.EventHandler(this.btnPesquisar_Click);
            // 
            // btnNovo
            // 
            this.btnNovo.BackColor = System.Drawing.Color.RoyalBlue;
            this.btnNovo.FlatAppearance.BorderSize = 0;
            this.btnNovo.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnNovo.ForeColor = System.Drawing.SystemColors.Window;
            this.btnNovo.Location = new System.Drawing.Point(505, 6);
            this.btnNovo.Name = "btnNovo";
            this.btnNovo.Size = new System.Drawing.Size(98, 28);
            this.btnNovo.TabIndex = 0;
            this.btnNovo.Text = "Novo";
            this.btnNovo.UseVisualStyleBackColor = false;
            this.btnNovo.Click += new System.EventHandler(this.btnNovo_Click);
            // 
            // openFileDialog1
            // 
            this.openFileDialog1.FileName = "openFileDialog1";
            this.openFileDialog1.Filter = "\"Image Files|*.png;*.jpg;*.jpeg\"";
            // 
            // FrmCadastroPessoas
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Window;
            this.ClientSize = new System.Drawing.Size(717, 442);
            this.Controls.Add(this.pnlHeader);
            this.Controls.Add(this.btnSalvar);
            this.Controls.Add(this.txtSalarioBase);
            this.Controls.Add(this.btnCancelar);
            this.Controls.Add(this.lblSalarioBase);
            this.Controls.Add(this.lblCategoria);
            this.Controls.Add(this.cboCategoria);
            this.Controls.Add(this.lblSexo);
            this.Controls.Add(this.cboSexo);
            this.Controls.Add(this.txtCPF);
            this.Controls.Add(this.lblCPF);
            this.Controls.Add(this.grpEndereco);
            this.Controls.Add(this.txtEmail);
            this.Controls.Add(this.lblEmail);
            this.Controls.Add(this.txtSobreNome);
            this.Controls.Add(this.lblSobrenome);
            this.Controls.Add(this.lblNome);
            this.Controls.Add(this.txtNome);
            this.Controls.Add(this.grpFilhos);
            this.Controls.Add(this.grpFoto);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "FrmCadastroPessoas";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Knowlegde Trail - Cadastro de Pessoas";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.FrmCadastroPessoas_FormClosed);
            this.Load += new System.EventHandler(this.FrmCadastroPessoas_Load);
            this.grpEndereco.ResumeLayout(false);
            this.grpEndereco.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgvFilhos)).EndInit();
            this.grpFilhos.ResumeLayout(false);
            this.grpFilhos.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.imgFoto)).EndInit();
            this.grpFoto.ResumeLayout(false);
            this.pnlHeader.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtNome;
        private System.Windows.Forms.Label lblNome;
        private System.Windows.Forms.Label lblSobrenome;
        private System.Windows.Forms.TextBox txtSobreNome;
        private System.Windows.Forms.Label lblEmail;
        private System.Windows.Forms.TextBox txtEmail;
        private System.Windows.Forms.GroupBox grpEndereco;
        private System.Windows.Forms.ComboBox cboUF;
        private System.Windows.Forms.Label lblUF;
        private System.Windows.Forms.TextBox txtBairro;
        private System.Windows.Forms.Label lblBairro;
        private System.Windows.Forms.TextBox txtNumero;
        private System.Windows.Forms.Label lblNumero;
        private System.Windows.Forms.TextBox txtEndereco;
        private System.Windows.Forms.Label lblEndereco;
        private System.Windows.Forms.Button btnPesquisaCep;
        private System.Windows.Forms.MaskedTextBox txtCEP;
        private System.Windows.Forms.Label lblCep;
        private System.Windows.Forms.ComboBox cboCidade;
        private System.Windows.Forms.Label lblCidade;
        private System.Windows.Forms.Label lblCPF;
        private System.Windows.Forms.MaskedTextBox txtCPF;
        private System.Windows.Forms.ComboBox cboSexo;
        private System.Windows.Forms.Label lblSexo;
        private System.Windows.Forms.ComboBox cboCategoria;
        private System.Windows.Forms.Label lblCategoria;
        private System.Windows.Forms.Label lblSalarioBase;
        private System.Windows.Forms.MaskedTextBox txtSalarioBase;
        private System.Windows.Forms.DataGridView dgvFilhos;
        private System.Windows.Forms.Button btnSalvarFilho;
        private System.Windows.Forms.Button btnEditarFilho;
        private System.Windows.Forms.Button btnExcluirFilho;
        private System.Windows.Forms.GroupBox grpFilhos;
        private System.Windows.Forms.PictureBox imgFoto;
        private System.Windows.Forms.GroupBox grpFoto;
        private System.Windows.Forms.Button btnCarregarFoto;
        private System.Windows.Forms.Button btnRemoverFoto;
        private System.Windows.Forms.Button btnSalvar;
        private System.Windows.Forms.Button btnCancelar;
        private System.Windows.Forms.Panel pnlHeader;
        private System.Windows.Forms.Button btnPesquisar;
        private System.Windows.Forms.Button btnNovo;
        private System.Windows.Forms.TextBox txtIdadeFilho;
        private System.Windows.Forms.Label lblIdadeFilho;
        private System.Windows.Forms.Label lblNomeFilho;
        private System.Windows.Forms.Label lblSexoFilho;
        private System.Windows.Forms.TextBox txtNomeFilho;
        private System.Windows.Forms.ComboBox cboSexoFilho;
        private System.Windows.Forms.OpenFileDialog openFileDialog1;
    }
}

