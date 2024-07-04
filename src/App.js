import { useState } from 'react';
import './App.css';

function App() {

  const [person, setPerson] = useState({ fname: "", dob: "", age: "", Password: "" });

  const [data, setData] = useState(JSON.parse(localStorage.getItem("hit")) || []);


  const handleChange = (e) => {
    console.log(e.target.name)
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setData([...data, person])
    localStorage.setItem("hit", JSON.stringify([...data, person]));
  }
  console.log(data);
  console.log(person);


  const sortbyFname = () => {

    const sortdata = data.sort((a, b) => { return (a.fname > b.fname ? 1 : -1) });
    console.log(sortdata);
    setData([...sortdata]);

  }



  return (
    <>
      <div>

        <div style={{ backgroundImage: 'url(https://cdn.stocksnap.io/img-thumbs/280h/GKYCLSYDLH.jpg)', backgroundSize: "cover", padding: "10%" }}>

          <div className='flex flex-col items-center gap-[60px]'>

            <div className='tanu'>
              <label htmlFor="fname" className='font-bold text-xl'>Full Name:</label>
              <input type="text" id="fname" name="fname" value={person.fname} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent' />
            </div>

            <div className='tanu'>
              <label htmlFor="dob" className='font-bold text-xl'>Date Of Birth:</label>
              <input type="date" id='dob' name="dob" value={person.dob} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent' />
            </div>

            <div className='tanu'>
              <label htmlFor="age" className='font-bold text-xl'>Age:</label>
              <input type="number" id='age' name="age" value={person.age} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent' />
            </div>

            <div className='tanu'>
              <label htmlFor="Password" className='font-bold text-xl'>Password:</label>
              <input type="password" id="Password" name="Password" value={person.Password} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent' />
            </div>

            <button type='submit' onClick={handleSubmit} className='font-bold text-xl h-[40px] w-[150px] mt-[30px] rounded-[10px] bg-transparent' >Submit</button>

          </div>

        </div>

        <div className='flex justify-center mt-[5%]'>
          <button type="button" onClick={() => sortbyFname()} className='h-[30px] w-[50px] bg-[#a5e1e0] text-[16px] font-bold'>Sort</button>
        </div>

        <div className='flex justify-center mt-[5%]'>

          <table>

            <thead>
              <th>Full Name:</th>
              <th>Date Of Birth:</th>
              <th>Age:</th>
              <th>Password:</th>
            </thead>

            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td>{item.fname}</td>
                    <td>{item.dob}</td>
                    <td>{item.age}</td>
                    <td>{item.Password}</td>
                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>

      </div>

    </>
  );
}

export default App;
