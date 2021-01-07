using System;
using System.Data.SqlClient;
using System.IO;
using System.Reflection;

namespace DesafioTrilhaDoConhecimento.Controllers.ControllersDataBase
{
    static class LocalDB
    {
        private static string DB_DIRECTORY = "Data";
        private static string DB_NAME = "Desafio";

        public static SqlConnection GetLocalDB(bool deleteIfExists = false)
        {
            try
            {
                var outputFolder = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), DB_DIRECTORY);
                var mdfFilename = DB_NAME + ".mdf";
                var dbFileName = Path.Combine(outputFolder, mdfFilename);
                var logFileName = Path.Combine(outputFolder, $"{DB_NAME}_log.ldf");
                // Create Data Directory If It Doesn't Already Exist.
                if (!Directory.Exists(outputFolder))
                {
                    Directory.CreateDirectory(outputFolder);
                }

                // If the file exists, and we want to delete old data, remove it here and create a new database.
                if (File.Exists(dbFileName) && deleteIfExists)
                {
                    if (File.Exists(logFileName)) File.Delete(logFileName);
                    File.Delete(dbFileName);
                    CreateDatabase(DB_NAME, dbFileName);
                }
                // If the database does not already exist, create it.
                else if (!File.Exists(dbFileName))
                {
                    CreateDatabase(DB_NAME, dbFileName);
                }

                // Open newly created, or old database.
                var connectionString = $@"Server=(localdb)\MSSQLLocalDB;Initial Catalog={DB_NAME};Integrated Security=True";
                var connection = new SqlConnection(connectionString);

                connection.Open();

                return connection;
            }
            catch
            {
                throw;
            }
        }

        public static bool CreateDatabase(string dbName, string dbFileName)
        {
            try
            {
                var connectionString = $@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=master;Integrated Security=True";
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    var cmd = connection.CreateCommand();

                    DetachDatabase(DB_NAME);

                    cmd.CommandText = String.Format("CREATE DATABASE {0} ON (NAME = N'{0}', FILENAME = '{1}')", DB_NAME, dbFileName);
                    cmd.ExecuteNonQuery();
                }

                if (File.Exists(dbFileName))
                {
                    CreateTables();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch
            {
                throw;
            }
        }

        public static bool CreateTables()
        {
            try
            {
                var connectionString = $@"Server=(localdb)\MSSQLLocalDB;Initial Catalog={DB_NAME};Integrated Security=True";
                var connection = new SqlConnection(connectionString);

                connection.Open();
                var cmd = connection.CreateCommand();

                //Criando a tabela Categorias
                cmd.CommandText = $"USE {DB_NAME} " +
                    "if not exists (select * from sysobjects where name='Categorias' and xtype='U') " +
                    "CREATE TABLE [dbo].[Categorias] " +
                    "([id] INT IDENTITY(1, 1) NOT NULL, " +
                    "[nome] VARCHAR(50) NULL,    " +
                    "[pre_cadastrado] BIT DEFAULT ((0)) NOT NULL,    " +
                    "PRIMARY KEY CLUSTERED([id] ASC))";
                cmd.ExecuteNonQuery();


                //Criando a tabela Pessoas
                cmd.CommandText = $"USE {DB_NAME} " +
                    "if not exists (select * from sysobjects where name='Pessoas' and xtype='U') " +
                    "CREATE TABLE [dbo].[Pessoas] " +
                    "([id] INT IDENTITY (1, 1) NOT NULL, " +
                    "[nome] VARCHAR (255) NULL, " +
                    "[sobrenome] VARCHAR (255) NULL, " +
                    "[email] VARCHAR (100) NULL, " +
                    "[pais] VARCHAR (100) NULL, " +
                    "[estado] VARCHAR (100) NULL, " +
                    "[cidade] VARCHAR (100) NULL, " +
                    "[bairro] VARCHAR (100) NULL, " +
                    "[logradouro] VARCHAR (100) NULL, " +
                    "[numero] VARCHAR (100) NULL, " +
                    "[complemento] VARCHAR (255) NULL, " +
                    "[cep] VARCHAR (255) NULL, " +
                    "[id_categoria] INT DEFAULT ((0)) NOT NULL, " +
                    "[sexo] VARCHAR (100) NULL, " +
                    "[salario_base] FLOAT (53) DEFAULT ((0)) NOT NULL, " +
                    "[cpf] VARCHAR (100) NULL, " +
                    "[foto] VARBINARY (MAX) NULL, " +
                    "[senha] VARCHAR (100) NULL, " +
                    "PRIMARY KEY CLUSTERED ([id] ASC), " +
                    "CONSTRAINT [FK_Pessoas_ToCategorias] FOREIGN KEY ([id_categoria]) REFERENCES [dbo].[Categorias] ([id]))";
                cmd.ExecuteNonQuery();

                //Criando a tabela Filhos
                cmd.CommandText = $"USE {DB_NAME} " +
                    "if not exists (select * from sysobjects where name='Filhos' and xtype='U') " +
                    "CREATE TABLE [dbo].[Filhos] " +
                    "([id] INT IDENTITY(1, 1) NOT NULL, " +
                    "[nome] VARCHAR(255) NULL, " +
                    "[idade] INT DEFAULT((0)) NOT NULL, " +
                    "[sexo] VARCHAR(100) NULL, " +
                    "[id_pessoas] INT DEFAULT((0)) NOT NULL, " +
                    "PRIMARY KEY CLUSTERED([id] ASC), " +
                    "CONSTRAINT[FK_Filhos_ToPessoas] FOREIGN KEY([id_pessoas]) REFERENCES[Pessoas]([id]))";
                cmd.ExecuteNonQuery();

                cmd.CommandText = $"USE {DB_NAME} " +
                    "SET IDENTITY_INSERT Categorias ON " +
                    "if not exists(select * from Categorias where id = 1) " +
                    "BEGIN INSERT INTO [dbo].[Categorias] (id, nome, pre_cadastrado) SELECT 1, 'SELECIONE', -1 END " +
                    "if not exists(select * from Categorias where id = 2) " +
                    "BEGIN INSERT INTO [dbo].[Categorias] (id, nome, pre_cadastrado) SELECT 2, 'ADVOGADOS', -1 END " +
                    "if not exists(select * from Categorias where id = 3) " +
                    "BEGIN INSERT INTO [dbo].[Categorias] (id, nome, pre_cadastrado) SELECT 3, 'COZINHEIRO', -1 END " +
                    "if not exists(select * from Categorias where id = 4) " +
                    "BEGIN INSERT INTO [dbo].[Categorias] (id, nome, pre_cadastrado) SELECT 4, 'VENDEDOR', -1 END " +
                    "SET IDENTITY_INSERT Categorias OFF";
                cmd.ExecuteNonQuery();
                //
                //cmd.CommandText = $"USE {DB_NAME} " +
                //    "if not exists(select * from Pessoas where id = 1) " +
                //    "BEGIN SET IDENTITY_INSERT Pessoas ON " +
                //    "INSERT INTO [dbo].[Pessoas] (id, nome, senha, id_categoria) SELECT 1, 'USUARIO', '1234', 1 " +
                //    "SET IDENTITY_INSERT Pessoas OFF END";
                //cmd.ExecuteNonQuery();

                //connection.Close();

                return true;

            }
            catch
            {
                throw;
            }
        }

        public static bool DetachDatabase(string DB_NAME)
        {
            try
            {
                string connectionString = String.Format(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=master;Integrated Security=True");
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    var cmd = connection.CreateCommand();
                    cmd.CommandText = String.Format("exec sp_detach_db '{0}'", DB_NAME);

                    cmd.ExecuteNonQuery();

                    return true;
                }
            }
            catch
            {
                return false;
            }
        }

    }
}