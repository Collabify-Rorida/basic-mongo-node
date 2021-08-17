import React ,{useState} from 'react';
import './Signup.css';

const Signup = () => {


              const [user, setUser]=useState({
                  fullname:"",
                  email:"",
                  username:"",
                  password:"",
                  mobile:""

              })
              let name,value;

              const handleInput=(e)=>{
                  name=e.target.name;
                  value=e.target.value;
                //   console.log(name);
                //   console.log(value);

                setUser({
                     ...user,[name]:value
                })
                // console.log(user);
               
              }

              const postData=async (e)=>{
                  console.log(user)
                  
                e.preventDefault();
                //const {fullname,email,username,password,mobile} =user;
                 

                   const res=await fetch("http://localhost:3001/register",{
                    mode:'no-cors',
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                    
                    
                });
                // const data = await res.json();
                
                // if(data.status === 422 || !data){
                //   window.alert("failed posting of data")
                // }

              }





    return (
        <>
           <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2>Sign Up</h2>
                        <form className="register-form" method="POST">
                        <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                <input type="email" class="form-control" name="fullname" value={user.fullname} onChange={handleInput}/>
               
             </div>

             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" name="email" value={user.email} onChange={handleInput}/>
               <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
             </div>


                       
               <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="email" class="form-control" name="username" value={user.username} onChange={handleInput}/>
              
             </div>

              <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">Password</label>
               <input type="password" class="form-control"  name="password" value={user.password} onChange={handleInput}/>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Mobile no.</label>
                <input type="email" class="form-control" name="mobile" value={user.mobile} onChange={handleInput}/>
              
             </div>


  
                <button type="submit" class="btn btn-primary" onClick={postData}>Sign Up</button>
</form>


                      
                    </div>
                </div>

            </div>

           </section>
            
        </>
    )
}

export default Signup
