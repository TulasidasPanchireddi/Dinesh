// =============== Conditional Rendering using if else ================================

// const ConRenEg1 = () => {
//   let yop = 2026;
//   if(yop>=2025){
//     return <h1>Fresher</h1>
//   }
//   else{
//     return <h1>Experience</h1>
//   }
// }

// export default ConRenEg1


//============== Conditional Rendering by using ternary operator ===========
//=============== Incorrect
// const ConRenEg1 = () => {
// let yop = 2026;
// (yop>=2025 ? (return <h2>Fresher</h2>) : (return <h2>Experience</h2>))
// }

// export default ConRenEg1


//================= Conditional Rendering  by using ternary operator ==========================

// const ConRenEg1 = () => {
//     let yop = 2025
//   return (
//     <div>
//       <h2>{yop>=2026 ? 'Fresher' : 'Experience'}</h2>
//     </div>
//   )
// }

// export default ConRenEg1


// ============== Conditional Rendering by using logical And Operator ==============
const ConRenEg1 = () => {
    let yop = 2025;
  return (
    <div>
      <h2>{yop>=2025 && 'Fresher'}</h2>
    </div>
  )
}

export default ConRenEg1



