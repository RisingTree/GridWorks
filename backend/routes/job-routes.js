const express = require('express')
const router =express.Router();
const {check} = require('express-validator')
const jobsControllers=require('../controllers/job-controllers')

router.get('/jobs', jobsControllers.getJobs)

router.post('/',
    [   check('title').not().isEmpty(),
        check("team").not().isEmpty(),
        check('positions').not().isEmpty(),
        check('skills').not().isEmpty(),
        check('status').not().isEmpty(),
        check('submissions').not().isEmpty()
    ],
    jobsControllers.createJob
)


module.exports=router;