import React from 'react';
// import { Link } from 'react-router-dom';
import {Table}from 'semantic-ui-react'

const JobListRow =({title, team, positions,skills, status,submissions})=> {
        return (
            <Table.Row>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell>{team}</Table.Cell>
                <Table.Cell>{positions}</Table.Cell>
                <Table.Cell>{skills}</Table.Cell>
                <Table.Cell>{status}</Table.Cell>
                <Table.Cell>{submissions}</Table.Cell>
            </Table.Row>
        );
}

export default JobListRow