const uuid = require('uuid')
class Messages {
    constructor(destination,content,viewed) {
        this.destination = destination;
        this.content = content;
        this.viewed = viewed;
        this.id = uuid.v4()
    };
};
module.exports = Messages