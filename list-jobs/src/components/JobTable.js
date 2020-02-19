import React from 'react';
import { Table,Segment,Pagination} from 'semantic-ui-react'
import JobListRow from './JobListRow'
import CreateJob from '../components/CreateJob';


const JobTable = (props) =>{
    
    const itemsPerPage=props.itemsPerPage
    const page =props.page
    const totalPages = props.jobs.length/itemsPerPage
    const jobs = props.jobs.slice(
        (page - 1) * itemsPerPage,
        (page - 1) * itemsPerPage + itemsPerPage
    )
    console.log(props)
    return(
        <div className='ui container'>
            <Table celled>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Job Title </Table.HeaderCell>
                <Table.HeaderCell>Team</Table.HeaderCell>
                <Table.HeaderCell>Positions</Table.HeaderCell>
                <Table.HeaderCell>Skills</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Submissions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {jobs.map((job)=>(
                    <JobListRow
                    key ={job._id} 
                    id={job._id} 
                    title={job.title} 
                    team={job.team} 
                    positions={job.positions} 
                    skills={job.skills}
                    status ={job.status} 
                    submissions={job.submissions}
                    />
                    ))
                }
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                    </Table.HeaderCell>
                </Table.Row>
                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    onPageChange={props.onPage}
                    siblingRange={1}
                    totalPages={totalPages}
                />
            </Table.Footer>
        </Table> 

        <Segment compact>
            <CreateJob/>
        </Segment>   
    </div>
    )
}

export default JobTable