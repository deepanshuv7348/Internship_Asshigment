const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const EmployeeModel = require("../Models/EmployeeModel");
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async (req, file) => 'png', // supports promises as well
        public_id: (req, file) => file.originalname.split('.')[0] + ""
    },
});

const cloudinaryFileUploader = multer({ storage: storage });




const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.EmployeeModel = verified;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};


module.exports = {
    cloudinaryFileUploader,
    authenticateToken
}
