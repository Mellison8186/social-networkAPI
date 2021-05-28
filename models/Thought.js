const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => `${ThoughtSchema}${timestamp}`
    },
    username: {
        type: String,
        required: true
    },
    reactions: []
});

// create the Thought model using thoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;