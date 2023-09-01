> **Warning** <br>
> This milestone will not be having any projects pushed into it as NPM doesn't support nested projects. As this whole repository, itself is a project, NPM throws out errors when trying to install react via NPM inside this repository.<br>**Instead, there will be notes in markdown files.**

# Table of Content

- [Installing React with Vite](#installing-react-with-vite)

## Installing React with Vite

1. Check whether NPM is installed

   ```bash
    npm --version
   ```

   If NPM is not installed, follow [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2. CD to the folder where you will create your project folder.
3. Install React with Vite like so.

   ```bash
    npm create vite@latest my-first-react -- --template react
   ```

   Learn more about [Vite](https://vitejs.dev/guide/).

4. Follow the instructions that follow.

5. You can open the your template website using the localhost link given.

   ```bash
   Vite v.4.x.x

   -> Local: *link*
   -> Network: ....
   ```

6. Press `ctrl+c` and open your project in visual code:
   ```bash
   code .
   ```
