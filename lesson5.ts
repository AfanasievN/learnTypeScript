// Classes

class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: TS version is ${this.version}`;
    }
}

// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;
//
//     constructor(theModel: string) {
//         this.model = theModel;
//     }
// }

class Car {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {}
}

// =======
// Modificators

class Animal {
    protected voice: string = '';
    public color: string = 'black';

    constructor() {
        this.go();
    }

    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
        // is private prop - this.go();
    }
}

const cat = new Cat();
// is protected = cat.voice;
cat.setVoice('Meow');
console.log(cat.color);

// ============
// Abstract classes

abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }
    info(): string {
        return 'This is info';
    }
}


