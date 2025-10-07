# 🔐 Projeto de Autenticação com Google API

**Status do Projeto:** 🟡 Em Desenvolvimento  

---

## 📝 Descrição

Este projeto é uma aplicação web desenvolvida para demonstrar a integração de um sistema de **cadastro e login de usuários** utilizando a **API de Contas do Google (Google Identity Services)**.  
O objetivo principal é oferecer uma forma **segura e simplificada** para que os usuários acessem a plataforma, aproveitando suas **contas Google existentes**.

---

## ✨ Funcionalidades

- ✅ **Cadastro de Novos Usuários:**  
  Usuários podem se registrar na plataforma utilizando sua conta Google com um único clique.

- 🔑 **Login com Google:**  
  Usuários já cadastrados podem realizar o login de forma rápida e segura.

- 👤 **Recuperação de Informações:**  
  Após a autenticação, a aplicação obtém informações básicas do perfil do usuário, como **nome, e-mail e foto de perfil**.

- 🚪 **Logout Seguro:**  
  Permite que o usuário encerre sua sessão de forma segura.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ **Frontend**
- HTML5  
- CSS3  
- JavaScript  
- React  
- Bootstrap  

### 🔒 **Autenticação**
- Google Identity Services (OAuth 2.0)

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Git](https://git-scm.com/)  
- Um navegador web moderno (Google Chrome, Firefox, etc.)  
- Um editor de código de sua preferência (ex: [VSCode](https://code.visualstudio.com/))

Além disso, é necessário:

- Ter um projeto configurado no **Google Cloud Console**  
- Obter um **ID de Cliente OAuth 2.0** para que a autenticação funcione corretamente.

---

## ⚙️ Execução do Projeto

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências (caso use npm ou yarn)
npm install

# Execute a aplicação
npm start
