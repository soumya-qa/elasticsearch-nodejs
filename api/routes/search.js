const express = require('express');
const router = express.Router();

const insertDoc = require('../../modules/insertData');
const createIndex = require('../../modules/createIndex');
const searchDoc = require('../../modules/searchDoc');
const addMappingToIndex = require('../../modules/addMappingToIndex');

router.get('/', (req, res, next) => {
    // Search as you type
    const body = {
        query: {
            match_phrase_prefix: {
                "title": req.query.searchTerm
            }
        }
    }
    try {

        searchDoc(req.query.indexName, 'ciphertrick', body).then(
            resp => res.status(200).json({
                ...resp
            })
        ).catch(
            error => res.status(400).json({
                ...error
            })
        )
        
    } catch (e) {
        res.status(400).json({
            ...e
        })
    }
});

router.post('/add_data', (req, res, next) => {
    const data = {
        title: req.body.title,
        tags: req.body.tags.split(','),
        body: req.body.content
    }
    try {
        insertDoc(req.body.indexName, req.body.id, 'ciphertrick', data).then(
            resp => res.status(200).json({
                ...resp
            })
        ).catch(
            error => res.status(400).json({
                ...error
            })
        )
    } catch (e) {
        res.status(400).json({
            ...e
        })
    }
})

router.post('/create_index', (req, res, next) => {
    try {
        createIndex(req.body.indexName).then(
            (resp) => {
                addMappingToIndex(req.body.indexName, 'ciphertrick', mapping);
                res.status(200).json({
                    ...resp
                })
            }
        ).catch((e) => {
            res.status(400).json({
                ...e
            })
        })
        
    } catch (e) {
        res.status(400).json({
            ...e
        })
    }
})

module.exports = router;