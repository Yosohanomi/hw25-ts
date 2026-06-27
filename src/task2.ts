// Принцип «Dependency Inversion Principle»:
// 1️⃣ Зберігання даних:
// Клас UserManager напряму використовує MySQLService.
// Виділи інтерфейс Database і зроби так, щоб можна було замінювати БД без зміни UserManager.

interface IDatabase {
    save(data:string):void
}

class MySQLService implements IDatabase {
    save(data: string): void {
        console.log('SQL saved ', data);
    }
}

class UserManager {
    constructor (
        private db:IDatabase
    ) {}

    saveName(name:string) {
        this.db.save(name)
    }
}
const userService = new UserManager(new MySQLService())
userService.saveName("Sofia")

// 3️⃣ Логування:
// Клас OrderService напряму викликає ConsoleLogger.
// Зроби так, щоб логер інжектувався через інтерфейс (наприклад, Logger), щоб його можна було замінити на
// FileLogger.

interface ILog {
    log(data:string):void
}

class ConsoleLogges implements ILog {
    log(data: string): void {
        console.log("Console had logged ", data);
    }
}

class FileLogger implements ILog {
    log(data: string): void {
        console.log("You logged such files as ", data);
    }
}

class OrderService {
    constructor(
        private logger: ILog
    ) {}
    logData(data:string) {
        this.logger.log(data)
    }
}

const userFileService = new OrderService(new FileLogger())
userFileService.logData("File121.pdf")

const userConsoleService =  new OrderService(new ConsoleLogges()) 
userConsoleService.logData("Console data")

// 4️⃣ Обробка платежів:
// Клас Checkout напряму залежить від PayPalPayment.
// Виділи абстракцію OrderService, щоб можна було передати іншу реалізацію (StripePayment).

interface IOrderService {
    payment(cash:number):void
}

class PayPalPayment implements IOrderService {
    payment(cash: number): void {
        console.log("You paid ", cash, " by PayPal");
    }
}
class StripePayment implements IOrderService {
    payment(cash: number): void {
        console.log("You paid ", cash, " by Stripe");
    }
}

class Checkout {
    constructor (
        private paymentStyle: IOrderService
    ) {}
    payForGrocery(cash:number) {
        this.paymentStyle.payment(cash)
    }
}

const userStripeCheckout = new Checkout(new StripePayment())
userStripeCheckout.payForGrocery(250)

const userPayPalCheckout =  new Checkout(new PayPalPayment()) 
userPayPalCheckout.payForGrocery(260)
// 5️⃣ Робота із зовнішніми API:
// Клас WeatherApp напряму викликає OpenWeatherAPI.
// Зроби інтерфейс WeatherProvider, щоб потім можна було використовувати будь-який інший API
// (наприклад, MeteoAPI).

interface IWeatherProvider {
    openApi(apiName:string):void
}

class MeteoAPI implements IWeatherProvider {
    openApi(apiName: string): void {
        console.log("There will be meteors by what " , apiName, " said");
    }
}
class OpenWeatherAPI implements IWeatherProvider {
    openApi(apiName: string): void {
        console.log("Forecast by ", apiName, " for tomorrow");
    }
}

class WeatherApp {
    constructor (
        private api: IWeatherProvider
    ) {}
    watchForecast(api:string) {
        this.api.openApi(api)
    }
}

