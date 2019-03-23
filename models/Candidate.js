const uuid = require('uuid')

// The Candidate Model
class Candidate {
  
    constructor(firstname,lastname ,email,password,Birthdate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email=email;
        this.password=password;
        this.Birthdate= new Date(Birthdate);
        this.intersts=[];
        this.past_project=[];
        this.certificates=[];
        this.joindate=new Date();
        this.skills=[];
        this.rate=0;
        this.review=[];
        this.age=(new Date().getFullYear())-(new Date(Birthdate).getFullYear());

        this.id = uuid.v4();
    };
};

module.exports = Candidate