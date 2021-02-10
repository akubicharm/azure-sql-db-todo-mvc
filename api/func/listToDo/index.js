module.exports = async function (context, req, inputDocument) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log(inputDocument);
    if (inputDocument) {
        context.log("Item Found: " + inputDocument);
        context.res = {
            status: 200,
            body: inputDocument
        };
    }
    else {
        context.log("Item Not Found");
    }
}