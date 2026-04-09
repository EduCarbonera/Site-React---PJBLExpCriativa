# 🌱 Stardew Vegetais

Sistema web CRUD para gerenciamento de vegetais do jogo Stardew Valley.

**Aluno:** Eduardo Mendes Carbonera

---

## 🛠️ Tecnologias

- **Frontend:** React
- **Backend:** Node.js + Express
- **Banco de Dados:** MySQL

---

## 📁 Estrutura do Projeto

```
expCriativa/
├── backend/
│   ├── controllers/
│   │   └── Vegetaiscontroller.js
│   ├── routes/
│   │   └── Vegetaisroutes.js
│   ├── db.js
│   ├── server.js
│   └── package.json
├── frontend/
│   └── creativeexpreactproject/
│       └── src/
│           ├── pages/
│           │   ├── Lista.jsx
│           │   ├── Formulario.jsx
│           │   └── Detalhe.jsx
│           ├── App.js
│           └── App.css
├── stardewvegetais.sql
└── README.md
```

---

## ▶️ Como rodar o projeto

### 1. Banco de Dados

- Abra o MySQL Workbench
- Importe o arquivo `stardewvegetais.sql`
- O banco `stardew_vegetais` será criado automaticamente com os dados

### 2. Backend

Abra um terminal e execute:

```bash
cd backend
npm install
node server.js
```

O servidor vai rodar em `http://localhost:3001`

### 3. Frontend

Abra outro terminal e execute:

```bash
cd frontend/creativeexpreactproject
npm install
npm start
```

O sistema vai abrir em `http://localhost:3000`

---

## 🔧 Configuração do Banco

Antes de rodar o backend, abra o arquivo `backend/db.js` e coloque sua senha do MySQL:

```js
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SUA_SENHA', // troque aqui
  database: 'stardew_vegetais'
})
```

---

## 📋 Funcionalidades

- Listar vegetais com paginação
- Cadastrar novo vegetal
- Editar vegetal existente
- Visualizar detalhes de um vegetal
- Deletar vegetal

---

## 🔗 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /vegetais | Lista todos os vegetais |
| GET | /vegetais/:id | Busca um vegetal por ID |
| POST | /vegetais | Cadastra novo vegetal |
| PUT | /vegetais/:id | Atualiza um vegetal |
| DELETE | /vegetais/:id | Deleta um vegetal |
