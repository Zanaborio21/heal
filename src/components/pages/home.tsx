const Home = () => {
    return (
     <div>
       <section id="landing-page" className="py-5">
        <div className="container mt-5">
          <div className="mb-5 row">
            <div className="col-lg-5">
              <div className="main-content">
                <p className="mt-4 p-2 badge rounded-pill">
                  <strong>Product</strong> <i className="fas fa-circle"></i> Medical
                  devices, Medicines, Masks
                </p>
                <h1 className="my-3 main-text">Believe in Obatin for Medicine.</h1>
                <p className="main-desc mt-4">
                  We are your <span>#1 ranked</span> pharmacy with free same day
                  delivery and great care. Our pharmacy is a trusted pharmacy in
                  this area.
                </p>
                <div className="mt-5 btns-group">
                  <button className="me-2 btn btn-secondary">
                    Set Appointment
                  </button>
                  <button className="ms-2 btn btn-white">
                    Get Started <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-1 offset"></div>
            <div className="col-lg-6 d-flex align-items-center">
              <aside>
                <img
                  className="img-fluid"
                  src="..\img\medical.jpg"
                  alt="medical-illustration"
                />
              </aside>
            </div>
          </div>
        </div>
      </section>
     </div>
    )
}

export default Home