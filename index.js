// Your code here
//Payroll System
function createEmployeeRecord(arr){
    let employee = {
    "firstName" : `${arr[0]}`,
    "familyName" : `${arr[1]}`,
    "title" : `${arr[2]}`,
    "payPerHour": arr[3],
    "timeInEvents": [],
    "timeOutEvents": []
    }
    return employee
}

function createEmployeeRecords(arrs) {
    let emptyArr = []
    arrs.forEach(arr => {
        let employee = createEmployeeRecord(arr)
        emptyArr.push(employee)
        // console.log(emptyArr)
    })
    return emptyArr
}

function createTimeInEvent(employee, timeIn){
    let clock = timeIn.split(" ")
    let timeStamps = {
        "type":  "TimeIn",
        "date": clock[0],
        "hour": parseInt(clock[1])
    }
    employee.timeInEvents.push(timeStamps)
    return employee
}

function createTimeOutEvent(employee, timeOut){
    let clock = timeOut.split(" ")
    let timeStamps = {
        "type":  "TimeOut",
        "date": clock[0],
        "hour": parseInt(clock[1])
    }
    employee.timeOutEvents.push(timeStamps)
    return employee
}

function hoursWorkedOnDate(employee){
    let timeOut = employee.timeOutEvents[0].hour
    let timeIn = employee.timeInEvents[0].hour
    let timeWorked = (timeOut - timeIn)/100
    return timeWorked
}

function wagesEarnedOnDate(employee){
    let hoursWorked = hoursWorkedOnDate(employee);
    let wagesEarned = hoursWorked * employee.payPerHour
    return wagesEarned
}

function allWagesFor(employee){
    let dailyWages = []
    let i
    for (i=0; i < employee.timeInEvents.length; i++){
        let timeOut = employee.timeOutEvents[i].hour
        let timeIn = employee.timeInEvents[i].hour
        let timeWorked = (timeOut - timeIn)/100
        dailyWages.push(timeWorked)
    }
    let totalHours = dailyWages.reduce((total, num)=>{
        return total + num
    })
    let totalWages = totalHours * employee.payPerHour
    return totalWages
}

function calculatePayroll(employeeArr){
    let allPay = []
    let i
    for (i=0; i < employeeArr.length; i++){
            allPay.push(allWagesFor(employeeArr[i]))
    }
    let payRoll = allPay.reduce((total, num)=>{
        return total + num
    })
    return payRoll
}

function findEmployeeByFirstName(arr, name){
    let found = arr.find((employee)=>{
        employee.name == name
        return employee
    })
    return found
}