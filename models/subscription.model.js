import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        triim: true,  
        minLength: 3,
        maxLength: 50,  
    },
    price: {
        type: Number,
        required: [true , 'Price is required'],
        min: [0, 'price must be a positive number'],
        max: [10000, 'price must be less than 10000'],
    },
    currency :{
        type: String,
        required: [true, 'Currency is required'],
        enum: ['USD', 'EUR', 'GBP', 'INR'], // Add more currencies as needed
    },
    frequency:{
        type: String,
        required: [true, 'Frequency is required'],
        enum: ['monthly', 'yearly'], // Add more frequencies as needed
    },
    category: {

        type: String,
        required: [true, 'Category is required'],  
        enum:['sports', 'entertainment', 'education', 'health', 'technology'], // Add more categories as needed
    },
    paymentMethod:{
        type: String,
        required: [true, 'Payment method is required'],
        trim: true,
        enum: ['credit_card', 'paypal', 'bank_transfer'], // Add more payment methods as needed

    },
    status:{
        type: String,
        required: [true, 'Status is required'],
        enum: ['active', 'inactive', 'cancelled'], 
        default:'active',
    },
    startDate: {
        type : Date,
        required: true,
        validate: {
            validator:(value) <= new Date(),   
            message: 'Start date cannot be in the future'
        }
        },
        renewalDate: {
            type : Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > new Date();
            },
            message: 'Start date cannot be in the future'
        }
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
        }
}, options = { timestamps: true });

// Auto calculate renewal date if missing
subscriptionSchema.pre('save', function(next) {
    if (!this.renewalDate) {
        const frequencyPeroids = {
            daily:1,
            weekly: 7,
            monthly: 30,        
            yearly: 365,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    if (new Date > this.renewalDate) {
        this.status = 'inactive'; // Set status to inactive if renewal date is in the past
    }
    next();
});
const Subscription = mongoose.model('Subscription', subscriptionSchema);
