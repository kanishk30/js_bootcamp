const Person = function (firstName, lastName, age, likes = []) {
    console.log(this); // person {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

Person.prototype.getBio = function () {
    return `${this.firstName} is ${this.age} and lives in ${this.location} `;
}

Person.prototype.setName = function (fullName) {
    if (fullName.indexOf(' ') > 0) {
        this.firstName = fullName.split(' ')[0];
        this.lastName = fullName.split(' ')[1];    
    }
    
}

Person.prototype.location = 'India';



const me = new Person('Kanishk', 'Agrawal', 23, ['Teaching', 'Sleeping']);
me.setName('Sarthak Joshi');

console.log(me.getBio());

const person2 = new Person('Kanika', 'Singhal', 22, []);

console.log(person2.getBio());