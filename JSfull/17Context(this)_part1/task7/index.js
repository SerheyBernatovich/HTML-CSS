/* eslint-disable prefer-destructuring */
export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    this.firstName = fullName.split(' ')[0];
    this.lastName = fullName.split(' ')[1];
  },
};

// user.setFullName(user.getFullName);
console.log(user.getFullName());
user.setFullName(user.getFullName());
console.log(user);
