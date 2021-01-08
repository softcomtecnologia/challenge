using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class Filho : Database.Database, IPessoas
    {
        public int Id { get; set; }
        public int IdPai { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public string Sexo { get; set; }

        public Filho() { }

        public bool Salvar()
        {
            try
            {
                ExecutarSQL("INSERT INTO Filhos (IDPai, NomeFilho, Idade, Sexo)" +
                           $"VALUES ('{this.IdPai}', '{this.Nome}', '{this.Idade}', '{this.Sexo}')");

                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Registro não foi salvo. {ex.Message}");
            }
        }

        public bool Atualizar(int filhoId)
        {
            try
            {
                ExecutarSQL($"UPDATE Filhos SET NomeFilho='{this.Nome}', Idade='{this.Idade}', Sexo='{this.Sexo}' " +                            
                            $"WHERE Filhos.ID={filhoId}");

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

    }
}
