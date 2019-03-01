// const uuid = require('uuid')

// // The User Model
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.id = uuid.v4();
//     };
// };

// module.exports = User

const uuid = require('uuid')

// The User Model
class Admin {

    constructor(first_name,last_name,email,password,birth_date ) {
        this.id = uuid.v4();
        this.first_name = first_name;
        this.last_name = last_name;
        this.email=email;
        this.password=password;
        this.birth_date = new Date(birth_date);
        this.age = (new Date().getFullYear())-new Date(birth_date).getFullYear();

        ;
        this.join_date = new Date();
    };
};


module.exports = Admin
