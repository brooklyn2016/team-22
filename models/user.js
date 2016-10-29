import mongoose from "mongoose";
import moment from "moment";
import bcrypt from "bcrypt-nodejs";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {type: String, unique: true},
    password: String,
    created: Number,

    lessons: Array, // will include objects conaining: lesson name, percent
                    // progress, number of questions completed, and number of
                    // questions left
    points: Number
});

userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        console.log('password not modified');
        return next();
    }

    bcrypt.genSalt(32, function (error, salt) {
        if (error) {
            return next(error);
        }

        bcrypt.hash(user.password, salt, null, function (error, hash) {
            if (error) {
                return next(error);
            }

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (error, isMatch) {
        if (error) {
            return callback(error);
        }

        callback(null, isMatch);
    });
};

// userSchema.plugin(passportMongoose);

export default mongoose.model("User", userSchema);
