const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(vallue) {
    const [firstName, lastName] = vallue.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
export default user;
console.log(user.fullName);
