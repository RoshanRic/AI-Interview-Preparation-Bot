const XLSX = require('xlsx');

// Writes an array of interview questions to an Excel file.
// Each question becomes one row with a serial number and the question text.
function writeQuestions(questions, filePath) {
  const data = questions.map((question, index) => ({ SlNo: index + 1, Question: question }));

  const workbook = XLSX.utils.book_new();

  const worksheet = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Questions');

  XLSX.writeFile(workbook, filePath);
}

module.exports = { writeQuestions };