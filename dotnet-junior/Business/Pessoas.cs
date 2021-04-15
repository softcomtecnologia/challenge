using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.Net;
using System.IO;

namespace Business
{
    public class Pessoas : Database.Database, IPessoas1
    {
        public int Id { get; set; }
        public string CPF { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Sexo { get; set; }
        public string Email { get; set; }
        public string Categoria { get; set; }
        public double SalarioBase { get; set; }
        public string CEP { get; set; }
        public string Endereco { get; set; }
        public string Numero { get; set; }
        public string Bairro { get; set; }
        public string UF { get; set; }
        public string Cidade { get; set; }
        public byte[] foto { get; set; }

        private int Processos { get; set; }
        private int HorasTrabalhadas { get; set; }        
        private int DiasTrabalhados { get; set; }
        private double VendasNoMes { get; set; }

        public Pessoas() { }

        public bool Salvar()
        {
            try
            {
                var strSQL = "INSERT INTO Pessoas (CPF, Nome, Sobrenome, Sexo, Email, Categoria, SalarioBase, CEP, Endereco, Numero, Bairro, UF, Cidade, Foto)" +
                            $"VALUES ('{this.CPF}', '{this.Nome}', '{this.Sobrenome}', '{this.Sexo}', '{this.Email}', '{this.Categoria}', '{this.SalarioBase}', '{this.CEP}', '{this.Endereco}', '{this.Numero}', '{this.Bairro}', '{this.UF}', '{this.Cidade}', @foto)";

                SqlParameter[] parametros =
                {
                    new SqlParameter("@foto", SqlDbType.Binary) { Value = foto }
                };

                ExecutarSQL(strSQL, parametros);                

                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Registro não foi salvo. {ex.Message}");
            }
            
        }

        public bool Atualizar(int pessoaId)
        {
            try
            {
                var strSQL = $"UPDATE Pessoas SET CPF='{this.CPF}', Nome='{this.Nome}', Sobrenome='{this.Sobrenome}', Sexo='{this.Sexo}', " +
                            $"Email='{this.Email}', Categoria='{this.Categoria}', SalarioBase='{this.SalarioBase}', CEP='{this.CEP}', " +
                            $"Endereco='{this.Endereco}', Numero='{this.Numero}', Bairro='{this.Bairro}', UF='{this.UF}', Cidade='{this.Cidade}', Foto=@foto " +
                            $"WHERE Pessoas.ID={pessoaId}";

                SqlParameter[] parametros =
                {
                    new SqlParameter("@foto", SqlDbType.Binary) { Value = foto }
                };

                ExecutarSQL(strSQL, parametros);
                                                                                                                                                                                                                                                                    
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Registro não foi atualizado. {ex.Message}");
            }

        }

        public DataTable Buscar(string instrucaoSQL)
        {
            return ExecutarSelect(instrucaoSQL);
        }

        public bool VerificarCEP()
        {
            
            if (BuscaCep.LocalizarEndereco(this.CEP))
            {
                this.Endereco = BuscaCep.Endereco;
                this.Bairro = BuscaCep.Bairro;
                this.Cidade = BuscaCep.Cidade;
                this.UF = BuscaCep.UF;

                return true;
            }

            return false;
        }

        public List<Pessoas> GetListPessoas(string instrucaoSQL)
        {
            DataTable dataTable = ExecutarSelect(instrucaoSQL);

            var pessoas = dataTable.AsEnumerable().Select(linha => new Pessoas
            {
                Id = linha.Field<Int32>("ID"),
                CPF = linha.Field<String>("CPF"),
                Nome = linha.Field<String>("Nome"),
                Sobrenome = linha.Field<String>("Sobrenome"),
                Sexo = linha.Field<String>("Sexo"),
                Email = linha.Field<String>("Email"),
                Categoria = linha.Field<String>("Categoria"),
                SalarioBase = linha.Field<Double>("SalarioBase"),
                CEP = linha.Field<String>("CEP"),
                Endereco = linha.Field<String>("Endereco"),
                Numero = linha.Field<String>("Numero"),
                Bairro = linha.Field<String>("Bairro"),
                UF = linha.Field<String>("Cidade"),
                Cidade = linha.Field<String>("Cidade"),
                foto = linha.Field<Byte[]>("foto")
            }).ToList();

            return pessoas;
        }

        public double GetSalario(string categoria, double salariobase)
        {
            if (categoria != String.Empty)
            {
                var rand = new Random();

                switch (categoria)
                {
                    case "Advogado":
                        Processos = rand.Next(50, 100);
                        return Processos * salariobase;
                    
                    case "Cozinheiro":
                        HorasTrabalhadas = rand.Next(100,176);
                        return HorasTrabalhadas * salariobase;

                    case "Vendedor":
                        DiasTrabalhados = rand.Next(20, 24);
                        VendasNoMes = rand.Next(10000, 30000);
                        return DiasTrabalhados * 8 * salariobase + (5 * (VendasNoMes/100));

                    default:
                        return 0;
                }

            }
            return 0;
        }
    }
}
