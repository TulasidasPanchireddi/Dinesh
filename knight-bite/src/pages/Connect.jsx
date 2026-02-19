const Connect = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Contact */}
        <div className="footer-col">
          <h3>Connect with us</h3>
          <p>Contact us</p>
          <p>knightbiteixe@gmail.com</p>
          <p>+91 8047106107</p>
          <p>Available from 7pm to 4am</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <p>Delivery Policies</p>
          <p>Privacy Policies</p>
          <p>Careers (Coming soon)</p>
          <p>Franchise</p>
        </div>

        {/* Subscribe */}
        <div className="footer-col">
          <h3>Join us on our adventure</h3>
          <p>
            Enter your email address below to be the first to know everything
            about us, where we’ll be next, and how you can come along!
          </p>

          <input type="email" placeholder="Enter your email address" />
          <button>Submit</button>
        </div>

        {/* Office */}
        <div className="footer-col">
          <h3>Head Office</h3>
          <p>Mangaluru - 575001</p>

          <h3>Locations</h3>
          <p>Bengaluru, Mangalore, Manipal, Udupi</p>

          <h3>Follow us</h3>
        </div>

      </div>
    </footer>
  );
};

export default Connect
