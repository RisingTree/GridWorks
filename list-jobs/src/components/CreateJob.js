import React, { Component } from 'react';
import { Form, Input, TextArea, Button,Modal} from 'semantic-ui-react'
import axios from 'axios'
class CreateJob extends Component{
    constructor(props){
        super(props)
        this.Rerender = props.Rerender
        this.onChangeJobTitle=this.onChangeJobTitle.bind(this)
        this.onChangeTeam=this.onChangeTeam.bind(this)
        this.onChangePositions=this.onChangePositions.bind(this)
        this.onChangeSkills=this.onChangeSkills.bind(this)
        this.onChangeStatus=this.onChangeStatus.bind(this)
        this.onChangeSubmissions=this.onChangeSubmissions.bind(this)

        this.state={
            title:'',
            team:'',
            positions:'',
            skills:'',
            status:'',
            submissions:''
        }
    }
    onChangeJobTitle=(e)=>{
        this.setState({title:e.target.value})
    }
    onChangeTeam=(e)=>{
        this.setState({team:e.target.value})
    }
    onChangePositions=(e)=>{
        this.setState({positions:e.target.value})
    }
    onChangeSkills=(e)=>{
        this.setState({skills:e.target.value})
    }
    onChangeStatus=(e)=>{
        this.setState({status:e.target.value})
    }
    onChangeSubmissions=(e)=>{
        this.setState({submissions:e.target.value})
    }
    onSubmit=(e)=> {
        e.preventDefault()
        
        const JobObject ={
            title:this.state.title,
            team:this.state.team,
            positions:this.state.positions,
            skills:this.state.skills,
            status:this.state.status,
            submissions:this.state.submissions
        }
        console.log(JobObject)
        axios.post('http://localhost:5000/', JobObject)
        this.setState({title: '', team: '', positions: '', skills:'', status:'',submissions:''})
        
    }
    render(){
        return(
            <Modal trigger = {<Button>Add New Job</Button>} closeIcon>
                <Modal.Header>Create a Job Listing </Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-job-title'
                                control={Input}
                                onChange={this.onChangeJobTitle}
                                value ={this.state.title}
                                label='Job Title'
                                placeholder='ex. Software Engineer'
                            />
                            <Form.Field
                                id='form-input-control-team'
                                control={Input}
                                onChange={this.onChangeTeam}
                                value ={this.state.team}
                                label='Team'
                                placeholder='ex. Amazon'
                            />
                            <Form.Field
                                id='form-input-control-positions'
                                onChange={this.onChangePositions}
                                value ={this.state.positions}
                                control={Input}
                                label='Positions'
                                placeholder='# of Avaliable positions'
                            />
                        </Form.Group>
                        <Form.Field
                            id='form-textarea-control-skills'
                            control={TextArea}
                            onChange={this.onChangeSkills}
                            value ={this.state.skills}
                            label='Skills'
                            placeholder='C#, REACT, Swift etc.'
                        />
                        <Form.Group>
                            <Form.Field
                                id='form-input-control-status'
                                onChange={this.onChangeStatus}
                                value ={this.state.status}
                                control={Input}
                                label='Status'
                                placeholder='This position has been filled'
                            />
                            <Form.Field
                                id='form-input-control-submissions'
                                onChange={this.onChangeSubmissions}
                                value ={this.state.submissions}
                                control={Input}
                                label='Submissions'
                                placeholder='# of Submissions to a position'
                            />
                        </Form.Group>
                        <Button
                            id='form-button-control-public'
                            type='submit'
                            label='Add Job'
                        />
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default CreateJob





