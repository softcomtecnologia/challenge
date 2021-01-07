using DesafioTrilhaDoConhecimento.Controllers.ControllersDataBase;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioTrilhaDoConhecimento
{
    public class Filho
    {
        SqlConnection connection = Conexao.Conn();

        public List<DataBase.Filho> Lista()
        {
            //Cria um comando sql para utilizar no Data Adapter
            var queryString = "select * from Filhos";
            var sqlCommand = new SqlCommand(queryString, connection);

            if (sqlCommand.Connection.State == ConnectionState.Closed)
                sqlCommand.Connection.Open();

            var sqlDataAdapter = new SqlDataAdapter();
            sqlDataAdapter.SelectCommand = sqlCommand;

            var dataTable = new DataTable();
            sqlDataAdapter.Fill(dataTable);

            var filhos = dataTable.AsEnumerable().Select(linha => new DataBase.Filho
            {
                Id = linha.Field<Int32>("id"),
                Nome = linha.Field<String>("nome"),
                Sexo = linha.Field<String>("sexo"),
                Idade = linha.Field<int>("idade"),
                IdPessoas = linha.Field<int>("id_pessoas")

            }).ToList();

            connection.Close();
            sqlCommand.Connection.Close();

            return filhos;

        }

        public void Salvar(DataBase.Filho filho)
        {
            if (String.IsNullOrEmpty(filho.Nome))
                throw new Exception("O campo Nome deve ser Informado");

            if (filho.IdPessoas == 0)
                throw new Exception("O filho deve ser vinculado à uma Pessoa");

            if (filho.Idade == 0)
                throw new Exception("O campo Idade deve ser Informado");

            if (String.IsNullOrEmpty(filho.Sexo))
                throw new Exception("O campo Sexo deve ser Informado");

            var queryString = "insert into Filhos (" +
                                            "nome, " +
                                            "idade, " +
                                            "sexo, " +
                                            "id_pessoas) " +
                              $"values (" +
                                            $"'{filho.Nome}'," +
                                            $"{filho.Idade}," +
                                            $"'{filho.Sexo}'," +
                                            $"{filho.IdPessoas})";

            if (filho.Id != 0)
            {
                queryString = $"update Filhos set " +
                                            $"nome='{filho.Nome}'," +
                                            $"idade={filho.Idade}," +
                                            $"sexo='{filho.Sexo}'," +
                                            $"id_pessoas={filho.IdPessoas} " +
                              $" where id = {filho.Id}";
            }

            var sqlCommand = new SqlCommand(queryString, connection);

            try
            {
                if (sqlCommand.Connection.State == ConnectionState.Closed)
                    sqlCommand.Connection.Open();

                sqlCommand.ExecuteNonQuery();
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
            var queryString = "delete from Filhos where id=" + id;

            var sqlCommand = new SqlCommand(queryString, connection);

            if (sqlCommand.Connection.State == ConnectionState.Closed)
                sqlCommand.Connection.Open();

            sqlCommand.ExecuteNonQuery();

            connection.Close();
            sqlCommand.Connection.Close();

        }

        public void ExcluirPorIdDoPai(int idPai)
        {
            var queryString = "delete from Filhos where id_pessoas=" + idPai;

            var sqlCommand = new SqlCommand(queryString, connection);

            if (sqlCommand.Connection.State == ConnectionState.Closed)
                sqlCommand.Connection.Open();

            sqlCommand.ExecuteNonQuery();

            connection.Close();
            sqlCommand.Connection.Close();

        }

        public DataBase.Filho BuscarPorId(int id)
        {
            var queryString = "select * from Filhos where id=" + id;
            var sqlCommand = new SqlCommand(queryString, connection);

            if (sqlCommand.Connection.State == ConnectionState.Closed)
                sqlCommand.Connection.Open();

            var adapter = new SqlDataAdapter();
            adapter.SelectCommand = sqlCommand;

            var table = new DataTable();
            adapter.Fill(table);

            var filho = table.AsEnumerable().Select(linha => new DataBase.Filho
            {
                Id = linha.Field<Int32>("id"),
                Nome = linha.Field<String>("nome"),
                Sexo = linha.Field<String>("sexo"),
                Idade = linha.Field<int>("idade"),
                IdPessoas = linha.Field<int>("id_pessoas")

            }).ToList().FirstOrDefault();

            connection.Close();
            sqlCommand.Connection.Close();

            return filho;
        }

        public List<DataBase.Filho> BuscarPorIdDoPai(int idPai)
        {
            //Cria um comando sql para utilizar no Data Adapter
            var queryString = "select * from Filhos where id_pessoas=" + idPai;
            var sqlCommand = new SqlCommand(queryString, connection);

            if (sqlCommand.Connection.State == ConnectionState.Closed)
                sqlCommand.Connection.Open();

            var sqlDataAdapter = new SqlDataAdapter();
            sqlDataAdapter.SelectCommand = sqlCommand;

            var dataTable = new DataTable();
            sqlDataAdapter.Fill(dataTable);

            var filhos = dataTable.AsEnumerable().Select(linha => new DataBase.Filho
            {
                Id = linha.Field<Int32>("id"),
                Nome = linha.Field<String>("nome"),
                Sexo = linha.Field<String>("sexo"),
                Idade = linha.Field<int>("idade"),
                IdPessoas = linha.Field<int>("id_pessoas")

            }).ToList();

            connection.Close();
            sqlCommand.Connection.Close();

            return filhos;

        }
    }
}
