const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = (obj) => {
  const rooms = Object.values(obj);

  return rooms.flat().map((el) => el.name);
};

console.log(getPeople(rooms));
