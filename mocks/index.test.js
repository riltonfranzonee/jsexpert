const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');

(async () => {
  { 
    const filePath = './mocks/emptyFile-invalid.csv';
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/fourItems-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/threeItems-valid.csv';
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        "id": 123,
        "name": "Rilton",
        "profession": "Software Engineer",
        "age": 18
      },
      {
        "id": 312,
        "name": "User",
        "profession": "JS Expert",
        "age": 30
      },
      {
        "id": 334,
        "name": "Another user",
        "profession": "Java Developer",
        "age": 35
      }
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }

})()