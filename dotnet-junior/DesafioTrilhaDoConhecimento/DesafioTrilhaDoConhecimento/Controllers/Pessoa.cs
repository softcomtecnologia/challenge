using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Drawing.Imaging;
using System.Drawing;
using DesafioTrilhaDoConhecimento.Controllers.ControllersDataBase;

namespace DesafioTrilhaDoConhecimento
{
    public class Pessoa
    {
        SqlConnection connection = Conexao.Conn();

        public List<DataBase.Pessoa> Lista() 
        {
            //Cria um comando sql para utilizar no Data Adapter
            var queryString = "select * from pessoas";
            var sqlCommand = new SqlCommand(queryString, connection);
            if (sqlCommand.Connection.State == ConnectionState.Closed)
                sqlCommand.Connection.Open();

            var sqlDataAdapter = new SqlDataAdapter();
            sqlDataAdapter.SelectCommand = sqlCommand;

            var dataTable = new DataTable();
            sqlDataAdapter.Fill(dataTable);

            var pessoas = dataTable.AsEnumerable().Select(linha => new DataBase.Pessoa
            {
                Id = linha.Field<Int32>("id"),
                Nome = linha.Field<String>("nome"),
                Sobrenome = linha.Field<String>("sobrenome"),
                Email = linha.Field<String>("email"),
                Pais = linha.Field<String>("pais"),
                Estado = linha.Field<String>("estado"),
                Cidade = linha.Field<String>("cidade"),
                Bairro = linha.Field<String>("bairro"),
                Logradouro = linha.Field<String>("logradouro"),
                Numero = linha.Field<String>("numero"),
                Complemento = linha.Field<String>("complemento"),
                IdCategoria = linha.Field<Int32>("id_categoria"),
                Sexo = linha.Field<String>("sexo"),
                SalarioBase = linha.Field<double>("salario_base"),
                Cpf = linha.Field<String>("cpf"),
                Foto = Util.SetByteArrayGetImage(linha.Field<Byte[]>("foto")),
                Cep = linha.Field<String>("cep"),
                Senha = linha.Field<String>("Senha")

            }).ToList();

            connection.Close();
            sqlCommand.Connection.Close();

            return pessoas;
            
        }

        public DataBase.Pessoa Salvar(DataBase.Pessoa pessoa)
        {
            if (String.IsNullOrEmpty(pessoa.Nome))
                throw new Exception("O campo Nome deve ser Informado");

            if (pessoa.IdCategoria == 0)
                throw new Exception("O campo categoria deve ser Informado");

            var queryString = $"USE Desafio " + 
                               "insert into pessoas (nome, " +
                                                   "sobrenome, " +
                                                   "email, " +
                                                   "cep, " +
                                                   "pais, " +
                                                   "estado, " +
                                                   "cidade, " +
                                                   "bairro, " +
                                                   "logradouro, " +
                                                   "numero, " +
                                                   "complemento, " +
                                                   "id_categoria, " +
                                                   "sexo, " +
                                                   "salario_base, " +
                                                   "cpf, " +
                                                   "foto, " +
                                                   "Senha) " +
                                $"values ('{pessoa.Nome}'," +
                                        $"'{pessoa.Sobrenome}'," +
                                        $"'{pessoa.Email}'," +
                                        $"'{pessoa.Cep}'," +
                                        $"'{pessoa.Pais}'," +
                                        $"'{pessoa.Estado}'," +
                                        $"'{pessoa.Cidade}'," +
                                        $"'{pessoa.Bairro}', " +
                                        $"'{pessoa.Logradouro}', " +
                                        $"'{pessoa.Numero}', " +
                                        $"'{pessoa.Complemento}', " +
                                        $"{pessoa.IdCategoria}, " +
                                        $"'{pessoa.Sexo}', " +
                                        $"{pessoa.SalarioBase}, " +
                                        $"'{pessoa.Cpf}', " +
                                        $"@foto, " +
                                        $"'{pessoa.Senha}')";

            if (pessoa.Id != 0)
            {
                queryString = $"update pessoas set nome='{pessoa.Nome}', " +
                                                    $"sobrenome='{pessoa.Sobrenome}', " +
                                                    $"email='{pessoa.Email}', " +
                                                    $"cep='{pessoa.Cep}', " +
                                                    $"pais='{pessoa.Pais}', " +
                                                    $"estado='{pessoa.Estado}', " +
                                                    $"cidade='{pessoa.Cidade}', " +
                                                    $"bairro='{pessoa.Bairro} ', " +
                                                    $"logradouro='{pessoa.Logradouro}', " +
                                                    $"numero='{pessoa.Numero}', " +
                                                    $"complemento='{pessoa.Complemento}', " +
                                                    $"id_categoria={pessoa.IdCategoria}, " +
                                                    $"sexo='{pessoa.Sexo}', " +
                                                    $"salario_base={pessoa.SalarioBase}, " +
                                                    $"cpf='{pessoa.Cpf}', " +
                                                    $"foto=@foto, " +
                                                    $"Senha='{pessoa.Senha}' " +
                                                    $" where id = {pessoa.Id}";
            }

            var imagem = new SqlParameter("@foto", SqlDbType.Binary);
            imagem.Value = Controllers.Util.SetImageGetByteArray(pessoa.Foto);

            var sqlCommand = new SqlCommand(queryString, connection);

            try
            {
                sqlCommand.Parameters.Add(imagem);
                if(sqlCommand.Connection.State == ConnectionState.Closed)
                    sqlCommand.Connection.Open();

                sqlCommand.ExecuteNonQuery();

                var controllerPessoa = new Pessoa();

                if (pessoa.Id > 0)
                {
                    return pessoa;
                }

                var idSalvo = (from p in controllerPessoa.Lista()
                              select p).LastOrDefault().Id;

                return controllerPessoa.BuscarPorId(idSalvo);

            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                connection.Close();
                sqlCommand.Connection.Close();
            }

        }

        public void Excluir(int id)
        {
            var queryString = "delete from Pessoas where id=" + id;

            var sqlCommand = new SqlCommand(queryString, connection);

            if (sqlCommand.Connection.State == ConnectionState.Closed)
                sqlCommand.Connection.Open();
            
            sqlCommand.ExecuteNonQuery();

            connection.Close();
            sqlCommand.Connection.Close();
        }

        public DataBase.Pessoa BuscarPorId(int id)
        {
           
            var queryString = "select * from Pessoas where id=" + id;
            var sqlCommand = new SqlCommand(queryString, connection);

            if (sqlCommand.Connection.State == ConnectionState.Closed)
                sqlCommand.Connection.Open();

            var adapter = new SqlDataAdapter();
            adapter.SelectCommand = sqlCommand;

            var table = new DataTable();
            adapter.Fill(table);

            var pessoa = table.AsEnumerable().Select(linha => new DataBase.Pessoa
            {
                Id = linha.Field<Int32>("id"),
                Nome = linha.Field<String>("nome"),
                Sobrenome = linha.Field<String>("sobrenome"),
                Email = linha.Field<String>("email"),
                //Cep = linha.Field<String>("logradouro_codigo"),
                Pais = linha.Field<String>("pais"),
                Estado = linha.Field<String>("estado"),
                Cidade = linha.Field<String>("cidade"),
                Bairro = linha.Field<String>("bairro"),
                Logradouro = linha.Field<String>("logradouro"),
                Numero = linha.Field<String>("numero"),
                Complemento = linha.Field<String>("complemento"),
                IdCategoria = linha.Field<Int32>("id_categoria"),
                Sexo = linha.Field<String>("sexo"),
                SalarioBase = linha.Field<double>("salario_base"),
                Cpf = linha.Field<String>("cpf"),
                Foto = Util.SetByteArrayGetImage(linha.Field<Byte[]>("foto")),
                Senha = linha.Field<String>("Senha")


            }).FirstOrDefault();

            connection.Close();
            sqlCommand.Connection.Close();

            return pessoa;
            
        }

    }
}
