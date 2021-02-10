const uuid = require('uuid');

module.exports = async function (context, req) {
    context.log("JavaScript HTTP trigger function processed a request.");


    if (req.body) {
        context.log(req.body);
        id = uuid.v4();
        context.log(id);
        req.body.id = id;
        req.body.completed = false;
        req.body.deleted = false;
        context.bindings.outputDocument = req.body;
        context.res = {
            status: 200,
            body: req.body
        };
    }
    else {
        context.res = {
            // status: 200, /* Defaults to 200 */
            status: 400
        };
    }
}