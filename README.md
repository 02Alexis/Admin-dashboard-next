Next.js 14 Admin Dashboard, Creación de usuarios y productos, e inicio de sesión. Este proyecto proporciona un dashboard administrativo potente construido con Next.js 14. La aplicación es fullstack, con acciones del servidor para garantizar un rendimiento eficiente. Permite la creación y gestión de usuarios y productos, así como la autenticación segura con un sólido sistema de inicio de sesión. Utiliza MongoDB como base de datos para un almacenamiento de datos flexible y escalable. Proyecto escalable y fácil de usar

## Instalación

1. **Clona el repositorio:**
```bash
https://github.com/02Alexis/Admin-dashboard-next.git

# Navega al directorio del proyecto:
cd Admin-dashboard-next

# Instala las dependencias del proyecto
npm install
```

## Configuración de Variables de Entorno

Para que el proyecto funcione correctamente, es necesario configurar las variables de entorno en un archivo `.env` en la raíz del proyecto. Puedes crear este archivo y pegar los siguientes datos:

```bash
DB_URI=yourDb
AUTH_SECRET=generatesecretkey
AUTH_URL=http://localhost:3000/api/auth
```

Asegúrate de reemplazar `yourDb` con la URL de tu base de datos MongoDB ya sea local o en la nube usando MongoDB Atlas o la base de datos que uses. Estas variables se utilizan para configurar la conexión a la base de datos y para la autenticación.


## **Ejecutar el Proyecto**: Inicia el proyecto utilizando el siguiente comando:
```bash
npm run dev
```

 # Samples 

## Dashboar page
![image](https://github.com/02Alexis/Admin-dashboard-next/assets/99287560/c5bb83de-01db-4c59-9f18-f5b9c25c3492)

## Users page
![image](https://github.com/02Alexis/Admin-dashboard-next/assets/99287560/f879d0ee-761d-4ae8-9e52-39063244646e)

## add new user
![image](https://github.com/02Alexis/Admin-dashboard-next/assets/99287560/c07677f9-5017-4135-8ca7-ca9889fbc521)

## Products page
![image](https://github.com/02Alexis/Admin-dashboard-next/assets/99287560/b1b714bb-1467-4759-af89-237ecaaf942d)
## add new product
![image](https://github.com/02Alexis/Admin-dashboard-next/assets/99287560/09235567-3b73-4f1d-8580-190c51a6046d)

