import User from "./user";
import jwt from "jsonwebtoken";
import moment from "moment";
import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    lessonName: String,
    time: Number,
    numQuestions: Number,
    objective: String,
    background: Array,
    questions: Array,
});

export default mongoose.model("Lesson", lessonSchema);
