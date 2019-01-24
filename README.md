# Deploying a React App with webpack(bundle.js) to GitHub Pages

\* created using `create-react-app`

# Introduction

In this tutorial, I'll show you how I deployed a React app—which I created using `create-react-app`—to GitHub Pages.

You can visit the deployed app, at [https://haribhai.github.io/react-router/](https://haribhai.github.io/react-router/).

This repository contains the files related to the app. The `master` branch contains the app's source code (the code the app's developers edit), and the `gh-pages` branch contains a *built* version of the app (i.e. the code that GitHub Pages serves to the app's visitors).

The remainder of this document contains a tutorial on creating a React app (using `create-react-app`) and deploying that app to GitHub Pages.

# Tutorial

## Prerequisites

1. An adequate version of [`Node.js`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ node --version
    v6.10.1
    ```

2. An adequate version of  [`npm`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ npm --version
    3.10.10
    ```
3. An adequate version of [`create-react-app`](https://github.com/facebookincubator/create-react-app) is installed. Here's the adequate version I use:

    ```sh
    $ create-react-app --version
    1.3.1
    ```

    In the case of `create-react-app`, you can either install it globally (i.e. `$ npm install -g create-react-app`) or install it locally (i.e. `$ npm install create-react-app`). If you choose the latter, you will have to specify its path whenever you invoke it (e.g. `path/to/node_modules/.bin/create-react-app`).

4. (**Optional**) An adequate version of [`sed`](http://www.gnu.org/software/sed/) is installed. Here's the adequate version I use:

   ```sh
   $ sed --version
   sed (GNU sed) 4.4
   ```

5. A [GitHub](https://www.github.com) account. :octocat:

6. A command-line Git client [setup according to GitHub](https://help.github.com/articles/set-up-git/).

## Procedure

1. **Create an *empty* repository on GitHub.** (2 minutes)

    * For this tutorial, I'll create a repository named `react-gh-pages`.
    * By *empty*, I mean *without* a `README.md` file, a `.gitignore` file, a `LICENSE` file, or any other files(its all up to you.later on you can edit it).

2. **Create a new React app on your computer.** (5 minutes)

    ```sh
    $ create-react-app react-router
    ```
    
    * This is the app you will deploy to GitHub Pages in step 7.
    * I opted to give the app the same name as my GitHub repository (i.e. `react-router`). However, you can name them differently from one another (e.g. you can name your app `app-123` and your GitHub Repository `repo-456`).
    * This will create a new folder named `react-router` (or whatever you named your app) on your computer.
    * Install all other webpack + react-router dev dependencies and use them in your react-app.

3. **Install the `gh-pages` package as a "dev-dependency" of the app.** (1 minute)

    ```
    $ cd react-router
    $ npm install gh-pages --save-dev
    ```
    
    * The commands shown in the following steps can all be issued from within the app's folder.

4. **Add some properties to the app's `package.json` file.** (3 minutes)

    * At the top level, add a `homepage` property. Define its value to be the string `http://{username}.github.io/{repo-name}`, where `{username}` is your GitHub username, and `{repo-name}` is the name of the GitHub repository you created in step 1. Since my GitHub username is `haribhai` and the name of my GitHub repository is `react-router`, I added the following property:
    
    ```js
    //...
    "homepage": "http://haribhai.github.io/react-router"
    ```
    
    * In the existing `scripts` property, add a `deploy` property, each having the values shown below:

    ```js
    "scripts": {
      //...
      "deploy": "gh-pages -d bundle"
    }
    ```
    
    * **Shortcut:** Instead of adding those properties using a text editor; if I have `sed` installed on my system, I can add the properties by issuing the following shell commands:
    
    ```sh
    $ sed -i '5i\  "homepage": "http://haribhai.github.io/react-router",' ./package.json
    $ sed -i '16i\    "deploy": "gh-pages -d bundle",' ./package.json
    ```
    
5. **Create a git repository in the app's folder.** (1 minute)

    ```
    $ git init
    Initialized empty Git repository in C:/path/to/react-router/.git/
    ```

6. **Add the GitHub repository as a "remote" in your local git repository.** (1 minute)

    ```
    $ git remote add origin https://github.com/haribhai/react-router.git
    ```
    
    * This will make it so the `gh-pages` package knows where you want it to deploy your app in step 7.
    * It will also make it so git knows where you want it to push your source code (i.e. the commits on your `master` branch) in step 8.

7. **Generate a *production build* of your app, and deploy it to GitHub Pages.** (2 minutes)

    ```
    $ npm run build
    
    $ npm run deploy
    ```
    
    * That's it! Your app is now accessible at the URL you specified in step 4.
    * In my case, my app is now accessible at: https://haribhai.github.io/react-router/
    * I recommend exploring the GitHub repository at this point. When I explored it, I noticed that, although a `master` branch did not exist, a `gh-pages` branch did exist. I noticed the latter contained the *built* app code, as opposed to the app's source code.

8. **Optionally, commit your source code to the "master" branch and push your commit to GitHub.** (1 minute)

    ```
    $ git add .
    $ git commit -m "Create a React app and publish it to GitHub Pages"
    $ git push origin master
    ```

    * I recommend exploring the GitHub repository once again at this point. When I did that, I noticed that a `master` branch now existed, and it contained the app's source code.
    * So, the `master` branch held the source code, and the `gh-pages` branch held the *built* app code.
    
 9. **When, you run the npm run deploy command and get this error: fatal: A branch named 'gh-pages' already exists.**
    you simply have to do is...
    ```
    
    $ rm -rf node_modules/gh-pages/.cache
    
    ```
    or
    Go to your project's node_modules/gh-pages and delete '.cache' folder. (Manually deleting works).
    
    then...
    ```
    $ npm run deploy
    
    ```
 10. **Once you done with the above stufs you're almost done with the publish. if still there is any issue look at here all              posibilities**
 **! [rejected]        master -> master (non-fast-forward)**
error: failed to push some refs to 'https://github.com/haribhai/react-router.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.


commit all changes before pull
 ```
   
   $ git pull origin master --allow-unrelated-histories
    
 ```

then..

 ```
   
   $ git push origin master
   
    
 ```
* I recommend exploring the GitHub repository once again at this point. When I did that, I noticed that a `master` branch now existed, and it contained the app's source code.
   
11.**Congratulations!,You have successfully Deployed(Published) a React Application with webpack(bundle.js) to GitHub Pages.**

Happy Coding!
