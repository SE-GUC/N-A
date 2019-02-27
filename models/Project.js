
// The User Model
class Project {
    constructor(id,name,status,approved,time_needed,exp_level,comitment_level,descreption,price,partner_id,consultancy_agency_id,Contributer_id,main_skill) {
        this.name = name;
        this.status = status;
        this.approved=approved;
        this.time_needed=time_needed;
        this.exp_level=exp_level;
        this.comitment_level=comitment_level;
        this.descreption=descreption;
        this.price=price;
        this.partner_id=partner_id;
        this.consultancy_agency_id=consultancy_agency_id;
        this.Contributer_id=Contributer_id;
        this.id = id;
        this.main_skill=main_skill;
        this.extra_skills=[];
        this.extra_attribute=[];
    };
};

module.exports = Project

