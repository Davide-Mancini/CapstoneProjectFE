const MyFooter = () => {
  const anno = new Date();
  return (
    <>
      <div className="container mt-auto text-light">
        <footer className="py-5">
          <div className="row ">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 ">
                  <a href="#" className="nav-link p-0 text-light">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2 ">
                  <a href="#" className="nav-link p-0 text-light">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2 ">
                  <a href="#" className="nav-link p-0 text-light">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2 ">
                  <a href="#" className="nav-link p-0 text-light">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2 ">
                  <a href="#" className="nav-link p-0 text-light">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3  text-light">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3 text-light">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-light">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Resta sempre aggiornato sul mondo Fantacalcio!</h5>
                <p>
                  Iscriviti alla nostra newsletter inserendo la tua mail,{" "}
                  <b>è gratis!</b>{" "}
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                  <button
                    className="btn btn-warning text-white fw-bold"
                    type="button"
                  >
                    Iscriviti
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© {anno.getFullYear()} Asta Tool, all rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="#"></a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#"></a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#"></a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};
export default MyFooter;
