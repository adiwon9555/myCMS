#!/usr/bin/env node

const program=require('commander');
const cmd = require('node-cmd');


program
  .version('0.0.1')
  .description('CLI tool for dynamic building components of website \nType myCMS <path to your JSON configuration file> to build a website with the congiguration supplied');

program
  .command('myCMS <jPath>')
  .alias('n')
  .description('n <jsonPath> ----> give a json path to set properties for the website')
  .action((jPath) => {
      console.log("Entered json path : - ", jPath);
     cmd.get('XCOPY "'+jPath+'" "./myAngular/src/assets/jsonFiles" /Y',(err,data,stderr)=>{
       console.log("Building your Program with the properties provided \n");
        cmd.get('cd myAngular && ng build --prod && cd ..',(err,data,stderr)=>{
          console.log(data,"\nBuild Successfull","\n\nPublishing to web server\n");
          //cmd.get('del "E:/softwares/apache-tomcat-8.5.34 (1)/apache-tomcat-8.5.34/webapps/ROOT" /s /q',()=>{
          cmd.get('xcopy "./myAngular/dist/myAngular" "E:/softwares/apache-tomcat-8.5.34 (1)/apache-tomcat-8.5.34/webapps/ROOT" /s /e /y',(err,data,stderr)=>{
            console.log("\nTask Complete")
          })

        })
     });
     
      
      
});

program.parse(process.argv);

