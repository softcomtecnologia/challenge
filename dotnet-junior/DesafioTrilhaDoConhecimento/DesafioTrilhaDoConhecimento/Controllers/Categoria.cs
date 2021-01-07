using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using DesafioTrilhaDoConhecimento.Controllers.ControllersDataBase;

namespace DesafioTrilhaDoConhecimento
{
    public class Categoria
    {
        SqlConnection connection = Conexao.Conn();

        public List<DataBase.Categoria> Lista() 
        {            
            //Cria um comando sql para utilizar no Data Adapter
            var queryString = "select * from categorias";
            var sqlCommand = new SqlCommand(queryString, connection);
            if (sqlCommand.Connection.State == ConnectionState.Closed)
                sqlCommand.Connection.Open();

            var sqlDataAdapter = new SqlDataAdapter();
            sqlDataAdapter.SelectCommand = sqlCommand;

            var dataTable = new DataTable();
            sqlDataAdapter.Fill(dataTable);

            var categorias = dataTable.AsEnumerable().Select(linha => new DataBase.Categoria
            {
                Id = linha.Field<Int32>("Id"),
                Nome = linha.Field<String>("Nome")

            }).ToList();

            connection.Close();
            sqlCommand.Connection.Close();

            return categorias;
            
        }

        public void Salvar(DataBase.Categoria categoria)
        {
            if (String.IsNullOrEmpty(categoria.Nome))
                throw new Exception("O campo Descrição deve ser Informado");

            var queryString = "insert into Categorias (nome) " +
                              $"values ('{categoria.Nome}')";

            if (categoria.Id != 0)
            {
                queryString = $"update Categorias set nome='{categoria.Nome}', " +
                              $" where id = {categoria.Id}";
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
            var queryString = "delete from Categorias where id=" + id;

            var sqlCommand = new SqlCommand(queryString, connection);
            sqlCommand.Connection.Open();
            sqlCommand.ExecuteNonQuery();

            connection.Close();
            sqlCommand.Connection.Close();

        }

        public DataBase.Categoria BuscarPorId(int id)
        {
            var queryString = "select * from Categorias where id=" + id;
            var sqlCommand = new SqlCommand(queryString, connection);
            sqlCommand.Connection.Open();

            var adapter = new SqlDataAdapter();
            adapter.SelectCommand = sqlCommand;

            var table = new DataTable();
            adapter.Fill(table);

            var categoria = table.AsEnumerable().Select(linha => new DataBase.Categoria
            {
                Id = linha.Field<Int32>("Id"),
                Nome = linha.Field<String>("Nome")

            }).ToList().FirstOrDefault();

            connection.Close();
            sqlCommand.Connection.Close();

            return categoria;
        }

    }
}
