const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const bestStudents = allStudentsList.filter(
    (el) => !studentsForRetake.includes(el)
  );
  const message = bestStudents.map((el) => 'Good job, ' + el);
  return message;
};

//example 1:

//input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

console.log(getMessagesForBestStudents(allStud, retakeStud));

//output:
//['Good job, a', 'Good job, c']
