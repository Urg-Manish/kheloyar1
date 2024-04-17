import React from 'react'

export default function Signup() {
  return (
    <div className='form-centering vh-100' >
   <div className="d-flex vh-100">
       <div className="image-wrapper d-none d-sm-none d-md-none d-lg-block">
        <section className="slideshow">
          <div className="slideshow-container slide">
            <img draggable="false" className="img-size" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/Dazy.png" />
            <img draggable="false" className="img-size" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/Rajpal.png" />
            <img draggable="false" className="img-size" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/Kashika.png" />
            <img draggable="false" className="img-size" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/Randeep.png" />
          </div>
        </section>
      </div>
      <div className="p-4 form-boxSignup">
      <form id="signbar" className="form_padding ng-invalid ng-dirty ng-touched" noValidate>
        <div className="signbar-header d-none d-sm-none d-md-none d-lg-block">
          <a href="/home" className="d-flex align-items-center justify-content-center" style={{ textDecoration: 'unset' }}>
            {/* <img width={'25px'} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/KheloyarnetLogo.svg" alt="" className="top_light" /> */}
            <img src="https://dqqdyv927mezc.cloudfront.net/kheloyar/KheloyarnetLogo.svg" alt="" className="top_dark" />
          </a>
        </div>
        <div className="blink-2 create-whatsapp">
          <h4> Now <span className="diff-color">Create</span> an account easily on <span className="diff-color">WhatsApp!</span></h4>
          <a className="in-image">
            <img height={'25px'} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/WA.svg" alt="" />
            <a target="_blank" className="blink"> I need ID </a>
          </a>
        </div>
        <h1>OR</h1>
        <h4 className="card-title mt-3 text-center text-white">Self Registration</h4>
        <div className="pt-3 input_field_with_logo">
          <span className="d-flex align-items-center custom_border">
            <span className="user_icon">
              <svg className="svg-inline--fa fa-user fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
              </svg>
            </span>
            <input type="text" name="username" placeholder="Username" required className="ng-pristine ng-invalid ng-touched" />
          </span>
          <div className="alert alert-danger">
            <div>Username is required.</div>
          </div>
        </div>
        {/* Continue adding the rest of the JSX, as per your HTML */}
      </form>
      <p className="text-center card-title">Already have an account? <a href="">Login</a></p>
    </div>
   </div>
   </div>
  )
}
