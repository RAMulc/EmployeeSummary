const anotherEmployee = [
    {
        type: 'list',
        name: 'add',
        message: "\nAdd another employee?",
        default: "Yes",
        choices: ["Yes", "No"]
    }
];

const employeeType = [
    {
        type: 'list',
        name: 'employeeType',
        message: "\nAdding new employee. Select EMPLOYEE TYPE",
        default: "Engineer",
        // Assumes we have a single manager at the top level
        choices: ["Engineer", "Intern"]
    },
    {
        type: 'input',
        name: 'name',
        message: "Please enter employee NAME.",
        default: ""
    },
];

const commonQuestions = [
    {
        type: 'input',
        name: 'email',
        message: "Enter EMAIL address.",
        validate: function (value) {
            var pass = validateEmail(value);
            if (pass) {
                return true;
            }
            return "Please enter a VALID EMAIL.";
        }
    }

];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter managers' NAME.",
        default: ""
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter OFFICE NUMBER.",
        default: ""
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'githubUserName',
        message: "Enter GitHub USERNAME.",
        isRecursive: false
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: "Enter name of SCHOOL.",
        isRecursive: false
    }
];

// function to validate the email format entered
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = {
    employeeType: employeeType,
    commonQuestions: commonQuestions,
    managerQuestions: managerQuestions,
    engineerQuestions: engineerQuestions,
    internQuestions: internQuestions,
    anotherEmployee: anotherEmployee
}