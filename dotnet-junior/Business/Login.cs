using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class Login : Database.Database
    {
        public string TSQL = "login";
        public string Usuario;
        public string Senha;
        public Login() { }

        public void CriarBancoDeDados()
        {
            Database.LocalDB.GetLocalDB();
        }

        public bool ValidarLogin()
        {
            SqlParameter[] parametros =
            {
                new SqlParameter("@usuario", SqlDbType.VarChar) { Value = Usuario },
                new SqlParameter("@senha", SqlDbType.VarChar) { Value = Senha }
            };

            var retorno = Convert.ToBoolean(ExecutarSQL_Escalar("SELECT count(*) FROM Usuarios WHERE Nome=@usuario AND Senha=@senha", parametros));
            
            return retorno;
        }

        public bool CadastrarUsuario()
        {
            SqlParameter[] parametros =
            {
                new SqlParameter("@usuario", SqlDbType.VarChar) { Value = Usuario },
                new SqlParameter("@senha", SqlDbType.VarChar) { Value = Senha }
            };

            var jaExiste = ExecutarSQL_Escalar("SELECT COUNT(*) FROM Usuarios WHERE Nome=@usuario", parametros);

            if (jaExiste == 0)
            {
                ExecutarSQL("INSERT INTO Usuarios (Nome, Senha) VALUES (@usuario, @senha)", parametros);
                return true;
            }

            return false;
            
        }
       
    }
}
