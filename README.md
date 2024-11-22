# My Portfolio Website

Hi! 👋 This is my personal portfolio website, created to introduce myself and showcase some of the things I'm learning as I start web development, and it is a common language now, JavaScript.

I built this project using React, with the help from Vite template, and deployed it with GitHub Pages. It's a work in progress, but I’m excited to finish it.


### Initialization

How you can set up the project:

1. First, create a new folder for your project.

2. Open your terminal, and navigate to the folder you just created:
    ```
    cd your-folder
    ```

3. To set up the project using Vite and React, run the following command:
    ```
    npm create vite@latest . -- --template react
    ```

4. To start the development server and see it live, run:
    ```
    npm install
    npm run dev
    ```

### Github Pages

1. Important things must say 3 times, your repo must be your-github-username.github.io

2. Start a new GitHub Action, and authorize it for read and write permissions in settings. It will also create a yml file.

3. Just copy the deploy.yml and commit changes.

4. Now, every time you commit and push to the main branch, GitHub Actions will trigger the deploy.

### Additional tools

1. I discovered that **Tailwind CSS** can help me style things quickly, so I’ve included it. To get added and running:

- To install Tailwind CSS and some helper:
    ```
    npm install -D tailwindcss postcss autoprefixer
    ```

- Create config file for Tailwind:
    ```
    npx tailwindcss init -p
    ```

- To make sure Tailwind knows where to look for the classes in your project, add the following in tailwind.config.js file:
    ```
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
    ```
