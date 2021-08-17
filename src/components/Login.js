import React from 'react'

const Login = () => {
    return (
        <>
        <section className="signup">
         <div className="container">
             <div className="signup-content">
                 <div className="signup-form">
                     <h2>Login</h2>
                     <form className="Login-form">
                     


                    
            <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Username</label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           
          </div>

           <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
           </div>

          



<button type="submit" class="btn btn-primary">Submit</button>
</form>


                   
                 </div>
             </div>

         </div>

        </section>
         
     </>
    )
}

export default Login
