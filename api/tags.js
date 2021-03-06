const express = require('express');
const tagsRouter = express.Router();
const  { getAllTags } = require('../db');

tagsRouter.use( async (req,res,next) =>{
    const tags = await getAllTags();

    res.send({
        tags
    });

});
module.exports = tagsRouter;