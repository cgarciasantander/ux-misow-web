# ParentCheck Web
ParentCheck Web es una aplicación web integral diseñada para impulsar la marca. Su propósito principal es atraer clientes y convertirlos en usuarios activos, siendo el puente ideal para potenciar el uso de nuestra aplicación móvil.

Funcionalidades soportadas:

1. Administrar las páginas de mercadeo de la marca.
2. Registro de usuarios.
3. Autenticación y autogestión de cuentas de usuarios.
4. Creación de dependientes.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas antes de comenzar:
- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/usuario/nombre-del-repositorio.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd nombre-del-repositorio
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
    o si usas Yarn:
    ```bash
    yarn install
    ```

## Ejecución en Desarrollo
Ejecuta el servidor de desarrollo:

```bash
    npm run dev
```

o si usas Yarn:

```bash
yarn dev
```

Accede a la aplicación en tu navegador en http://localhost:3000.

## Compilar en proyecto para producción
Para crear una versión optimizada para producción:

```bash
npm run build
```

o con Yarn:

```bash
yarn build
```

Luego, para ejecutar la aplicación en modo producción:

```bash
npm start
```

o:

```bash
yarn start
```

## Scripts Disponibles
`dev`: Inicia el servidor de desarrollo.
`build`: Crea una versión optimizada para producción.
`start`: Inicia la aplicación en modo producción.
`lint`: Ejecuta linters para mantener el código limpio.

## Estructura del Proyecto
Una breve descripción de la estructura de carpetas del proyecto:

/app            # Directorio raiz de la aplicación
/app/(private)  # Directorio con rutas privadas
/app/(public)   # Directorio con rutas publicas
/public         # Archivos estáticos
/components     # Componentes reutilizables
/hooks          # Hooks reutilizables
