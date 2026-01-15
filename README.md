# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Home Page
<img width="1873" height="851" alt="image" src="https://github.com/user-attachments/assets/31ba8539-503a-41fe-95b5-ee76ca3b0413" />
<img width="1882" height="763" alt="image" src="https://github.com/user-attachments/assets/9b1e1982-9a11-4a1c-b150-0282f6326361" />
<img width="1880" height="847" alt="image" src="https://github.com/user-attachments/assets/c9152d07-d36a-42bb-b65e-127d1a9d5426" />
<img width="1872" height="799" alt="image" src="https://github.com/user-attachments/assets/b40492c5-c2d6-4b66-8ed1-8bb232415c3f" />
<img width="1871" height="760" alt="image" src="https://github.com/user-attachments/assets/0bff45ea-c687-41a8-89d8-0d1c3a96e0dc" />
<img width="1858" height="794" alt="image" src="https://github.com/user-attachments/assets/ce4411fa-7a22-48a0-b1a9-35b75f0acba0" />
<img width="1872" height="802" alt="image" src="https://github.com/user-attachments/assets/25fad5f9-5f7b-4ef9-a4ae-f21c9756754e" />
<img width="1877" height="563" alt="image" src="https://github.com/user-attachments/assets/749f39a3-e452-454b-9cef-0981513bf54a" />



## Login page
<img width="1578" height="802" alt="image" src="https://github.com/user-attachments/assets/2435f0ba-2a46-48de-b3ea-c259795c9850" />

## DashBoard
<img width="1914" height="851" alt="image" src="https://github.com/user-attachments/assets/83e8baed-f6a4-43cf-9a89-82d4a047df34" />

## User Page
<img width="1875" height="850" alt="image" src="https://github.com/user-attachments/assets/66bcd271-1f7a-44fa-befd-df52a4831150" />

## settings page
<img width="1909" height="844" alt="image" src="https://github.com/user-attachments/assets/ab53db8c-5481-4978-825d-214b8d54f1b9" />


## Decisions & Trade-offs

Frontend-focused approach

I decided to focus more on the frontend (React + Tailwind) and overall user experience.

Trade-off:
The backend does not handle complex logic at this stage.

Why:
The main goal of the task was to show UI structure, routing, and interaction rather than deep server-side logic.

Simple authentication using localStorage

Login and signup are handled using localStorage instead of a full JWT or database-based authentication system.

Trade-off:
This is not secure enough for production use.

Why:
For a demo and academic project, this approach keeps the flow simple while still demonstrating authentication, protected routes, and session handling.
