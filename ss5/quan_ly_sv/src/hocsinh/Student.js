const listStudent = [
    {
      id: 1,
      name: "Duy",
      phone: "0123456789",
      email: "hocsinh1@gmail.com",
    },
    {
      id: 2,
      name: "Anh",
      phone: "0987654321",
      email: "hocsinh2@gmail.com",
    },
    {
      id: 3,
      name: "Phước",
      phone: "0789123456",
      email: "hocsinh3@gmail.com",
    },
  ];
  export function getStudent() {
    return listStudent;
  }
  export function addStudentList(newStudent){
      listStudent.push({...newStudent})
      return listStudent;
  }
  export function searchStudent(studentName){
    return listStudent.filter(student => student.name.includes(studentName));
 }