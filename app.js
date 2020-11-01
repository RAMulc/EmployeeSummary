const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const questions = require("./lib/questions.js");

const writeFile = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function directoryExists() {
    if (fs.existsSync(OUTPUT_DIR)) {
        return true;
    }
    fs.mkdir(OUTPUT_DIR, function (err) {
        if (err) {
            return false;
        }
    })
    return true;
}

// function to write html file
async function writeToFile(data) {
    // Do not overwrite an existing file
    if (!fs.existsSync(outputPath)) {
        await writeFile(outputPath, data, "utf8");
    }
}

async function getEmployeeData(isManager, id) {
    let newEmployee;

    if (isManager) {
        const resManager = await inquirer.prompt(questions.managerQuestions);
        const resCommon = await inquirer.prompt(questions.commonQuestions);
        newEmployee = new Manager(resManager["name"],
            id,
            resCommon["email"],
            resManager["officeNumber"]);
    }
    else {
        const resEmpType = await inquirer.prompt(questions.employeeType);
        const resCommon = await inquirer.prompt(questions.commonQuestions);
        switch (resEmpType["employeeType"]) {
            case ("Engineer"):
                const resEmployee = await inquirer.prompt(questions.engineerQuestions);
                newEmployee = new Engineer(resEmpType["name"],
                    id,
                    resCommon["email"],
                    resEmployee["githubUserName"]);
                break;
            case ("Intern"):
                const resIntern = await inquirer.prompt(questions.internQuestions);
                newEmployee = new Intern(resEmpType["name"],
                    id,
                    resCommon["email"],
                    resIntern["school"]);
                break;
            default:
                break;
        }
    }

    return newEmployee;
}

async function getEmployees() {
    let employees = [];
    let id = 1;
    const manager = await getEmployeeData(true, id);
    employees = [...employees, manager];
    id++;
    // Assume there is at least one employee reporting to the manager
    let resAdd = "yes";
    do {
        const employee = await getEmployeeData(false, id);
        employees = [...employees, employee];
        id++;
        resAdd = await inquirer.prompt(questions.anotherEmployee);
    } while (resAdd["add"].toLowerCase() === "yes");
    return employees;
}

async function init() {
    directoryExists();

    // check if the readme.md file already exists in the folder, abort if true
    if (fs.existsSync(outputPath)) {
        console.error(outputPath + " already exists! Delete or rename this file before proceeding.");
        return;
    }

    const allEmployees = await getEmployees();
    const html = render(allEmployees);
    writeToFile(html);
}

init();