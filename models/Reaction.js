const { ObjectID } = require("bson");
const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionID: {
        type: ObjectID,
        default: new ObjectID,
    },
    reactionBody: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    reactions: []
});

// create the Reaction model using ReactionSchema
const Reaction = model('Reaction', ReactionSchema);
// export the Reaction model
module.exports = Reaction;