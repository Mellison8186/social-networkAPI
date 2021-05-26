const { Schema, model } = require(`mongoose`);

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reactions: []
});

// create the Thought model using thoughtSchema
const Thought = model(`Thought`, ThoughtSchema);
// export the User model
model.exports = Thought;