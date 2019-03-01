// The Book Model
const uuid = require('uuid')
class Co_working_space{
    constructor(basic_Info, Name, Email, password,Business_plans_offer,Rooms,Facilities) {
        this.basic_Info = basic_Info;
        this.Name = Name;
        this.Email = Email;
        this.Business_plans_offer = Business_plans_offer;
        this.Rooms = Rooms;
        this.Facilities = Facilities;
        this.id = uuid.v4();
    };
}       

module.exports = Co_working_space