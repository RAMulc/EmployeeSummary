# Employee Summary
Template Engine - Employee Summary



**<u>Links:</u>**

[Demo Video:](https://github.com/RAMulc/EmployeeSummary/blob/main/demo/DemoVideo.webm)

[Demo Team.html:](https://github.com/RAMulc/EmployeeSummary/blob/main/demo/team.html)

[Repository:](https://github.com/RAMulc/EmployeeSummary)



**<u>Description:</u>**



A Node command line application used to generate a team summary.

The application initially prompts the user for information about the manager, and subsequently about the managers team. The team may be a mixture of engineers and interns. When the user has completed building the team, the application creates a html file that displays consolidated information regarding the team.

The application uses [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/)  to prompt the user to supply required information (name, email, GitHub user name, school, office number etc.) 

Below is an example of the output html file. 

![](https://github.com/RAMulc/EmployeeSummary/blob/main/demo/Screenshot.png)



<u>**Installation:**</u>

Run npm install to install Inquirer package.



**<u>Usage:</u>**

- Run 'node app.js' at the command line to start the program. 
- Follow the on screen prompts to answer all the questions.
- The team.html output file will be stored in the 'output directory' of the working directory. 
  - Note: If team.html already exists the application will abort, requesting the user to rename or delete the existing team.html file.

