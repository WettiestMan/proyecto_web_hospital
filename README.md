# Proyecto del curso de programación web | Policlinico La Trinidad
>[!CAUTION]
>### Dependencias
>Este proyecto hace uso del framework de la web **Astro**.
>
>[![Astro Build Logo](https://astro.build/assets/press/astro-logo-light-gradient.svg)](https://astro.build/)
>
>A su vez Astro requiere de **Node.Js**, este se requiere que lo instale en su equipo.
>
>[![Node.Js Logo](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)](https://nodejs.org/en)
>
>Ademas, se utiliza el gestor de paquetes **pnpm** en este proyecto.
>
>[![Pnpm Logo](https://pnpm.io/img/pnpm-no-name-with-frame.svg)](https://pnpm.io/)
>
>Por ultimo, se utilizará el framework de CSS: **Tailwind CSS** en este proyecto.
>Para agregar las dependencias de Tailwind CSS en el proyecto de Astro se debe utilizar este comando
> ```
> pnpm add @astrojs/tailwind tailwindcss
> ```
>[![TailwindCSS Logo](https://svglogos.net/wp-content/uploads/tailwindcss-icon.svg)](https://tailwindcss.com/)

> [!IMPORTANT]
>## Para poder contribuir al proyecto
>### 1. Hacer un fork del repositorio en GitHub
>![Fork Repositorio](/public/img/Screenshots/ForkGitHub.png)
>### 2. Clonar su repositorio (el del fork)
>Clona el repositorio normalmente segun el editor que estes utilizando.
>![Clonar Repositorio](/public/img/Screenshots/cloneGitHub.png)
>### 3. Realizar el siguiente comando
>Despues de clonar el repositorio te dirijes a la carpeta donde se encuentra el proyecto y abres la terminal ahi.
>Tendras que utilizar el siguiente comando con pnpm(que es lo que se esta usando en el proyecto).
> ```
> pnpm install
> ```
>![Comando pnpm install](/public/img/Screenshots/pnpmInstall.png)
>### 4. Comprobación
>Para poder comprobar que todo este correcto tendra que correr el proyecto en localhost con el siguiente comando
> ```
> pnpm run dev
> ```
>![Comando pnpm run dev](/public/img/Screenshots/pnpmRunDev.png)
>### 5. Contribuye
>Con todo esto ya podras realizar tus PR al proyecto desde el fork que usted creo
>![PR al pryecto](/public/img/Screenshots/prGitHub.png)
>### Utilizar la parte de la backend que lee bases de datos
>esta parte de la backend lee bases de datos y producen JSONs que pueden ser leidos por una llamada de fetch() en
>el frontend. Esta parte del proyecto utiliza el framework de **Laravel**.
>
>[![Laravel Logo](https://laravel.com/img/logomark.min.svg)](https://laravel.com/)  
>
>A su vez, Laravel requiere de **Composer**. Composer es un gestor de paquetes para PHP.  
>
>[![Composer Logo](https://getcomposer.org/img/logo-composer-transparent.png)](https://getcomposer.org/)
>
>Obviamente todo esto necesita de **PHP**, aunque si tienes XAMPP, lo más probable es que también tengas PHP con el.
>En todo caso, instala PHP y añade la carpeta en donde está a tu PATH porque vamos a necesitarlo para
>algunos comandos.
>
>### Incluyendo una carpeta a PATH
>En general, tu añades una carpeta a PATH para que todos sus ejecutables dentro de la dicha carpeta puedan
>utilizarse en cualquier lugar sin tener que especificar la ruta en donde están. Si no sabes incluir algo en tu path, sigue los siguientes pasos. Si sabes como incluir algo en PATH o si ya tienes PHP configurado en tu path (prueba a ejecutar ```php --version``` para probar), salta a **Configurando el proyecto**.
>
> 1) Busca "variables de entorno" y selecciona la opción "Editar las variables de entorno del sistema".  
> ![Opciones](/public/img/Screenshots/variablesEntorno1.png)
>
> 2) Pulsa el boton "Variables de entorno..."  
> ![Opciones_dentro](/public/img/Screenshots/variablesEntorno2.png)
>
> 3) Busca "Path" en "Variables del sistema", selecciónalo y pulsa "Editar"  
> ![Seleccionar_variable](/public/img/Screenshots/variablesEntorno3.png)
>
> 4) En la pantalla que se muestra, Pulsa "Examinar..."  
> ![Examinar_carpetas](/public/img/Screenshots/variablesEntorno4.png)
>
> 5) Busca la carpeta donde está instalado PHP (Con XAMPP, usualmente es instalado en "C:\xampp\php"),
>    selecciónalo y presiona "Aceptar".  
> ![Buscar_carpeta](/public/img/Screenshots/variablesEntorno5.png)
>
> 6) Finalmente, pulsa "Aceptar" en estas 3 ventanas para salir y guardar tus cambios.  
> ![Guardar_cambios](/public/img/Screenshots/variablesEntorno6.png)
>
> 7) Para probar que todo está correcto, abre una nueva ventana de la línea de comandos (importante, porque las ventanas de línea de comandos antes de la configuración no reconocerán el nuevo elemento en PATH) y ejecuta ```php
>    --version```. Si se configuró correctamente, debería mostrarse algo parecido a esto.  
> ![Bien_hecho](/public/img/Screenshots/exito.png)
>
>### Configurando el proyecto
>
>Una vez que tengas todo esto instalado, lo único que requieres es ir a la carpeta /api dentro del proyeto y ejecutar
>el siguiente comando para instalar las dependencias necesarias para el proyecto:
>```
>composer install
>```
>Luego necesitarías las bases de datos, está registrado para ejecutar en una base de datos de MySQL, pero puedes cambiarla en un archivo .env en la carpeta /api (DB_VENDOR), junto a número de puerto (DB_PORT), un usuario (DB_USERNAME) y contraseña (DB_PASSWORD)  
>![Entorno de Laravel](/public/img/Screenshots/entorno.png)
>
>Ahora puedes probar a crear tu base de datos manualmente, o ejecutando el siguiente comando:
>```
>php artisan migrate
>```
>
>Lo puedes rellenar de datos de la siguiente manera (por supuesto que también puedes hacerlo manualmente):
>```
>php artisan db:seed
>```
>
>Una vez con las bases de datos creadas y con datos, ejecuta una ventana de línea de comandos y escribe el siguiente
>comando para levantar el servidor de backend:
>```
>php artisan serve
>```
>
> ![php artisan serve](/public/img/Screenshots/phpArtisanServe.png)
>
>Esto levantará un servidor en ```127.0.0.1:8000``` (o ```localhost:8000```, son lo mismo. También puede que lo
>levante en un puerto distinto si el puerto 8000 ya está tomado).
>
>Para recibir datos del backend, ve a ```http://localhost:8000/api/farmacos``` y se mostrará un JSON que puedes
>utilizar en Astro con ```fetch(http://localhost:8000/api/farmacos)```
>
>![Datos de backend](/public/img/Screenshots/datos.png)

<!-- ## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
``` -->

## 🧞 Comandos

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
| `composer install`         | Installs PHP dependencies                        |
| `php artisan serve`        | Attempts to start a local dev server at `localhost:8000`    |
