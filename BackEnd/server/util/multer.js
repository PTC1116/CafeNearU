const multer = require('multer');

const fileFilter = (req, file, cb) => {
  if (file.mimetype != 'image/jpeg' && file.mimetype != 'image/png') {
    req.fileError = 'Invalid file type. Only JPEG and PNG files are allowed';
    return cb(null, false, new Error(req.fileError));
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/avatars');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  fileFilter: fileFilter,
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
});

module.exports = upload;
