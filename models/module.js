import User from "./user";
import jwt from "jsonwebtoken";
import moment from "moment";
import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    moduleName: String,
    time: Number,
    numQuestions: Number,
    objective: String,
    background: String,
    questions: Array,
});

export default mongoose.model("Module", moduleSchema);
