class Microsoft {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

    occupation() {
        return `${this.name} is a philanthropist!`;
    }
}

class Facebook extends Microsoft {
    constructor(name, age) {
        super(Microsoft)
        this.name = name;
        this.age = age;
    }
    studentAge() {
        return `${this.name} is ${this.age}`;
    }
}
let henry = new Microsoft("William Henry Gates III");
henry.occupation();
let elliot = new Facebook("Mark Elliot Zuckerberg", 23);
elliot.occupation();
elliot.studentAge();

module.exports = {
    Microsoft,
    Facebook
}