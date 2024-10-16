// filter fields
// filter fields
const filterFields = (fields, allowedFields) => {
  const filteredFields = {};
  Object.keys(fields).forEach((key) => {
    if (allowedFields.includes(key)) {
      filteredFields[key] = fields[key];
    }
  });
  return filteredFields;
};

const res = filterFields({ name: 'bob', age: 34 }, ['name']);

console.log(res);
