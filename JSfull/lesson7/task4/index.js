const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const rezult = allStudentsList.slice();
  const passed = rezult.filter((name) => !studentsForRetake.includes(name));

  const massages = passed.map((name) => 'Good job, ' + name);
  return massages;
};

//example 1:

//input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

console.log(getMessagesForBestStudents(allStud, retakeStud));

//output:
//['Good job, a', 'Good job, c']
