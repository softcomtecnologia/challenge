using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
	public static class LocalDB
	{		
		private static string DB_DIRECTORY = ConfigurationManager.AppSettings["CaminhoLocalDB"];
		private static string DB_NAME = ConfigurationManager.AppSettings["NomeBDLocalDB"];

		public static SqlConnection GetLocalDB(bool deleteIfExists = false)
		{
			try
			{
				string outputFolder = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), DB_DIRECTORY);
				string mdfFilename = DB_NAME + ".mdf";
				string dbFileName = Path.Combine(outputFolder, mdfFilename);
				string logFileName = Path.Combine(outputFolder, String.Format("{0}_log.ldf", DB_NAME));
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
				string connectionString = String.Format(@"Server=(localdb)\MSSQLLocalDB;AttachDBFileName={1};Initial Catalog={0};Integrated Security=True;", DB_NAME, dbFileName);
				SqlConnection connection = new SqlConnection(connectionString);
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
				string connectionString = String.Format(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=master;Integrated Security=True");
				using (var connection = new SqlConnection(connectionString))
				{
					connection.Open();
					SqlCommand cmd = connection.CreateCommand();


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

		public static bool DetachDatabase(string DB_NAME)
		{
			try
			{
				string connectionString = String.Format(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=master;Integrated Security=True");
				using (var connection = new SqlConnection(connectionString))
				{
					connection.Open();
					SqlCommand cmd = connection.CreateCommand();
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

		private static void CreateTables()
        {
			try
			{
				string connectionString = String.Format(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=master;Integrated Security=True");
				using (var connection = new SqlConnection(connectionString))
				{
					connection.Open();
					SqlCommand cmd = connection.CreateCommand();		

					cmd.CommandText = String.Format("USE {0} " +
													"CREATE TABLE [dbo].[Pessoas]("+
													"[ID][int] IDENTITY(1, 1) NOT NULL, "+
													"[CPF][varchar](20) NULL, "+
													"[Nome][varchar](50) NULL, "+
													"[Sobrenome][varchar](100) NULL, "+
													"[Sexo][varchar](10) NULL, " +
													"[Email][varchar](100) NULL, " +
													"[Categoria][varchar](50) NULL, " +
													"[SalarioBase][float] NULL, " +
													"[CEP][varchar](10) NULL, " +
													"[Endereco][varchar](150) NULL, " +
													"[Numero][varchar](10) NULL, " +
													"[Bairro][varchar](100) NULL, " +
													"[UF][varchar](10) NULL, " +
													"[Cidade][varchar](100) NULL, " +
													"[Foto][varbinary](max) NULL, " +
													"CONSTRAINT[PK_Pessoas] PRIMARY KEY CLUSTERED " +
													"([ID] ASC) " +
													"WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY]) " +
													"ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]", DB_NAME);
					cmd.ExecuteNonQuery();

					cmd.CommandText = String.Format("USE {0} " +
													"CREATE TABLE [dbo].[Usuarios](" +
													"[ID] [int] IDENTITY(1,1) NOT NULL, " +
													"[Nome][varchar](50) NULL, " +
													"[Senha][varchar](50) NULL, " +
													"CONSTRAINT[PK_Usuarios] PRIMARY KEY CLUSTERED " +
													"([ID] ASC) " +
													"WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY]) " +
													"ON [PRIMARY]", DB_NAME);
					cmd.ExecuteNonQuery();

					cmd.CommandText = String.Format("USE {0} " +
													"CREATE TABLE[dbo].[Filhos]( " +
													"[ID][int] IDENTITY(1, 1) NOT NULL, " +
													"[IDPai][int] NULL CONSTRAINT[DF_Filhos_IDPessoa]  DEFAULT((0)), " +
													"[NomeFilho][varchar](50) NULL, " +
													"[Idade][int] NULL CONSTRAINT[DF_Filhos_Idade]  DEFAULT((0)), " +
													"[Sexo][varchar](1) NULL, " +
													"CONSTRAINT[PK_Filhos] PRIMARY KEY CLUSTERED " +
													"([ID] ASC) " +
													"WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY]) " +
													"ON [PRIMARY]", DB_NAME);
					cmd.ExecuteNonQuery();

				}
			}
			catch
			{
				throw;
			}
		}
	}
}
