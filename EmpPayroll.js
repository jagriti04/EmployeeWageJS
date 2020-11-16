class EmployeePayrollData {
    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('^[1-9]\d*$');
        if (idRegex.test(id))
            this._id = id;
        else throw 'Id is Incorrect!';
    }

    get salary() { return this._salary; }
    set salary(salary) {
        if (salary > 0)
            this._salary = salary;
        else throw 'Salary is Incorrect!';
    }

    get gender() { return this._gender; }
    set gender(gender) {
        if (gender === undefined || gender == "m" || gender == "M" || gender == "F" || gender == "f")
            this._gender = gender;
        else throw 'gender is invalid';
    }

    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            new Date(this.startDate).toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + "' , salary=" + this.salary
            + ", gender=" + this.gender + ", startDate=" + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try {
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}
try {
    let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
    console.log(newEmployeePayrollData.toString());
} catch (e1) {
    console.error(e1);
}
try {
    let newEmployeePayrollData2 = new EmployeePayrollData(2, "Jeff", -30000, "M", new Date());
    console.log(newEmployeePayrollData2.toString());
} catch (e2) {
    console.error(e2);
}
try {
    let newEmployeePayrollData3 = new EmployeePayrollData(1, "Bill", 40000, "b", new Date());
    console.log(newEmployeePayrollData3.toString());
} catch (e3) {
    console.error(e3);
}
