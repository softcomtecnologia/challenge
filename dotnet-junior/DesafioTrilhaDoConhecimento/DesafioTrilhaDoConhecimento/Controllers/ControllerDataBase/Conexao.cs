using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioTrilhaDoConhecimento.Controllers.ControllersDataBase
{
    public static class Conexao
    {
        public enum TipoBanco
        {
            SqlServer,
            LocalDb
        }

        public static SqlConnection Conn(TipoBanco tipoBanco = TipoBanco.LocalDb)
        {
            switch (tipoBanco)
            {
                case TipoBanco.SqlServer:
                    return SqlServerConn();
                    
                case TipoBanco.LocalDb:
                    return LocalDbConn();
                    
                default:
                    return null;
            }
            
        }

        private static SqlConnection SqlServerConn()
        {
            var config = new Properties.Settings();

            return new SqlConnection(config.sqlServerConnection);
        }

        private static SqlConnection LocalDbConn()
        {
            //return LocalDB.GetLocalDB("Desafio",true);
            return LocalDB.GetLocalDB(false);
        }
    }
}
