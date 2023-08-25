var userService = require('./userService');


var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({"status": true, "data": empolyee });
}

var createUserControllerFn = async (req, res) => 
{
    console.log('in controller');
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
   
    var status = await userService.createUserDBService({ name, address, phone });
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}


module.exports = { getDataConntrollerfn, createUserControllerFn };