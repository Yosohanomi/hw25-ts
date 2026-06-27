//Interface segregation


///
// 2️⃣ Друк і сканування:
// Інтерфейс OfficeMachine має методи print(), scan(), fax().
// Клас SimplePrinter реалізує лише print(), решта не потрібні.
// Розбий інтерфейси, щоб класи реалізовували тільки потрібне.

interface Printable {
    print(printText:string):void
}
interface Scanable {
    scan(scanData:string):void
}
interface Faxable {
    fax(faxDocument:string):void
}

class SimplePrinter implements Printable {
    print(printText: string): void {
        console.log(printText);
    }
}
// 3️⃣ Мультимедіа-плеєр:
// Інтерфейс MediaPlayer містить playAudio(), playVideo(), recordAudio().
// Зроби окремі інтерфейси для аудіо-плеєра, відео-плеєра та рекордера.

interface PlayableAudio {
    play(audio:string):void
}
interface PlayableVideo {
    playVideo(video:string):void
}
interface RecordableVideo {
    record(audio:string):void
}

class Player implements PlayableAudio, PlayableVideo {
    play(audio: string): void {
        console.log(audio);
    }
    playVideo(video: string): void {
        console.log(video);
    }
}


// 4️⃣ Платформи повідомлень:
// Інтерфейс Messenger має методи sendEmail(), sendSMS(), sendPush().
// Зроби окремі інтерфейси для кожного типу повідомлення.
interface SendableEmail {
    sendEmail(email:string):void
}
interface SendableSMS {
    sendSMS(SMS:string):void
}
interface SendablePush {
    sendPush(push:string):void
}

// 5️⃣ Тварини:
// Інтерфейс Animal містить walk(), fly(), swim().
// Розбий інтерфейс так, щоб кожна тварина реалізовувала лише релевантні методи.

interface Walkable {
    walk(animal:string):void
}
interface Flyable {
    fly(animal:string):void
}
interface Swimable {
    swim(animal:string):void
}

class Fish implements Walkable {

    walk(animal: string): void {
        console.log(`this ${animal} can walk`);
    }
}