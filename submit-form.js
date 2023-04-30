const fs = require('fs');
const data = require('database.json');

const submitForm = (formData) => {
  // tambahkan data baru ke array dalam file database.json
  data.push(formData);

  // tulis ulang file database.json dengan data baru
  fs.writeFileSync('database.json', JSON.stringify(data));
}

module.exports = { submitForm };


