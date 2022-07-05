const {Router} = require('express');
const routerUser_data = Router();
const {getUser_data, postUser_data, deleteUser_data, updateUser_data} = require('../controllers/user_data');


//routerUser_data.route('/').get(getUser_data).post(postUser_data)
//routerUser_data.route('/').put(updateUser_data).delete(deleteUser_data)

routerUser_data.get('/', getUser_data);

routerUser_data.post('/', postUser_data); 

routerUser_data.put('/:id', updateUser_data);

routerUser_data.delete('/:id', deleteUser_data);

 

module.exports = routerUser_data 