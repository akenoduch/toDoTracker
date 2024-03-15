# TodoTracker

TodoTracker é um aplicativo de rastreamento de tarefas construído com React Native e Firebase, projetado para ajudar usuários a gerenciar suas atividades diárias de forma eficiente.

## Características

- Adicione, edite e exclua tarefas.
- Visualize tarefas filtradas por data.
- Marque tarefas como completas com um checkbox.
- Interface de usuário com suporte a temas claro e escuro. (Em breve)
- Logout seguro e funcional.

## Estrutura do Projeto

```plaintext
📦 TodoTracker
 ┣ 📂 .expo
 ┣ 📂 .vscode
 ┣ 📂 assets
 ┃ ┣ 📂 fonts
 ┃ ┃ ┗ 📜 MadimiOne.ttf
 ┃ ┣ 📂 icons
 ┃ ┣ 📂 logo
 ┃ ┗ 📂 styles
 ┣ 📂 node_modules
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Card.tsx
 ┃ ┃ ┣ 📜 CustomCheckbox.tsx
 ┃ ┃ ┣ 📜 EditPopup.tsx
 ┃ ┃ ┣ 📜 GradientBackground.tsx
 ┃ ┃ ┣ 📜 Header.tsx
 ┃ ┃ ┣ 📜 PopupCreate.tsx
 ┃ ┃ ┗ 📜 SidebarMenu.tsx
 ┃ ┣ 📂 firebase
 ┃ ┃ ┣ 📂 firestore
 ┃ ┃ ┃ ┣ 📜 completeTask.ts
 ┃ ┃ ┃ ┣ 📜 createTask.ts
 ┃ ┃ ┃ ┣ 📜 deleteTask.ts
 ┃ ┃ ┃ ┣ 📜 read.ts
 ┃ ┃ ┃ ┗ 📜 updateTask.ts
 ┃ ┣ 📂 navigation
 ┃ ┃ ┗ 📜 StackNavigator.js
 ┃ ┗ 📂 screens
 ┃ ┃ ┣ 📜 HomeScreen.tsx
 ┃ ┃ ┣ 📜 LoginScreen.tsx
 ┃ ┃ ┗ 📜 RegisterScreen.tsx
 ┃ ┗ 📂 utils
 ┃ ┃ ┣ 📜 colors.ts
 ┃ ┃ ┗ 📜 textVariants.ts
 ┣ 📜 app.json
 ┣ 📜 App.tsx
 ┣ 📜 babel.config.js
 ┣ 📜 firebaseConfig.ts
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┗ 📜 tsconfig.json
```

## Instalação
Para começar a usar o TodoTracker, clone o repositório e instale as dependências:

```bash
Copy code
git clone https://github.com/akenoduch/toDoTracker.git
cd TodoTracker
npm install
```
## Execução
Para executar o aplicativo em seu ambiente local, use um dos seguintes comandos:
```bash
Copy code
npm start        # Inicia o servidor de desenvolvimento Expo
npm run android  # Inicia o aplicativo no Android
npm run ios      # Inicia o aplicativo no iOS
npm run web      # Inicia o aplicativo na Web
```

## Dependências
React Native para a criação da interface do usuário.
Expo para o ambiente de desenvolvimento e testes.
Firebase para autenticação e armazenamento de dados em tempo real.
Moment.js para manipulação de datas.
Outras bibliotecas para melhorar a UX/UI.

## Autor
Felipe Vilemondes - Desenvolvedor do projeto TodoTracker

## Licença
Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
