const uuid = require('uuid')
class Notifications {
    constructor(type, from, seen) {
        this.type = type;
        this.from = from;
        this.seen = seen;
        this.id = uuid.v4();

    };
};

// const notifications = [
//     {
//         type: 'Invitation',
//         to: 'Nom',
//         from: 'mado',
//         seen: false,
//         id: uuid.v4()
//     },
//     {
//         type: 'Crime and Puishment',
//         to: 'mon',
//         from: 'omar',
//         seen: false,
//         id: uuid.v4()
//     },
//     {
//         type: 'Invitation',
//         to: 'donny',
//         from: 'ammar',
//         seen: false,
//         id: uuid.v4()
//     },
//     {
//         type: 'The Art of War',
//         to: 'kann',
//         from: 'fahmy',
//         seen: false,
//         id: uuid.v4()
//     },
//     {
//         type: 'Macbeth',
//         to: 'William Shakespeare',
//         from: 'joe',
//         seen: true,
//         id: uuid.v4()
//     },
//     {
//         type: 'Invitation',
//         to: 'bynn',
//         from: 'alice',
//         seen: false ,
//         id: uuid.v4()
//     },
//     {
//         type: 'The Archetypes and the Collective Unconscious',
//         to: 'synn',
//         from: 'samy',
//         seen: true ,
//         id: uuid.v4()
//     },
//     {
//         type: 'Invitation',
//         to: 'lynn',
//         from: 'alex',
//         seen: false ,
//         id: uuid.v4()
//     }
// ]
module.exports = Notifications
