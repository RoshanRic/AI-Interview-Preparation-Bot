const fs = require('fs');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');

// Utility for reading resume files and returning the extracted text.
class ResumeParser {
  static async read(filePath) {
    try {
      if (filePath.endsWith('.pdf')) {
        const dataBuffer = fs.readFileSync(filePath);

        const data = await pdf(dataBuffer);

        return data.text;
      }

      if (filePath.endsWith('.docx')) {
        const result = await mammoth.extractRawText({ path: filePath });

        return result.value;
      }

      return '';
    } catch (error) {
      console.log('Unable to read resume');

      console.log(error);

      return '';
    }
  }
}

// Exposes the ResumeParser class for reading PDF and DOCX resumes as plain text.
module.exports = ResumeParser;