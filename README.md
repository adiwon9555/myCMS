# myCMS
Component management System to dynamically modify, build and deploy angular app using JSON file.

Prerequisites to use the app-:
In the project root folder run this commands:-
```
npm install
npm install -g yarn
npm install -g
yarn link
```

This is a CLI application written in nodejs that helps in auto building of angular web app using with your desired properties and components that you can specify in a JSON file and run it using the command -->

```
myCMS n <JSON file name>
```

This command has to be run from the project root directory.


Note: -

  a) For deploying in localhost using Tomcat or other server, just change the deployment path inside the code.
  
  b) For any other server in cloud just use the build files inside myAngular/dist/myAngular directory and copy it in the deployment server.

Techonlogy used :-nodejs,yarn, Commander.js, node-cmd,angular-6


