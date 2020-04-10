const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');


// GET PROJECTS
router.get('/', (req, res) => {
    Projects.get()
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not get Projects'});
    })
})

router.get('/:id', validateProjectId, (req, res) => {
    Projects.get(req.params.id)
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not get Projects'});
    })
})

// GET ACTIONS //

router.get('/:id/actions', validateProjectId, (req, res) => {
    Projects.get(req.params.id)
    .then(project =>{
        res.status(200).json(project.actions);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not get Projects'});
    })
})

// PROJECTS CRUD //
router.post('/', validateProject, (req, res) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not add Project'});
    })
})

router.put('/:id', validateProjectId, validateProject, (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not add Project'});
    })
})

router.delete('/:id', validateProjectId, (req, res) => {
    Projects.remove(req.params.id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not delete Project'});
    })
})

// ACTIONS CRUD //


router.post('/:id/actions', validateProjectId, validateAction, (req, res) => {
    const newAction = req.body
    newAction.project_id = req.params.id;
    Actions.insert(newAction)
    .then(action => {
        res.status(201).json(action);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not add Action'});
    })
})

module.exports = router;

function validateProjectId (req, res, next){
    const  { id } = req.params
    Projects.get(id)
    .then(project =>{
        if(project){
            req.project = project
            next();
        } else {
            res.status(404).json({message: 'Project not found'});
        }
    })
    
}

function validateProject (req, res, next){
    if(Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "missing Project data" })
      } else {
       if (!req.body.name) {
        return res.status(400).json({ message: "missing required name field" })
        } else {
            if (!req.body.description) {
            return res.status(400).json({ message: "missing required description field" })
            }
        }
    }
      next();
}

function validateAction (req, res, next){
    if(Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "missing Action data" })
      } else {
       if (!req.body.description) {
        return res.status(400).json({ message: "missing required description field" })
        } else {
            if (!req.body.notes) {
            return res.status(400).json({ message: "missing required notes field" })
            }
        }
    }
      next();
}