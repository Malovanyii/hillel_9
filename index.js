let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalary(team) {
    if (Array.isArray(team)) {
        return team.reduce((acc, prev) => acc + prev.salary, 0);
    } else {
        return Object.values(team).reduce((acc, child) => acc + sumSalary(child), 0);
    }
}

let salaryResult = sumSalary(company);
console.log(salaryResult);