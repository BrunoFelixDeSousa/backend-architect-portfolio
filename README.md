# Portfólio Backend Architect

Portfólio pessoal desenvolvido com React e Vite, focado em apresentar um perfil de engenheiro de software backend com um design moderno, responsivo e experiência fluida em desktop e mobile.

## Tecnologias utilizadas

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Radix UI
- Lucide React

## Funcionalidades

- Layout responsivo para desktop e mobile
- Navegação com rotas usando `react-router`
- Seções de apresentação, habilidades, projetos, filosofia e contato
- Estilo escuro com animações sutis

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse o site pelo endereço exibido no terminal (normalmente `http://localhost:5173`).

## Imagens

### Modo Desktop

![Tela do projeto Desktop](./public/aplication-demo/desktop.png)

### Modo Mobile

![Tela do projeto Mobile](./public/aplication-demo/mobile.png)

## Observações

- O projeto é uma boa base para portfólio pessoal e pode ser adaptado com seus próprios conteúdos e links.
- O diretório `public/aplication-demo` contém as imagens usadas no README.

## Dockerização

Para criar a imagem Docker do projeto, use:

```bash
docker build -t backend-architect-portfolio .
```

Para rodar o container:

```bash
docker run -p 4173:4173 backend-architect-portfolio
```

O site ficará disponível em `http://localhost:4173`.
