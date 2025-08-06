import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true,'user name is required'],
            minLength: 3,
            maxLength: 20,
        },

        email:{
            type: String,
            required: [true, 'email is required'],
            unique: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
        },
        password:{
            type:String,
            required: [true, 'password is required'],
            minLength: 6,
        }
    }, options = { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;

