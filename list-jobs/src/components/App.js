import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import JobList from '../components/JobList'

const App =()=>{
    return (
        <div>
            <Router>
                <div className='ui container'>
                    <Switch>
                        <Route path='/' exact>
                            <JobList/>
                        </Route>
                        <Redirect to='/'/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App