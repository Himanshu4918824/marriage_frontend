import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div style={{backgroundColor: "#8b0000",color: "#fff", paddingTop: "50px"}}>
      <div className="container">
        <div className="row gy-4">

          {/* Contact Us */}
          <div className="col-md-4">
            <h5 style={{ color: "#f5c542", fontWeight: "600" }}>
              Contact Us
            </h5>

            <p className="mt-3 mb-2">
              <i className="bi bi-geo-alt me-2 text-warning"></i>
              Ambah, Morena (M.P) - 476111
            </p>

            <p>
              <i className="bi bi-telephone me-2 text-warning"></i>
              +91 9752292743
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-md-center">
            <h5 style={{ color: "#f5c542", fontWeight: "600" }}>
              Quick Links
            </h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of Service</li>
              <li>Registration Guide</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-4 text-md-end">
            <h5 style={{ color: "#f5c542", fontWeight: "600" }}>
              Follow Us
            </h5>

            <div className="mt-3">
              <span className="social-circle me-2">
                <i className="bi bi-instagram"></i>
              </span>

              <span className="social-circle me-2">
                <i className="bi bi-youtube"></i>
              </span>

              <span className="social-circle">
                <i className="bi bi-share"></i>
              </span>
            </div>

            <div style={{marginTop:50}}>
              <Link to="https://creovateio.in" style={{textDecoration: 'none' , color:'inherit'}} >
                <div style={{ padding: 5, display: "flex", alignItems: "center", marginTop: 5, textAlign: 'center', marginBottom: 2, justifyContent: 'center', cursor: 'pointer' }}>
                  <img src="https://creovate-io.vercel.app/android-chrome-512x512.png" height={60} width={60} alt="" />
                  <h1 style={{ fontFamily: 'fantasy', letterSpacing: 1, textTransform: 'uppercase', fontWeight: "lighter" }}>CreovateIO</h1>
                </div>
              </Link>
               <p style={{ textAlign: 'center', fontWeight: "bolder" }}>WE BUILD TRUST & Contact Us:+91 6265511439</p>
               <p></p>
           </div>
        </div>

        </div>

        
        <hr style={{ borderColor: "rgba(255,255,255,0.2)", marginTop: "40px" }} />

       
        <p className="text-center pb-3" style={{ fontSize: "14px", opacity: 0.9 }}>
          © 2024 Vivah & Career Bureau Ambah. All rights reserved.
        </p>
      </div>

     

      {/* Social Circle Styling */}
      <style>{`
        .social-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.4);
          cursor: pointer;
          transition: 0.3s;
        }
        .social-circle:hover {
          background: #f5c542;
          color: #8b0000;
          border-color: #f5c542;
        }
      `}</style>
    </div>
  );
}
