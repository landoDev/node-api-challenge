const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    Projects.get()
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not get Projects'});
    })
})

router.get('/', (req, res) => {
    Projects.get()
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not get Projects'});
    })
})

router.get('/:id', (req, res) => {
    Projects.get(req.params.id)
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({message: 'Could not get Projects'});
    })
})

module.exports = router;