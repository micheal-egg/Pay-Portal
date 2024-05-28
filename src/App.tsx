import { useState } from 'react';
import './App.css';
import AppleLogo from './assets/Apple Logo White.png';
import MenuIcon from './assets/Menu Icon.svg';

const payStubs = [
  {
    period: 'Sep 1 – Sep 14, 2023',
    hours: '80',
    gross: '$4,000.00',
    net: '$3,600.00',
    datePaid: 'Sep 21, 2023',      
  },
  {
    period: 'Aug 15 – Aug 28, 2023',
    hours: '79',
    gross: '$3,950.00',
    net: '$3,555.00',
    datePaid: 'Sep 4, 2023',       
  },
  {
    period: 'Aug 1 – Aug 14, 2023',
    hours: '82',
    gross: '$4,100.00',
    net: '$3,680.00',
    datePaid: 'Aug 21, 2023', 
  },
  {
    period: 'Jul 15 – Jul 28, 2023',
    hours: '78',
    gross: '$3,900.00',
    net: '$3,520.00',
    datePaid: 'Aug 4, 2023',       
  },
  {
    period: 'Jul 1 – Jul 14, 2023',
    hours: '80',
    gross: '$4,000.00',
    net: '$3,600.00',
    datePaid: 'Jul 21, 2023',      
  },
  {
    period: 'Jun 15 – Jun 28, 2023',
    hours: '81',
    gross: '$4,050.00',
    net: '$3,640.00',
    datePaid: 'Jul 5, 2023',       
  },
  {
    period: 'Jun 1 – Jun 14, 2023',
    hours: '80',
    gross: '$4,000.00',
    net: '$3,600.00',
    datePaid: 'Jun 21, 2023',      
  },
];

function App() {
  const [showMoreStubs, setShowMoreStubs] = useState(false);

  // Show only the latest 6 paystubs on the main card
  const visiblePayStubs = payStubs.slice(0, 6);

  return (
    <>
      <header className="nav">
        <img src={MenuIcon} alt="Menu Icon" className="menu-icon" />
        <div className="navleft">
          <h1>Apple</h1>
          <h2>Employee Portal</h2>
        </div>
        <div className="navright">
          <h1><span className="user-name">Micheal Egboh</span></h1>
          <h2><span className="user-role">Software Engineer</span></h2>
        </div>
      </header>

      <main>
        <div className="greeting">
          <img src={AppleLogo} alt="Apple Logo" className="apple-logo" />
          <h1>Welcome, Micheal Egboh</h1>
        </div>
        <p>
          This is a simple portal for employees to access their information.
          THIS IS NOT AFFILATED WITH APPLE IN ANY WAY
        </p>
      </main>

      {/* Dashboard Cards */}
      <section className="dashboard-cards">
        <div className="wage">
          <h1>Hourly Wage</h1>
          <h2>$45.00</h2>
        </div>
        <div className="hours">
          <h1>Hours Worked</h1>
          <h2>80 Hours</h2>
        </div>
        <div className="countdown">
          <h1>Next Payday Countdown</h1>
          <h2>15 Days</h2>
        </div>
        <div className="lastpay">
          <h1>Last Pay Summary</h1>
          <h2>$3,600.00</h2>
        </div>
      </section>

      {/* Pay & Info Section */}
      <section className="Info">
        {/* Pay Stubs card with table */}
        <div className="stubs">
          <h1>Pay Stubs</h1>
          <h2>Showing last 6 paychecks</h2>

          <table className="paystub-table">
            <thead>
              <tr>
                <th>Pay Period</th>
                <th>Hours</th>
                <th>Gross Pay</th>
                <th>Net Pay</th>
                <th>Pay Date</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {visiblePayStubs.map((stub, index) => (
                <tr key={index}>
                  <td>{stub.period}</td>
                  <td>{stub.hours}</td>
                  <td>{stub.gross}</td>
                  <td>{stub.net}</td>
                  <td>{stub.datePaid}</td>
                  <td>
                    <button className="download-btn">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="paystub-footer">
            <button
              className="view-more-btn"
              onClick={() => setShowMoreStubs(true)}
            >
              View more pay stubs
            </button>
          </div>
        </div>

        {/* My Information card */}
        <div className="details">
          <h1>My Information</h1>

          <div className="details-content">
            <div className="details-labels">
              <p><strong>Manager:</strong></p>
              <p><strong>Position:</strong></p>
              <p><strong>Department:</strong></p>
              <p><strong>Location:</strong></p>
              <p><strong>Employee ID:</strong></p>
              <p><strong>Hire Date:</strong></p>
              <p><strong>Email:</strong></p>
              <p><strong>Phone:</strong></p>
              <p><strong>Region:</strong></p>
            </div>

            <div className="details-data">
              <p>Jane Doe</p>
              <p>Software Engineer</p>
              <p>Engineering</p>
              <p>Cupertino, CA</p>
              <p>123456</p>
              <p>January 15, 2020</p>
              <p>micheal.egboh@apple.com</p>
              <p>(555) 123-9876</p>
              <p>AMR – United States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for "View More" */}
      {showMoreStubs && ( /*This is for conditional rendering */
        <div className="modal-backdrop" onClick={() => setShowMoreStubs(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2>All Pay Stubs</h2>
            <p className="modal-subtitle">Full pay history for the past period.</p>

            <table className="paystub-table">
              <thead>
                <tr>
                  <th>Pay Period</th>
                  <th>Hours</th>
                  <th>Gross Pay</th>
                  <th>Net Pay</th>
                  <th>Pay Date</th>
                  <th>Receipt</th>
                </tr>
              </thead>
              <tbody>
                {payStubs.map((stub, index) => (
                  <tr key={index}>
                    <td>{stub.period}</td>
                    <td>{stub.hours}</td>
                    <td>{stub.gross}</td>
                    <td>{stub.net}</td>
                    <td>{stub.datePaid}</td>
                    <td>
                      <button className="download-btn">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              className="close-modal-btn"
              onClick={() => setShowMoreStubs(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
