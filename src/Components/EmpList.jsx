import React, { useState } from 'react'
import Navbar from './Navbar'
import { EmpDetails } from '../utilis/HandleEmp'

const EmpList = ({admin}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [designation, setDesignation] = useState('')
  const [gender, setGender] = useState('')
  const [courses, setCourses] = useState({ MCA: false, BCA: false, BSC: false })
  const [image, setImage] = useState(null)

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setCourses((prevCourses) => ({
      ...prevCourses,
      [name]: checked,
    }))
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
    if (name && email && mobile && designation && gender && image &&
      (courses.MCA || courses.BCA || courses.BSC)) {

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('designation', designation);
        formData.append('gender', gender);
        formData.append('courses', JSON.stringify(Object.keys(courses).filter(course => courses[course]))); // Only append selected courses
        formData.append('image', image);

      await  EmpDetails(admin._id,formData);
      
    //   alert("Form submitted successfully!")
    } else {
      alert("Please fill in all required fields.")
    }
  }

  return (  
    <div>
      <Navbar />
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className='w-[500px] grid grid-cols-2 gap-5'>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile No</label>
            <input
              type="tel"
              className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="designation">Designation</label>
            <select
              className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            >
              <option value="">Select Designation</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div>
            <label>Gender</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <label htmlFor="male" className="mr-4 ml-1">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <label htmlFor="female" className="ml-1">Female</label>
            </div>
          </div>
          <div>
            <label>Courses</label>
            <div className="flex flex-col">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="MCA"
                  name="MCA"
                  checked={courses.MCA}
                  onChange={handleCheckboxChange}
                  required={!courses.MCA && !courses.BCA && !courses.BSC}
                />
                <label htmlFor="MCA" className="ml-1">MCA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="BCA"
                  name="BCA"
                  checked={courses.BCA}
                  onChange={handleCheckboxChange}
                  required={!courses.MCA && !courses.BCA && !courses.BSC}
                />
                <label htmlFor="BCA" className="ml-1">BCA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="BSC"
                  name="BSC"
                  checked={courses.BSC}
                  onChange={handleCheckboxChange}
                  required={!courses.MCA && !courses.BCA && !courses.BSC}
                />
                <label htmlFor="BSC" className="ml-1">BSC</label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="imageUpload">Image Upload</label>
            <input
              type="file"
              accept=".jpg,.png"
              className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmpList
