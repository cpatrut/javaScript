var Person =function(firstName,lastName){
    if(this===window){
        return new Person(firstName,lastName);
    }
    this.firstName=firstName;
    this.lastName=lastName;
    
    this.getFullName= function () {
            return this.firstName + " " + this.lastName;
        },
      this.greet= function (person) {
            if (person instanceof Person) {
                return "Hello," + person.getFullName();
            } else {
                return "Heloo there!";
            }
        };
};

var person= Person("john","doe");

alert(person.greet(person));
/*function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        },
        greet: function (person) {
            if (typeof person.getFullName !== "undefined") {
                return "Hello," + person.getFullName();
            } else {
                return "Heloo there!";
            }
        }
    };
}

var person1 = createPerson("john", "Doe");
 -->*/
