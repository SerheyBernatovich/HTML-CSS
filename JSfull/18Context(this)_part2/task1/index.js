export const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 20, email: 'ex@serv.com' },
    { name: 'Bob', age: 18, email: 'ex@serv1.com' },
    { name: 'Nom', age: 16, email: 'ex@serv2.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => {
        return { email, message: `Dear ${name}! ${this.message}` };
      });
  },
};
console.log(event.getInvitations());
