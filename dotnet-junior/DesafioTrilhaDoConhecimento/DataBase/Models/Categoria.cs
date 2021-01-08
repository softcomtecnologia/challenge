using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;

namespace DataBase
{
    public class Categoria
    {
        //Polimorfismo
        public override string ToString()
        {
            return this.Nome;
        }

        public int Id { get; set; }
        public string Nome { get; set; }

        public bool PreCadastrada { get; set; }
    }
}
