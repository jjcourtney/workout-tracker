
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                required: "type property required",
            },
            name: {
                type: String,
                required: "name property required"
            },
            duration: {
                type: Number,
                required: "duration property required"
            },
            distance: Number,
            reps: Number,
            sets: Number,
            weight: Number,
        },
    ],
});

export const Workout = mongoose.model("Workout", workoutSchema);

