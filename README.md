# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# CineApp - Proyecto Frontend con React y Tailwind CSS

Este proyecto es una aplicación web para buscar, ver detalles y marcar películas como favoritas. Se consume la API de [TMDb (The Movie Database)](https://www.themoviedb.org/) y utiliza **React**, **TypeScript**, **Tailwind CSS** y otras herramientas modernas.

## Características

- Página de inicio con películas populares.
- Barra de búsqueda para encontrar películas por título.
- Página de detalles de cada película con información completa.
- Funcionalidad para marcar películas como favoritas y almacenarlas en el navegador (LocalStorage).
- Diseño responsivo y atractivo utilizando Tailwind CSS.
- Modales para mostrar información adicional y realizar registros.

## Tecnologías y Dependencias

- **React**: Librería para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Tailwind CSS**: Framework CSS para diseños rápidos y personalizados.
- **React Icons**: Iconos vectoriales listos para usar en React.
- **Axios**: Cliente HTTP para consumir la API de TMDb.
- **Vite**: Herramienta para crear proyectos rápidos y modernos de React.

### Dependencias instaladas

- **React** y **React DOM**: Framework principal y su motor para el DOM.
- **TypeScript**: Para tipar el código.
- **Tailwind CSS**: Para estilos.
- **React Icons**: Para iconos vectoriales.
- **Axios**: Para realizar peticiones HTTP.

## Requisitos Previos

- Node.js (versión 16 o superior recomendada)
- npm o yarn instalado en tu máquina.

## Pasos para Configurar y Ejecutar el Proyecto

### 1. Clonar el Repositorio
Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/NickQ2003/my-cine.git
cd my-cine
