import React from 'react'

const Getadmission = () => {
  return (
    <div className='container-fluid'>
      <div class="login-box my-5">
        <h4> Please Fill This form</h4>
        <form>
          <div class="user-box">
            <label>Username</label>
          </div>
          <input type="text" name="mobile" value="" placeholder="Mobile" />
          <div class="user-box">
            <label>Email</label>
          </div>
          <div class="user-box">
            <input type="text" name="email" value="" placeholder="Email" />
          </div>
          <div class="btn-section">
            <label>course</label><br/>
            <input
              type="textarea"
              name="message"
              value=""
              placeholder="Message"
            />
            <div>

            <button className="btn btn-primary my-2">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Getadmission
