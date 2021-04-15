using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
    public interface IDatabase
    {
        void ExecutarSQL(string instrucaoSQL, SqlParameter[] parametros = null);

        int ExecutarSQL_Escalar(string instrucaoSQL, SqlParameter[] parametros = null);
        DataTable ExecutarSelect(string instrucaoSql);
        
        SqlConnection ConectarBD();

    }
}
