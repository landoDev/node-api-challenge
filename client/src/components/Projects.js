import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/api/projects/')
        .then(res=>{
            setProjects(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            {projects.map(project=>{
                return(
                    <div key={projects.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                )
                
            })}
        </div>
    )
}

export default Projects;