using Business;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KnowledgeTrail
{
    public partial class FrmBuscar : Form
    {
        public FrmBuscar()
        {
            InitializeComponent();
        }

        private void txtBuscar_TextChanged(object sender, EventArgs e)
        {
            Buscar($"SELECT ID, CPF, Nome, Sobrenome, Categoria, SalarioBase FROM Pessoas WHERE [CPF] + ' ' + [Nome] + ' ' + [Sobrenome] LIKE '%{txtBuscar.Text}%'");
        }

        private void frmBuscar_Load(object sender, EventArgs e)
        {
            Buscar("SELECT * FROM Pessoas");
        }
        
        private void Buscar(string instrucaoSQL)
        {
            dgvPessoas.DataSource = null;

            var pessoa = new Pessoas();
            dgvPessoas.DataSource = pessoa.Buscar(instrucaoSQL);
            dgvPessoas.Columns.Add("Salario","Salario Calculado");

            foreach (DataGridViewColumn column in dgvPessoas.Columns)
            {
                if (column.Name == "Salario" ||  column.Name == "CPF" || column.Name == "Nome" || column.Name == "Sobrenome" || column.Name == "Categoria" || column.Name == "SalarioBase")
                {
                    column.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill; 
                }
                else
                {
                    column.Visible = false;
                }
            }

            foreach (DataGridViewRow row in dgvPessoas.Rows)
            {
                var categoria = row.Cells["Categoria"].Value.ToString();
                var salarioBase = Convert.ToDouble(row.Cells["SalarioBase"].Value);
                row.Cells["Salario"].Value = pessoa.GetSalario(categoria, salarioBase);
            }
        }

        private void dgvPessoas_DoubleClick(object sender, EventArgs e)
        {
            if (dgvPessoas.CurrentRow != null)
            {
                var pessoa = new Pessoas();
                pessoa.Id = Convert.ToInt32(dgvPessoas.CurrentRow.Cells["ID"].Value);
                pessoa.CPF = Convert.ToString(dgvPessoas.CurrentRow.Cells["CPF"].Value);
                pessoa.Nome = Convert.ToString(dgvPessoas.CurrentRow.Cells["Nome"].Value);
                pessoa.Sobrenome = Convert.ToString(dgvPessoas.CurrentRow.Cells["Sobrenome"].Value);
                pessoa.Sexo = Convert.ToString(dgvPessoas.CurrentRow.Cells["Sexo"].Value);
                pessoa.Email = Convert.ToString(dgvPessoas.CurrentRow.Cells["Email"].Value);
                pessoa.Categoria = Convert.ToString(dgvPessoas.CurrentRow.Cells["Categoria"].Value);
                pessoa.SalarioBase = Convert.ToDouble(dgvPessoas.CurrentRow.Cells["SalarioBase"].Value);
                pessoa.CEP = Convert.ToString(dgvPessoas.CurrentRow.Cells["CEP"].Value);
                pessoa.Endereco = Convert.ToString(dgvPessoas.CurrentRow.Cells["Endereco"].Value);
                pessoa.Numero = Convert.ToString(dgvPessoas.CurrentRow.Cells["Numero"].Value);
                pessoa.Bairro = Convert.ToString(dgvPessoas.CurrentRow.Cells["Bairro"].Value);
                pessoa.UF = Convert.ToString(dgvPessoas.CurrentRow.Cells["UF"].Value);
                pessoa.Cidade = Convert.ToString(dgvPessoas.CurrentRow.Cells["Cidade"].Value);

                if (dgvPessoas.CurrentRow.Cells["Foto"].Value != DBNull.Value)
                {
                    pessoa.foto = (byte[])dgvPessoas.CurrentRow.Cells["Foto"].Value;
                }

                FrmCadastroPessoas frmParent = (FrmCadastroPessoas)this.Owner;
                frmParent.SetDados(pessoa);
                frmParent.BuscarFilhos();
                this.Close();
            }            
            
        }

        private void btnImprimir_Click(object sender, EventArgs e)
        {

            Reports.FrmPessoasReport report = new Reports.FrmPessoasReport();
            report.FonteDeDados = $"SELECT * FROM Pessoas WHERE [CPF] + ' ' + [Nome] + ' ' + [Sobrenome] LIKE '%{txtBuscar.Text}%'";
            report.ShowDialog();
        }

        private void btnExportar_Click(object sender, EventArgs e)
        {
            string lines;

            using (System.IO.StreamWriter file =
            new System.IO.StreamWriter(@"C:\Pessoas.txt"))
            {
     
                lines = "CPF;Nome;Sobrenome;Email;Categoria;";                    
                file.WriteLine(lines);

                foreach (DataGridViewRow row in dgvPessoas.Rows)
                {
                    lines = row.Cells["CPF"].Value + ";" + row.Cells["Nome"].Value + ";" + row.Cells["Sobrenome"].Value + ";" + row.Cells["Email"].Value + ";"+ row.Cells["Categoria"].Value + ";";
                    file.WriteLine(lines);  
                }
            }

            MessageBox.Show(@"Arquivo gerado com sucesso C:\Pessoas.txt");
        }
    }
}
