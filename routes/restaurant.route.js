const restaurant = require("../models/Restaurant")

module.exports = (app) => {
    app
        .route('/restaurants')
        .get(async(req, res) => {
            const result = await restaurant.find();
            res.json(result).status(200).end();;
        })

    .post(async(req, res) => {
        const result = await restaurant.create(req.body);
        res.status(201).end();
    });

    app.route('/restaurants/:id')
        .delete(async(req, res) => {
            const result = await restaurant.remove({ "_id": req.params.id });
            res.status(204).end();
        })
        .put(async(req, res) => {
            const result = await restaurant.findAndModify(req.params.id, req.body);
            console.log(result)
            res.json(result).status(200).end();
        })

    // get /restaurants/search?name=xxx
    app.route('/restaurants/search')
        .get(async(req, res) => {
            const search = { "name": new RegExp(req.query.name, 'i') };
            const result = await restaurant.find(search);
            res.json(result);
        })
}