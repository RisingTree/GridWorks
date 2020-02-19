const Job = require('../models/job')
const {validationResult} = require('express-validator')

const createJob = async (req,res,next) =>{
    console.log(req.body)
    const errors =validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return next(
            new HttpError('Invalid Inputs, check data submitted.',422)
        )
    }
    const createdJob = new Job({
        title:req.body.title,
        team:req.body.team,
        positions:req.body.positions,
        skills: req.body.skills,
        status:req.body.status,
        submissions:req.body.submissions
    })
    try{
        await createdJob.save();
    }catch(err){
        const error = new HttpError("Creation of job failed",500)
        return next(error)
    }
    res.status(201).json({job: createdJob})
}
const getJobs = async (req,res,next)=>{
    const Jobs = await Job.find().exec();
    res.json({Jobs});
}

exports.getJobs=getJobs
exports.createJob=createJob