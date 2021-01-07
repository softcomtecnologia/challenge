CREATE TABLE [dbo].[Categorias] (
    [id]   INT          IDENTITY (1, 1) NOT NULL,
    [nome] VARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([id] ASC)
);

GO

CREATE TABLE [dbo].[Filhos] (
    [id]         INT           NOT NULL,
    [nome]       VARCHAR (255) NULL,
    [idade]      INT           DEFAULT ((0)) NOT NULL,
    [sexo]       VARCHAR (100) NULL,
    [id_pessoas] INT           DEFAULT ((0)) NOT NULL,
    PRIMARY KEY CLUSTERED ([id] ASC)
);

GO

CREATE TABLE [dbo].[Pessoas] (
    [id]           INT             IDENTITY (1, 1) NOT NULL,
    [nome]         VARCHAR (255)   NULL,
    [sobrenome]    VARCHAR (255)   NULL,
    [email]        VARCHAR (100)   NULL,
    [pais]         VARCHAR (100)   NULL,
    [estado]       VARCHAR (100)   NULL,
    [cidade]       VARCHAR (100)   NULL,
    [bairro]       VARCHAR (100)   NULL,
    [logradouro]   VARCHAR (100)   NULL,
    [numero]       VARCHAR (100)   NULL,
    [complemento]  VARCHAR (255)   NULL,
    [id_categoria] INT             DEFAULT ((0)) NOT NULL,
    [sexo]         VARCHAR (100)   NULL,
    [salario_base] FLOAT (53)      DEFAULT ((0)) NOT NULL,
    [cpf]          VARCHAR (100)   NULL,
    [foto]         VARBINARY (MAX) NULL,
    [senha]        VARCHAR (100)   NULL,
    PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_Pessoas_ToCategorias] FOREIGN KEY ([id_categoria]) REFERENCES [dbo].[Categorias] ([id])
);