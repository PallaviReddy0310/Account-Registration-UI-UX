import './Register.css';
import copy from '../Images/Group 107@2x.png';
import p1 from '../Images/Group 108@2x.png';
import pwd from '../Images/Group 111@2x.png';
import no from '../Images/Group 113@2x.png';
import email from '../Images/Group 110@2x.png';
import cntry from '../Images/Group 112@2x.png';
import dob from '../Images/Group 114@2x.png';
function Register(){
    return(
        <div className='text-center' id='register'>
            <p className='display-4' id='acc'>Register <br />Account</p>
            <p id='sign'>Sign Up to create account <br /> in <a href="#">Forex</a> .</p>
            <img src='https://img.freepik.com/premium-vector/woman-looking-mobile-phone-screen-housewife-kitchen-watching-video-reading-smartphone_276875-728.jpg?w=2000' width='300px'  className='girl'/>
            <form className='forms'> 
                <div className="div1">
                <label for ="refferal" className='mt-3' id='col' >Refferral ID</label><br />
                <img src={copy} width='15px' className='mx-1'/>
                <input type="text" className="refferal" id='refferal' placeholder="Enter Refferal ID"></input><br />
                <label for ="lname" className='mt-3' id='col'>Last Name</label><br />
                <img src={p1} width='15px' className='mx-1'/>
                <input type="text" className="lname" id='lname' placeholder="Enter Last Name" /><br />
                <label for ="pwd" className='mt-3' id='col'>Password</label><br />
                <img src= {pwd} width='15px' className='mx-1'/>
                <input type="password" className="pwd" id='pwd' placeholder="Enter Password"/><br />
                <label for ="phone" className='mt-3' id='col'>Mobile Number</label><br />
                <img src= {no} width='15px' className='mx-1'/>
                <input type="phone" className="phone" id='phone' placeholder="Enter Mobile Number" /><br />
                </div>
                <div className="div2">
                <label for ="fname" className='mt-3' id='col'>First Name</label><br />
                <img src={p1} width='15px' className='mx-1'/>
                <input type="text" className="fname" id='fname' placeholder="Enter First Name" ></input><br />
                <label for ="email" className='mt-3' id='col'>Email</label><br />
                <img src={email} width='15px' className='mx-1'/>
                <input type="email" className="email" id='email' placeholder="Enter Email" /><br />
                <label for ="country" className='mt-3' id='col'>Country</label><br />
                <img src={cntry} width='15px' className='mx-1'/>
                <select id="country" classname="countrylist">
                <option value="default" selected>Select a country</option>
                <option value="austarlia">Austarlia</option>
                <option value="china">China</option>
                <option value="hongkong">Hong Kong</option>
                <option value="india">India</option>
                <option value="ireland">Ireland</option>
                <option value="newzealand">New Zealand</option>
                <option value="spain">Spain</option>
                </select><br />
                <label for ="dob" className='mt-3' id='col'>Birth Date</label><br />
                <img src={dob} width='15px' className='mx-1'/>
                <input type="date" className="dob" id='dob' placeholder="Select Birth Date" /><br />
                </div>
            </form>
            <div class="input-container">
            <input type="checkbox" class="checkbox" id="check" />
            <label for="check" id="check">I'm not a robot</label>
            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" id='captcha'/>
            </div>
            <div className='div3'>
            <input type='checkbox' id="check"/>
            <label for='check' id="check">I accept the <a href='#'>TERMS & CONDITIONS</a> </label>
            </div>
            <button type='submit' className='rounded' id='btn'>Register</button>
            <p className='login'>Already have an account ?<a href="/signin"> Log In</a></p>
        </div>
    )
}

export default Register;