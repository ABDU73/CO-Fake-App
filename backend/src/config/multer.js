import multer from 'multer';

// Set up Multer memory storage (store file as Buffer in memory)
const storage = multer.memoryStorage();

export const upload = multer({
  storage,  // Storing files as Buffers in memory
  fileFilter: (req, file, cb) => {
    // List of allowed MIME types
    const allowedTypes = [
      'application/pdf',  // PDF
      'application/msword',  // Word (.doc)
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',  // Word (.docx)
      'application/vnd.ms-excel',  // Excel (.xls)
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',  // Excel (.xlsx)
      'application/vnd.ms-powerpoint',  // PowerPoint (.ppt)
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',  // PowerPoint (.pptx)
    ];

    // Check if the file type is allowed
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);  // Accept the file
    } else {
      cb(new Error('Only PDF, DOC, DOCX, XLSX, PPT files are allowed'), false);  // Reject file if type is not allowed
    }
  },
  limits: { 
    fileSize: 20 * 1024 * 1024  // Max file size: 20MB
  }
});

// Function to get file extension based on MIME type
export const getFileExtension = (mimeType) => {
  const mimeTypes = {
    'application/pdf': '.pdf',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'application/vnd.ms-excel': '.xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
    'application/vnd.ms-powerpoint': '.ppt',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
  };

  return mimeTypes[mimeType] || '';  // Default to empty string if MIME type not found
};
