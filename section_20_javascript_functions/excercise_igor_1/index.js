/*
1. Створити кілька масивів з числами. Кожний масив - зарплати працівників за певний місяць року. Наприклад: 13600, 12440, 16800 і тп. Кількість значень у масиві довільна.
2. Створити функцію calcTotal(), яка прийматиме один із таких масивів у якості аргменту, валідуватиме кожне значення і повертатиме суму елементів масиву.
Якщо окреме значення масиву - не число, або воно <= 0 - виводити помилку в консоль (console.error), підрахунок суми можна не преривати при цьому.
3. викликати calcTotal для кожного з масивів 
*/

let WorkersSalaryFirst = [18473,28374,836746,83642,3764,39478]
let WorkersSalarySecond = [9384,43784,8485746, 0]
let WorkersSalaryThird = [18473,28374,836746,83642,3764,39478,97456,9374621,46573]
let TotalSum = 0
let ArrayCount = 0

function calcTotal(SalaryArray) {
    ArrayCount++
    for (let i = 0; i < SalaryArray.length; i++) {
        if (SalaryArray[i] <= 0 || typeof SalaryArray[i] != "number") {
            console.error("Елемент " + i + " в масиві " + ArrayCount + " дорівнює нулю або не є числом")
        } else {
            TotalSum += SalaryArray[i]
        }
    }
    return TotalSum;
}

console.log("Сума усіх елементів першого масиву: " + calcTotal(WorkersSalaryFirst) + "\n")
console.log("Сума усіх елементів другого масиву: " + calcTotal(WorkersSalarySecond) + "\n")
console.log("Сума усіх елементів третього масиву: " + calcTotal(WorkersSalaryThird) + "\n")

