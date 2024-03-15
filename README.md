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
git clone https://github.com/akenoduch/toDoTracker.git
cd toDoTracker
npm install
```
## Execução
Para executar o aplicativo em seu ambiente local, use o seguinte comando:
```bash
npx expo start
```

## Dependências
React Native para a criação da interface do usuário.
Expo para o ambiente de desenvolvimento e testes.
Firebase para autenticação e armazenamento de dados em tempo real.
Moment.js para manipulação de datas.
Outras bibliotecas para melhorar a UX/UI.

## Download APK
https://expo.dev/artifacts/eas/5inErMNdT6yCkWWmn3Gw6y.apk

## Autor
Felipe Vilemondes - Desenvolvedor do projeto TodoTracker

## Licença
Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
