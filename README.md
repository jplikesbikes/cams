# web-base
Use this to start other web projects. It gives you a good base to start from including
+ has an .editorconfig to enforce typographic style like tabs instead of spaces and no trailing whitespace
+ uses eslint to enforce javascript coding conventions such as no `var`s perfer arrow functions, etc
+ compiles es6 using babel and webpack (includes sourcemaps)
+ compiles jade -> html or strings (.tpl) 
+ compiles sass -> css adding browser specific prefixes where necessary

## New projects
First create a new repository on [github](https://github.com/new)
```
git clone git@github.com:jplikesbikes/web-base.git newrepos
cd newrepos
git remote rename origin upstream
git remote add origin git@github.com:jplikesbikes/newrepos
git push -u origin master  
```
Update the package.json name and repository.
Update the readme.
Your good to go!

## Develop
```
npm install
npm test // run tests
npm run linter // lint and auto fix errors
npm run web-test //  run tests in browser with webpack-dev-server
open localhost:8080/test.bundle
npm run server // run webpack-dev-server with hot module reloading
open localhost:8080
```

Watching Tests
```
npm test -- --watch
```

Compile into `bin`
```
npm run compiler
```
