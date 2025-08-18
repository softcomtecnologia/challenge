import express from "express";
import cors from "cors";
import db from "./app/models/index.js";
import authRoutes from "./app/routes/auth.routes.js";
import userRoutes from "./app/routes/user.routes.js";
import itemRoutes from "./app/routes/item.routes.js";
import vendaRoutes from "./app/routes/venda.routes.js";

const app = express();

const corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Funcionando..." });
});

app.use("/api/v1/", authRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/", itemRoutes);
app.use("/api/v1/", vendaRoutes);

const PORT = process.env.PORT || 8080;

const initial = async () => {
  const Role = db.role; 
  const count = await Role.count();

  if (count === 0) {
    await Role.bulkCreate([
      { name: "user" },
      { name: "admin" },
      { name: "moderator" }
    ]);
  }
};

db.sequelize.sync({ force: false }).then(() => {
    initial();
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
