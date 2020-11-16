// UC1 IF ELSE Condition
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;

    if (empCheck == IS_ABSENT) {
        console.log("UC1- employee is absent");
        // return;
    } else {
        console.log("UC1 - employee is present");
    }
}

// UC2 Switch Case
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// UC3 
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
var empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + empWage);

// UC 4 wage for a month
const NUM_OF_WORKING_DAYS = 20;
empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs + " employee wage " + empWage);

// UC 5 while loop
{
    const MAX_HRS_IN_MONTH = 160;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC5- Total Days: " + totalWorkingDays +
        " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);
}

//UC 6 Arrays and 7 Maps
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

{
    const MAX_HRS_IN_MONTH = 160;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();

    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(totalEmpHrs));
        empDailyHrsMap.set(totalWorkingDays, empHrs);
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }

    let empWage = calcDailyWage(totalEmpHrs);
    console.log("Uc6 - total days " + totalWorkingDays + " total wage " + empWage);
    console.log("Array: " + empDailyWageArr);

    console.log("Map: " + empDailyWageMap);
    console.log("UC7- Emp wage map: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));


    // UC9 Arrow functions 
    const findTotal = (totalVal, dailyVal) => {
        return totalVal + dailyVal;
    }

    let count = 0;
    let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
    let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
    console.log("UC9A - Emp Wage with Arrow: " + " Total Hours: " + totalHours + " Total Wages: " + totalSalary);
    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((value, key, map) => {
        if (value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log("Full Working Days: " + fullWorkingDays);
    console.log("Part Working Days: " + partWorkingDays);
    console.log("Non Working Days: " + nonWorkingDays);
}
