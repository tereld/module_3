const listStudent = [
    {
      id: 1,
      name: "Nhật",
      phone: "0123459876",
      email: "hs1@gmail.com",
    },
    {
      id: 2,
      name: "Trinh",
      phone: "0123456789",
      email: "hs2@gmail.com",
    },
    {
      id: 3,
      name: "Tươi",
      phone: "0987654321",
      email: "hs3@gmail.com",
    },
  ];
  export function getStudent() {
    return listStudent;
  };
  export function addStudent(student){
    listStudent.push(student);
  }
  export function deleteStudent(id){
    const index= listStudent.findIndex(prev => prev.id === id)
    if (index !== -1){
      listStudent.splice(index,1)
    }
  }
  