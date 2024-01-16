const { populate } = require("../models/Bootcamp");

const advanceFilter = (model, populate) => async (req, res, next) => {
    let query ;
    console.log('query : ', req.query);
    console.log('model : ', model);

    // Copy req.query
    const reqQuery = {...req.query}

    // create removed filed array
    const removeFiled = ['select', 'sortBy', 'skip', 'take'];

    // Remove all filed from query string which is present in removeField array
    removeFiled.forEach(field => delete reqQuery[field]);

    // Convert query to string format
    let queryStr = JSON.stringify(reqQuery);

    // replace gte sign with $gte
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/, (match) => `$${match}`);
    // console.log('queryStr : ', queryStr);

    // Getting all the courses list
    query = model.find(JSON.parse(queryStr));

    // Getting only selected fields
    if (req.query.select) {
        const selectField = req.query.select.split(',').join(' ');
        query = query.select(selectField);
    }

    // Sort by given field
    if (req.query.sortBy) {
        const sortBy = req.query.sortBy.split(',').join(' ');
        query = query.sort(sortBy);
    } else {
        query = query.sort('createdAt');
    }

    const skip = parseInt(req.query.skip) || 0;
    const take = parseInt(req.query.take) || 10;
    console.log('skip : ', skip, 'take: ', take);
    query = query.skip(skip).limit(take);

    if (populate) {
         query = query.populate(populate);
    }

    // Getting total count
    const total = await model.countDocuments();

    const result = await query;

    res.result = {
        success: true,
        totalCount: total,
        count: result.length,
        data: result
    };

    next();
};

module.exports = advanceFilter;