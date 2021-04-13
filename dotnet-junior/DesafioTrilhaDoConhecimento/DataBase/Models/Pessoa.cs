using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Drawing.Imaging;
using DesafioTrilhaDoConhecimento;

namespace DataBase
{
    public class Pessoa
    {
        //Polimorfismo
        public override string ToString()
        {
            return this.Nome;
        }
        #region Propriedades Simples
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public string Pais { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string Bairro { get; set; }
        public string Logradouro { get; set; }
        public int IdCategoria { get; set; }

        //TODO Criptografar a senha
        public string Senha { get; set; }
        //{
        //    get {return Util.HashValue(this.Senha)};
        //    set {Senha = Util.HashValue(value)};
        //}
        #endregion

        #region Encapsulamento // Propriedade Complexa
        private byte[] foto { get; set; }
        public Image Foto
        {
            get
            {
                if (foto == null)
                    return null;

                var memory = new MemoryStream(foto);

                return Image.FromStream(memory);
            }

            set
            {
                if (value == null)
                    return;

                var memory = new MemoryStream();

                value.Save(memory, ImageFormat.Bmp);

                var fotoArray = memory.ToArray();

                foto = fotoArray;
            }
        }
        #endregion

        #region Permissões do usuário
        public bool PermitirAbrirCategorias{get => true;}
        #endregion

        public string Numero { get; set; }
        public string Cep { get; set; }
        public string Complemento { get; set; }
        public string Sexo { get; set; }
        public double SalarioBase { get; set; }
        public double SalarioBruto { get; set; }
        public string Cpf { get; set; }


    }
}
