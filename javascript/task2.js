"use strict";
// Принцип «Dependency Inversion Principle»:
// 1️⃣ Зберігання даних:
// Клас UserManager напряму використовує MySQLService.
// Виділи інтерфейс Database і зроби так, щоб можна було замінювати БД без зміни UserManager.
class MySQLService {
    save(data) {
        console.log('SQL saved ', data);
    }
}
class UserManager {
    constructor(db) {
        this.db = db;
    }
    saveName(name) {
        this.db.save(name);
    }
}
const userService = new UserManager(new MySQLService());
userService.saveName("Sofia");
class ConsoleLogges {
    log(data) {
        console.log("Console had logged ", data);
    }
}
class FileLogger {
    log(data) {
        console.log("You logged such files as ", data);
    }
}
class OrderService {
    constructor(logger) {
        this.logger = logger;
    }
    logData(data) {
        this.logger.log(data);
    }
}
const userFileService = new OrderService(new FileLogger());
userFileService.logData("File121.pdf");
const userConsoleService = new OrderService(new ConsoleLogges());
userConsoleService.logData("Console data");
class PayPalPayment {
    payment(cash) {
        console.log("You paid ", cash, " by PayPal");
    }
}
class StripePayment {
    payment(cash) {
        console.log("You paid ", cash, " by Stripe");
    }
}
class Checkout {
    constructor(paymentStyle) {
        this.paymentStyle = paymentStyle;
    }
    payForGrocery(cash) {
        this.paymentStyle.payment(cash);
    }
}
const userStripeCheckout = new Checkout(new StripePayment());
userStripeCheckout.payForGrocery(250);
const userPayPalCheckout = new Checkout(new PayPalPayment());
userPayPalCheckout.payForGrocery(260);
class MeteoAPI {
    openApi(apiName) {
        console.log("There will be meteors by what ", apiName, " said");
    }
}
class OpenWeatherAPI {
    openApi(apiName) {
        console.log("Forecast by ", apiName, " for tomorrow");
    }
}
class WeatherApp {
    constructor(api) {
        this.api = api;
    }
    watchForecast(api) {
        this.api.openApi(api);
    }
}
