Setting up TypeScript with a Node/Express API, then adding some of my notes from "Node.js Design Patterns" (2nd edition).

resources: 

https://www.youtube.com/watch?v=zRo2tvQpus8

https://www.youtube.com/watch?v=rAy_3SIqT-E

Dependencies for Node/Express + TypeScript:
<code>sudo npm i -g typescript</code>
<code>npm i express</code>
<code>npm i -D typescript ts-node nodemon @types/node</code>

<h4>Development/Deployment notes:</h4>

The <code>tsconfig.json</code> is set up so that when running the command for the ts compiler, <code>tsc</code>, a <code>dist/</code> folder is then created containing an <code>app.js</code> file, which is the compiled version of our <code>app.ts</code> file. This <code>app.js</code> is what gets used in production, because remember: the browser does not understand <b>.ts</b> files!

TypeScript is really just a way of developing. It's not a live production tool really.

So when you're ready to compile your ts to regular JavaScript, just run <code>npm run build</code>. And keep in mind:

- <code>npm start</code> runs this <code>app.js</code> file
- <code>npm run dev</code> runs your development <code>app.ts</code> file


