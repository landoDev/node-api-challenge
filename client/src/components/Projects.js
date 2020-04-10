import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/api/projects')
        .then(res=>{
            console.log(res)
            // setProjects(res.data)
        })
    }, [])
    return(
        <h2>Placeholder</h2>
    )
}

export default Projects;