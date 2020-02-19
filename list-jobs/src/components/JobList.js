import React, { Component } from 'react';
import JobTable from './JobTable'
import axios from 'axios'
import CreateJob from './CreateJob'
class JobList extends Component{
    state = {
        Jobs:[],
        page:1,
        itemsPerPage:5
    }
    setPageNum = (event, { activePage }) => {
        this.setState({ page: activePage });
    };
    getJobData= async () => {
        const response= await axios.get('http://localhost:5000/jobs')  
        const body =await response.data        
        console.log(body.Jobs)
        this.setState({Jobs: body.Jobs})
    }
    componentDidMount(){
        this.getJobData()
    }
    NoJobs =()=>{
            return (
                <div className="ui placeholder segment">
                    <div className="ui icon header">
                        <i className="dont icon"></i>
                            No Jobs have been posted yet!
                        </div>
                    <CreateJob/>
                </div>
            ) 
    }
    render(){
        console.log(this.state.Jobs)
        if(this.state.Jobs.length===0){
            return(
                this.NoJobs()
            ) 
        }
        else{
            console.log(this.state.Jobs)
        return(
            <JobTable jobs = {this.state.Jobs} page={this.state.page} itemsPerPage={this.state.itemsPerPage} onPage={this.setPageNum}/>
            )
        }
    }
}

export default JobList;