const { Schema, model } = require('mongoose');
const reactionsSchema = new Schema()
const thoughtSchema = new Schema(
    // first documents, options for the schema
    {
        thoughtText: {
            type: String,
            required:true,
            minlength: 1,
            maxlength: 280,
        },
// String
// Required
// Must be between 1 and 280 characters
        createdAt: {
            type:Date,
            defalut: Date.now,
            get:(timestamp)=> {
                var d = new Date(timestamp);
                timeStampCon = d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
            
                return timeStampCon;
            },
        },

        unserName: {
            type:String,
            required:true,
        },

        reactions:[
            reactionsSchema
        ]
// createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// username (The user that created this thought)

// String
// Required
// reactions (These are like replies)

// Array of nested documents created with the reactionSchema

    },
    {
        toJSON: {getters:true}
    }
)

// Create a Virtual
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model(`thouhght`,thoughtSchema);

module.exports = Thought