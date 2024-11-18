const { createEmployee,
    getAllEmployees,
    getEmployeeById,
    deleteEmployeeById,
    updateEmployeeById,
    adminLogin
} = require('../Controllers/EmployeeController');
const { cloudinaryFileUploader, authenticateToken } = require('../Middlewares/FileUplaoder');


const router = require('express').Router();

router.post('/',adminLogin)

router.get('/all',authenticateToken, getAllEmployees)
router.get('/:id', getEmployeeById)
router.delete('/:id', deleteEmployeeById)
router.put('/:id', cloudinaryFileUploader.single('profileImage'), updateEmployeeById)
router.post('/', cloudinaryFileUploader.single('profileImage'), createEmployee);


module.exports = router;