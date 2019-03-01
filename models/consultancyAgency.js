const uuid = require('uuid')

// The consultancyAgency Model
class consultancyAgency {
    constructor(information) {
        this.information = information;
        this.id = uuid.v4();
    };
};

module.exports = consultancyAgency

