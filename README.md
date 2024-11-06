# ProFindr

ProFindr es una aplicación diseñada para conectar a personas que ofrecen servicios, tanto en empleos formales como informales, brindando un punto de referencia confiable para aquellos que buscan y ofrecen servicios profesionales.

## Funcionalidades
- **Gestión de Servicios**: Permite a los usuarios publicar y gestionar sus servicios, facilitando la creación, modificación y eliminación de los mismos.
- **Consultas de Disponibilidad**: Proporciona un sistema para que los clientes puedan consultar y agendar citas con los proveedores de servicios.
- **Administración de Usuarios y Perfiles**: Incluye la gestión de roles de proveedores de servicios y clientes, así como un sistema de perfiles personalizado para cada usuario.

![Dashboard](images/image.png)
> Dashboard

![Dashboard](images/image2.png)
> Home

![Dashboard](images/image3.png)
> Find Work

## Tecnologías Utilizadas
- **Frontend**: Vite, TypeScript, React
- **Backend**: C#, .NET Core
- **Base de Datos**: SQL Server
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list 
