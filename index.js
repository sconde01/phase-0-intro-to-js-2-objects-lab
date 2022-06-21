const employee = {
  name: 'value1',
  streetAdress: 'value2',
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  const newObj = {...employee};
  newObj [key] = value;
  return newObj;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee [key]=value;
  return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
  const copyEmployee = {...employee};
  delete copyEmployee [key]
  return copyEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee [key]
    return employee;
}

