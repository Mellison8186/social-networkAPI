const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        max: [280, 'You cannot have more than 280 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
{
    toJSON: {
        getters: true
    }
});

const ThoughtSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    thoughtText: {
        type: String,
        required: true,
        min: [1, 'Must have more than one character'],
        max: [280, 'Must be less than 280 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thought model using thoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;