var userService = require('./userService');


var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBSrvice();
    res.send({"status": true, "data": empDetails });
}

var createUserControllerFn = async (req, res) => 
{
    console.log('req.name: ', req.body.name);
    console.log('name; ', name,'address: ',address,'phone: ', phone);   
    var status = await userService.createUserDBService({ name, address, phone });
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}


module.exports = { getDataConntrollerfn, createUserControllerFn };