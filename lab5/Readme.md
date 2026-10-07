# Project Setup

1. create two folder frontend and backend
2. go to frontend `cd frontend `
     - type `npm create vite@latest`
     - press `y` if asked to install
     - enter`.` in project name
     - select `React` as framework from arrow key
     - select Javascript from variant by arrow key
     - select ESLint by arrow key
     - select Yes and press enter

3. setup tailwind in react project 
   - install tailwind css using `npm install tailwindcss @tailwindcss/vite`
   - open vite.config.js as below image 
   ![alt text]("C:\Users\anshi\OneDrive\Pictures\Screenshots\Screenshot 2026-10-07 112306.png")
   - remove all contents of index.css then write
    `@import "tailwindcss"`in index.css
## rule of components 
-  start with capital letter
- it must return html
- must be closed at the calling time
- it can be used anywhere anytime









     - in react style can be added into html by className because class is a predefined keyword in react.
     -  when js function returns directly html contents,called components
     