import React, { useState } from 'react'
import { use } from 'react'

function Form() {
    // STyle
    const inpputStyle = {
        paddingInline: '20px',
        paddingBlock: "15px",
        borderRadius: "20px",
        // backgroundColor: "lightGrey",
        border: "none",
        outline: "none",
    }

    const formStyle = {
        width: "50%",
        
        display: 'flex', flexDirection: 'column', gap:'5px'
    }

    const body = {
        background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        height: '100vh'
    }

    // STyle END

    // JS


    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
      const [confirmpassword, setConfirmpassword] = useState('')
    const [error, setError] = useState({})

    function formValidation() {
        let newError = {}
        console.log('validation console');
        if (!fname || fname.length < 3) {
            newError.fname = "Please enter correct name here..."
        }
        if (!lname) {
            newError.lname = "Please enter your last name.."
        }
        if (!age || age >= 10) {
            newError.age = "You are not eligible..."
        }
        if(confirmpassword!==password){
            newError.confirmpassword="Password not match"
        }

        setError(newError)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('consoled');
        if (formValidation()) {
            console.log('Form submitted');
        }

        console.log('after consoled');

    }
     let isfocus=false;
    function blu(){
     isfocus=true;
     }


    return (
        <>
            <div style={body}>
                {/* <input type="text" id="username" name="username"  title="Username must be 5-15 alphanumeric characters." required>
                </input> */}
                <h2 style={{ color: "", fontSize: '50px' }}>Student Registeration form</h2>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <label htmlFor="">Enter your first name:</label>
                    <input type="text" style={inpputStyle} pattern="[A-Za-z0-9]{5,15}" onBlur={blu} name="Fname" value={fname} onInput={(e) => setFname(e.target.value)} placeholder='First Name' title='Please enter your first name' />
                { {isfocus} ? <strong style={{ color: 'red' }}>{error.fname}   </strong>:''}
 
                    <label htmlFor="">Enter your last name:</label>
                    <input type="text" style={inpputStyle} name="Lname" value={lname} onInput={(hamza) => setLname(hamza.target.value)} placeholder="Last Name" title='Please enter your last name' />
                    <strong style={{ color: 'blue' }}>{error.lname}</strong>


                    <label htmlFor="">Enter your age:</label>
                    <input type="number" style={inpputStyle} name="age" value={age} onInput={(e) => setAge(e.target.value)} placeholder='Age' />
                    <strong style={{ color: 'blue' }}>{error.age}</strong>

                    <label htmlFor="">Enter your password</label>
                    <input type="password" style={inpputStyle} name="password" value={password} onInput={(e) => setPassword(e.target.value)} placeholder='Password' />
                   <strong style={{ color: 'blue' }}>{error.password}</strong>

                     <label htmlFor="">Enter your password</label>
                    <input type="password" style={inpputStyle} name="confirmpassword" value={confirmpassword} onInput={(e) => setConfirmpassword(e.target.value)} placeholder='Confirm Password' />
                   <strong style={{ color: 'blue' }}>{error.confirmpassword}</strong>

                    <br />
                    <button type='submit' style={{ fontSize: '25px', background: 'blue', border: 'none', borderRadius: '20px', paddingBlock: '10px', color: 'whitesmoke' }}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form;
