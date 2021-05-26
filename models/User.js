const { Schema, model } = require(`mongoose`);

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: () => Promise.resolve(false),
      message: `Email validation failed`
        }
    },
    thoughts: [],
    friends: []
});
const User = db.model(`User`, userSchema);
const user = new User();

// user.email = 'test@test.co';
// user.name = 'test';
user.validate().catch(error => {
  assert.ok(error);
  assert.equal(error.errors[`name`].message, `Oops!`);
  assert.equal(error.errors[`email`].message, `Email validation failed`);
});

// create the User model using UserSchema
const User = model(`User`, UserSchema);
// export the User model
model.exports = User;