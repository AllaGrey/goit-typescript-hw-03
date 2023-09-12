class Key  {
    private signature: number
    
    constructor() {
        this.signature = Math.random()
    }

    getSignature() {
        return this.signature
    }
}

class Person  {
    private key: Key;

    constructor(key: Key) {
        this.key = key
    }
    getKey(): Key {
        return this.key
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key | undefined;
    protected tenants: Person[] = []

    constructor(key: Key) {
        this.key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Welcome');
        } else {
            console.log('The door is closed');
        }
    }

}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key?.getSignature()) {
            this.door = true
            console.log('Welcome'); 
        } else {
            this.door = false
            console.log('The door is closed');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};