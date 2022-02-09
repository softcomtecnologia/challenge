using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioTrilhaDoConhecimento.Controllers
{
    
    public static class Salario
    {
        private enum TipoSalario
        {
            Advogados = 2,
            Cozinheiro = 3,
            Vendedor = 4
        }

        /// <summary>
        /// Retorna o valor do salário Bruto
        /// </summary>
        /// <param name="pessoa"></param>
        /// <param name="quantidade">Aqui pode informar a quantidade de horas trabalhadas ou processos ganhos ou mesmo dias trabalhados</param>
        /// <param name="totalDeVendas">No caso de vendedor informe o valor de vendas realizadas</param>
        /// <returns></returns>
        public static float GetSalario(DataBase.Pessoa pessoa, int quantidade, float totalDeVendas = 0)
        {
            if (pessoa == null)
                return 0;

            TipoSalario tipoSalario = (TipoSalario)pessoa.IdCategoria;

            switch (tipoSalario)
            {
                case TipoSalario.Advogados:
                    //Advogados: Quantidade de processos ganhos x salário base;
                    return (float)quantidade * (float)pessoa.SalarioBase;

                case TipoSalario.Cozinheiro:
                    //Cozinheiro: Quantidade de horas trabalhadas x salário base:
                    return (float)quantidade * (float)pessoa.SalarioBase;

                case TipoSalario.Vendedor:
                    //Vendedor: dias trabalhos x 8 x salários base + (5% x total das vendas no mês);
                    return (float)quantidade * 8 * (float)pessoa.SalarioBase * (float)(totalDeVendas*0.05);
                    
                default:
                    break;
            }

            return 0;
        }

    }
}
