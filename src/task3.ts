// Generics:

// 1. Опиши функцію combine<T, U>, яка приймає два об’єкти різних типів
// і повертає новий об’єкт,
// що містить властивості обох.

function combine<T, U>(a:T, b:U) {
    return { ...a, ...b };
}
const user = { name: "Sofia" };
const info = { age: 16 };
const result = combine(user, info);

// 2. Отримання випадкового елемента
// Опиши функцію getRandom<T>, яка приймає масив будь-якого типу та повертає випадковий
// елемент з нього.

function getRandom<T>(arr: T[]): T {
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

class Queue<T> {
    constructor (private queue:T[]){}
    enqueue(item: T) {
        this.queue.push(item)
    }
    dequeue(): T | undefined {
        return this.queue.shift();
    }
    size():number {
        return this.queue.length
    }
}

// 4. Робота з парою значень
// Створи клас Pair<T, U>, який зберігає два значення різних типів
// (first, second).
// Додай метод describe() для виведення інформації про обидва
// значення.
class  Pair<T, U> {
    constructor (
        public first:T,
        public second:U
    ) {}
    describe() {
        console.log(this.first);
        console.log(this.second);
    }
}

// 5. Колекція записів
// Опиши клас Repository<T>, який може зберігати об’єкти певного
// типу (наприклад, User, Product тощо).
// Передбач методи add(), getAll() і findById().

class Repository<T> {
    constructor (
        private someObject:T[]
    ){}
    add(item:T) {
        this.someObject.push(item)
    }

    getAll() {
        console.log(this.someObject);
    }

    findById(id:number) {
        console.log(this.someObject[id]);
    }
}

// 6. Менеджер операцій
// Створи клас OperationManager<T>, який зберігає список операцій
// будь-якого типу і має метод executeAll(callback: (item: T) => void)
// для виконання їх усіх.

class OperationManager<T> {
    constructor (
        private listOperations:T[]
    ){}
    executeAll(callback: (item: T) => void) {
        this.listOperations.forEach(callback);
    }
}

