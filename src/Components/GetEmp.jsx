import React, { useEffect, useState } from "react";
import { deleteEmpDetais, getEmpDetails } from "../utilis/HandleEmp";

const GetEmp = ({ admin }) => {
  const [empList, setEmpList] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);

  const fetchToDos = async () => {
    try {
      const empList = await getEmpDetails(admin._id);
      if (!Array.isArray(empList)) {
        throw new Error("Data fetched is not an array");
      }
      setEmpList(empList || []);
    } catch (err) {
      console.log("Error fetching ", err);
      setEmpList([]);
    }
  };

  useEffect(() => {
    fetchToDos();
  },[shouldFetch]);
  
  const handleDelete=async(empId) => {
    alert("Are you sure?");
    await deleteEmpDetais(admin._id,empId);
    setShouldFetch(!shouldFetch); 
  }

  const handleUpdate = async()=>{
    
  }

  return (
    <div>
      <div className="flex justify-center">
        <table border="" className="border">
          <tr className="">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Mobile No</th>
            <th className="p-3">Designation</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Course</th>
            <th className="p-3">Create Date</th>
            <th colSpan="2" className="p-3">Action</th>
          </tr>

          {empList.map((emp) => (
            <tr key={emp._id}>
              <td className="p-3">
              <img className="rounded-full h-10 w-10"
                  src={emp.f_Image.url}
                  alt={emp.f_Name}
                  width="100"
                  height="100"
                />
              </td>
              <td className="p-3">{emp.f_Name}</td>
              <td className="p-3">{emp.f_Email}</td>
              <td className="p-3">{emp.f_Mobile}</td>
              <td className="p-3">{emp.f_Designation}</td>
              <td className="p-3">{emp.f_gender}</td>
              <td className="p-3">{emp.f_Course}</td>
              <td className="p-3">{emp.f_Createdate}</td>
              <td className="p-3">
                <button className="bg-[#70ed28] px-3 rounded"
                onClick={()=>handleUpdate(emp._id)}
              >Edit</button></td>
              <td className="p-3"><button  className="bg-[#ed282b] px-3 rounded"
              onClick={()=>handleDelete(emp._id)}
              >Delete</button></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default GetEmp;
