import { ToastContainer } from "react-toastify";

// Importing components
import Hero from "./components/Hero";
import Demo from "./components/Demo";

// Importing styles
import "./App.css";

// App component
const App = () => {
  return (
    <main>
      {/* Main Background Section */}
      <div className="main">
        <div className="gradient" />
      </div>

      {/* Application Content Section */}
      <section className="app">
        <Hero />
        <Demo />
      </section>

      {/* Toast Notifications */}
      <aside>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </aside>

      {/* About Me Section (Currently Commented Out) */}
      {/* 
      <section className="about-me">
        <h2 className="heading">
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className="about-content">
          <img
            draggable="false"
            className="tilt"
            src="/src/assets/2.png" // Ensure the path is correct
            alt="A picture of Bhagya Patel"
          />
          <div className="content">
            <h3>Your Name</h3>
            <div className="box-container">
              <div className="box">
                <p>
                  <span>Email:</span> bhagya20052904@gmail.com
                </p>
                <p>
                  <span>Place:</span> Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 
      */}
    </main>
  );
};

export default App;
