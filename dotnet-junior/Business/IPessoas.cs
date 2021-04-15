using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    interface IPessoas1 : IPessoas
    {
        bool VerificarCEP();
        List<Pessoas> GetListPessoas(string instrucaoSQL);

        double GetSalario(string categoria, double salariobase);
    }

    interface IPessoas
    {
        bool Salvar();

        bool Atualizar(int pessoaId);

        DataTable Buscar(string instrucaoSQL);
        
    }
}
