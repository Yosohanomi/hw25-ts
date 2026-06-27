"use strict";
// Generics:
// 1. Опиши функцію combine<T, U>, яка приймає два об’єкти різних типів
// і повертає новий об’єкт,
// що містить властивості обох.
function combine(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const user = { name: "Sofia" };
const info = { age: 16 };
const result = combine(user, info);
// 2. Отримання випадкового елемента
// Опиши функцію getRandom<T>, яка приймає масив будь-якого типу та повертає випадковий
// елемент з нього.
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
// Використання:
const numbers = [1, 2, 3, 4, 5];
const randomNum = getRandom(numbers);
// 3. Менеджер черги
// Опиши клас Queue<T>, який реалізує чергу (FIFO).
// Додай методи enqueue(item: T), dequeue(): T | undefined і size():
// number.
class Queue {
    constructor(queue) {
        this.queue = queue;
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        return this.queue.shift();
    }
    size() {
        return this.queue.length;
    }
}
// 4. Робота з парою значень
// Створи клас Pair<T, U>, який зберігає два значення різних типів
// (first, second).
// Додай метод describe() для виведення інформації про обидва
// значення.
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    describe() {
        console.log(this.first);
        console.log(this.second);
    }
}
// 5. Колекція записів
// Опиши клас Repository<T>, який може зберігати об’єкти певного
// типу (наприклад, User, Product тощо).
// Передбач методи add(), getAll() і findById().
class Repository {
    constructor(someObject) {
        this.someObject = someObject;
    }
    add(item) {
        this.someObject.push(item);
    }
    getAll() {
        console.log(this.someObject);
    }
    findById(id) {
        console.log(this.someObject[id]);
    }
}
// 6. Менеджер операцій
// Створи клас OperationManager<T>, який зберігає список операцій
// будь-якого типу і має метод executeAll(callback: (item: T) => void)
// для виконання їх усіх.
class OperationManager {
    constructor(listOperations) {
        this.listOperations = listOperations;
    }
    executeAll(callback) {
        this.listOperations.forEach(callback);
    }
}
