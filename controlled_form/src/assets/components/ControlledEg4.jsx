import React, { useState } from 'react'

const ControlledEg4 = () => {
    let [state, setState] = useState({ username: '', password: '' ,location:'',resume:'',fromDate:'',toDate:'',msg:'',rating:''});
    let [gender, setGender] = useState('');
    let [languages, setLanguages] = useState([]);
  

    let handleChange = (e) => {
        let { name, value } = e.target;  
        setState({ ...state, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();              
        console.log(state, gender, languages);
    }

    let handleGender = (e) => {
        setGender(e.target.value);
    }

    let handleLanguage = (e) => {
    //   let bool = languages.some((lang=>lang ===e.target.value)) 
    //   if(bool == false){  
    //     setLanguages([...languages,e.target.value])  
    // }  
    //   else{  
    //     setLanguages(languages.filter(lang=>lang!==e.target.value)) 
    //  }
        if (e.target.checked) {          
            setLanguages([...languages, e.target.value]);
        } else {
            setLanguages(languages.filter(lang => lang !== e.target.value));
        }
    }
     
      let from = new Date(state.fromDate.split('-').join('/'));
      let to = new Date(state.toDate.split('-').join('/'));
      let diff = Math.abs(from - to)/1000000
     
     

    return (
        <>
            <form action="" onSubmit={handleSubmit} className='flex flex-col justify-around items-center gap-5 border-2 p-5'>
                <input className='border' type="text" name="username" value={state.username} onChange={handleChange} placeholder='username'
                />

                <input className='border' type="password" name="password" value={state.password} onChange={handleChange} placeholder='password'
                />

                <div>
                    <label>Gender :</label>
                    <input type="radio" name="gender" value='male' onChange={handleGender} /> Male
                    <input type="radio" name="gender" value='female' onChange={handleGender} /> Female
                </div>

                <div>
                    <label>Languages :</label>
                    <input onChange={handleLanguage} type="checkbox" name='language' value='English' /> English
                    <input onChange={handleLanguage} type="checkbox" name='language' value='Telugu' /> Telugu
                    <input onChange={handleLanguage} type="checkbox" name='language' value='Hindi' /> Hindi
                    <input onChange={handleLanguage} type="checkbox" name='language' value='Kanada' /> Kanada
                </div>
                <div>
                    <label htmlFor="">Location</label>
                    <select name="location" onChange={handleChange}>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                    </select>
                </div>
                <div>
                        <textarea className='border' name="msg" value={state.msg} onChange={handleChange}></textarea>
                    <p>{state.msg.length}/10</p>
                </div>
                <div>
                   
                    <input className='border' type="file" name="resume" accept='pdf,.jpg' onChange={handleChange} value={state.resume}  />
                </div>
                <div>
                     <label htmlFor="">Rate Yourself</label>
                     <input onChange={handleChange} type="range" name='rating' step='2' value={state.rating} min='0' max='10' />
                </div>
                <div>
                    <label htmlFor="">Form:</label>
                    <input onChange={handleChange}  type="date" name='fromDate' value={state.fromDate} className='border' /> 
                    <label htmlFor="">To:</label>
                    <input onChange={handleChange} type="date" name='toDate' value={state.toDate} className='border' />
                </div>

                <button className='border'>submit</button>
            </form>

            <div>
                <p>Username : {state.username}</p>
                <p>Password : {state.password}</p>
                <p>Gender :  {gender}</p>
               <div> Languages
               <ul>
                 {
                     languages.map((lan,index)=>{
                        return(  <li key={index}>{lan}</li>)
                })
                }
               </ul>
               </div>
               <div>Location : {state.location}
               </div>
               <div>Feedback : {state.msg}</div>
               <div> Rating : {state.rating}</div>
               <div>From: {state.fromDate} To: {state.toDate}
               <br />
               {diff}
               </div>

               

            </div>
        </>
    )
}

export default ControlledEg4
