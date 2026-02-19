const StateEg2 = () => {
    let num = 0;
    let handleInc = ()=>{
        console.log("handle fun is executed");
        num+=1;
        console.log(num);
    }
    let handleDec = ()=>{
        console.log("handle fun is executed");
        num-=1;
        console.log(num);
    }
  return (
    <div>
      <h2>num - {num}</h2>
      <button onClick={handleInc}>Inc Num</button>
      <button onClick={handleDec}>Dec Num</button>
    </div>
  )
}

export default StateEg2
