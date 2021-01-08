using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
    public class Database : IDatabase
    {

        private SqlDataAdapter dataAdapter;
        private SqlCommandBuilder sqlCommandBuilder = null;
        DataTable dataTable = new DataTable();

        private string ConnectionString { get; }

        public Database()
        {
            ConnectionString = ConfigurationManager.AppSettings["LocalDBConnection"];
        }        

        public SqlConnection ConectarBD()
        {
            SqlConnection connection = new SqlConnection(ConnectionString);            
            return connection;
        }

        public DataTable ExecutarSelect(string instrucaoSql)
        {

            var conexao = ConectarBD();
            dataAdapter = new SqlDataAdapter(instrucaoSql, conexao);
            conexao.Open();
            conexao.Close();

            sqlCommandBuilder = new SqlCommandBuilder(dataAdapter);
            dataAdapter.Fill(dataTable);

            return dataTable;
        }

        public void ExecutarSQL(string instrucaoSQL, SqlParameter[] parametrosSQL = null)
        {            
            SqlCommand command = new SqlCommand(instrucaoSQL, ConectarBD());            

            if (parametrosSQL != null && parametrosSQL.Length > 0)
            {                
                foreach (SqlParameter parametro in parametrosSQL)
                {                    
                    if (parametro.Value == null)
                    {
                        parametro.Value = DBNull.Value;
                    }

                    command.Parameters.Add(parametro);
                }
            }

            command.Connection.Open();
            command.ExecuteNonQuery();
            command.Parameters.Clear();

        }

        public int ExecutarSQL_Escalar(string instrucaoSQL, SqlParameter[] parametrosSQL = null)
        {
            SqlCommand command = new SqlCommand(instrucaoSQL, ConectarBD());
            

            if (parametrosSQL != null && parametrosSQL.Length > 0)
            {                
                foreach (SqlParameter parametro in parametrosSQL)
                {
                    if (parametro.Value == null)
                    {
                        parametro.Value = DBNull.Value;
                    }

                    command.Parameters.Add(parametro);
                }
            }
            
            command.Connection.Open();
            var retorno = (int)command.ExecuteScalar();
            command.Parameters.Clear();

            return retorno;
            
        }
    }
}
