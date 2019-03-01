const uuid = require('uuid')

class location {
    constructor(name,country,city,street,capacity,fee,status,available_from,available,till,photo_link,id) {
        this.name = name;
        this.country = country;
        this.city = city;
        this.street = street;
        this.capacity = capacity;
        this.fee = fee;
        this.status = status;
        this.available_from = available_from;
        this.available = available;
        this.till = till;
        this.photo_link = photo_link;
        this.id = id;
    };
};

module.exports = location