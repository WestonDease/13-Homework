const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TaskSchema = new Schema ({
    description: {
        type: String,
        required: true
    },
    check: {
        type: Number,

    }
});

var Task = mongoose.model("Task", TaskSchema);

module.exports = Task;