# Booking App - Docker + Prisma

**Sistema de reservas simples**, desenvolvido como projeto de estudo para aprender a integração entre backend, banco relacional e containerização.  

Este projeto não é uma aplicação para produção, mas sim um **exercício prático de aprendizado**.

---

## Funcionalidades do projeto

- CRUD de **usuários** (criar, listar)  
- CRUD de **reservas** (criar, listar, deletar)  
- Relacionamento entre usuários e reservas (cada reserva pertence a um usuário)  
- Persistência de dados com **PostgreSQL** via container Docker  
- Testes de API utilizando **curl**, **Postman** ou **PowerShell**

---

## Tecnologias e conceitos estudados

- **Node.js & Express** – criação de servidor e rotas REST  
- **Prisma ORM** – modelagem do banco de dados, migrations e queries  
- **PostgreSQL** – banco de dados relacional, entendendo tabelas e relações  
- **Docker & Docker Compose** – containerização do backend e do banco  
- **Gerenciamento de ambiente** – uso de `.env` para variáveis sensíveis  
- **Arquitetura backend** – separação de camadas: routes, controllers, services  
- **Testes de API** – GET, POST, DELETE e verificação de dados gravados no banco  

---

## Aprendizado com o projeto

- Como estruturar um backend **modular e escalável**  
- Como usar **ORM para gerenciar banco de dados relacional**  
- Como criar **containers isolados** para backend e banco  
- Entender **migrations e versionamento de banco de dados**  
- Testar endpoints de API e validar integração entre sistema e banco

---


## Diagrama da arquitetura 


                    ┌───────────────────┐
                    │     Frontend      │
                    │ (Postman, curl)  │
                    └─────────┬────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │    Backend Node   │
                    │  Express + Prisma │
                    │  index.js         │
                    └─────────┬────────┘
                              │
            ┌─────────────────┴─────────────────┐
            ▼                                   ▼
    ┌───────────────┐                   ┌───────────────┐
    │     Users     │                   │  Reservations │
    │  id, name,    │◄───userId────────│ id, date, user│
    │  email, ...   │                   │ ...           │
    └───────────────┘                   └───────────────┘
            ▲
            │
    ┌───────────────┐
    │  PostgreSQL   │
    │ Container DB  │
    │ Docker Volume │
    └───────────────┘

