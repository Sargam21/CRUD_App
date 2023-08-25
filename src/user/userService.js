var userModel = require('./userModel');


module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve, reject) {
 
        // userModel.find({}, function returnData(error, result) {
 
        //     if (error) {
        //         reject(false);
        //     } else {
         
        //         resolve(result);
        //     }
        // });
        userModel.find().then(result => {
            resolve(true);
        })
        .catch(error => {
            reject(false);
        });
 
    });
 
 }

 
 module.exports.createUserDBService = (userDetails) => {

    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new userModel();
 
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;
        
        if (!userDetails || !userDetails.name || !userDetails.phone) {
            return reject(false);
        }

        userModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                reject(false);
            });
 
    });
 
 }