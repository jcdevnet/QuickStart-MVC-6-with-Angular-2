# QuickStart-MVC-6-with-Angular-2
The new ASP.NET Core 1.0 is about to be released and so is the great Angular 2 framework. This is just my own adaptation of the Angular 2 Quick Start (rc1) running in Core 1.0 with Web API (rc2)

##How to get this going:
- Get all the solution files and open the solution in Visual Studio.
- Restore all the external javascript dependencies into the "node_modules" folde; there are two ways to accomplish this:
	- In Visual Studio, right-click on the "Dependencies" and select "Restore Packages"; 
	- or if you prefer the command prompt, make sure you are in the Project folder and execute
	> npm install
- Run the gulp task "load:sources" from the "Task Runner Explorer" in order to populate the requiered libraries inside the folder "wwwroot/$scripts" folder; yes... I know... horrible name, but it prevents Visual Studio to freeeze up or report 100+ errors with the typescript definitions of the external libraries since there is a bug in the exclusion folders that will be fixed in rc3 [here the reference](https://github.com/aspnet/Tooling/issues/18) as well as [here](https://github.com/aspnet/Tooling/issues/94) for the curious minds.

The above assumes some libraries, that are installed globally. In my case, I have these that will be used within this project:
- npm @ 3.9.3
- typings @ 1.0.5

You can check yours by executing:
> npm list -g --depth=0


##Some commands used:+1:

###Typings
To setup typings and the coresponding setting in the typings.json file:
> typings install dt~core-js --global --save


###Build
Execute npm install which in turn calls typings install

###Gulp Task 
"load:scripts" will clear the wwroot\$scripts folder and reload with the external scripts.


###Should remove this later
To learn more about the markdown syntax, refer to these links:

 - [Markdown Syntax Guide](http://daringfireball.net/projects/markdown/syntax)
 - [Markdown Basics](http://daringfireball.net/projects/markdown/basics)
 - [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/) 
 - [markdown at wikipedia](https://secure.wikimedia.org/wikipedia/en/wiki/Markdown)

