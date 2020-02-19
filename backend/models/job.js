const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    title:{type:String, required:[true, 'Job title is required']},
    team:{type:String, required:[true,'Team is required']},
    positions:{type:Number, required:[true,'How many positions?']},
    skills:{type:String,required:[true,'Must have skills required']},
    status:{type:String, required:[true,"Has this position been filled?"]},
    submissions:{type:Number,required:[true, 'How many submissions so far?']}},
    {timestamps:true}
)

const Job = mongoose.model('Job', JobSchema);
module.exports = Job;