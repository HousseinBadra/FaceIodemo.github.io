const {createRoot , render} = ReactDOM
const {useEffect,useState}=React

const App=()=>{
  const [user,setuser]=React.useState('')
  const io=new faceIO('fioa7997')
  function login(){
    io.authenticate({ "locale": "auto"  }).then(userData => { console.log("Success, user identified") 
    console.log("Linked facial Id: " + userData.facialId)
    setuser(userData.payload.UID)  }).catch(errCode => { console.log(errCode) })
  }
  function logout(){
    setuser('')
    window.location='./'
  }
  function register(){
    io.enroll({ "locale": "auto", 
    "payload": {  UID: Date.now() } }
    ).then(userInfo => {  alert( `User Successfully Enrolled! Details: Unique Facial ID: ${userInfo.facialId} Enrollment Date: ${userInfo.timestamp} Gender: ${userInfo.details.gender} Age Approximation: ${userInfo.details.age}` ); console.log(userInfo);}).catch(errCode => { console.log(errCodr) })
  }
  
  return(
    <div className='app'>
    {!user? <div><button type="button" className="btn btn-outline-primary m-5" onClick={register} >Register</button><button type="button" onClick={login} className="btn btn-outline-info m-5">Login</button></div> : <button type="button" onClick={logout} className="btn btn-outline-danger">Logout</button>}
    </div>)
  
  
  
}




const roott = document.getElementById('root'); 
const root = createRoot(roott); 
root.render(<App/>);
