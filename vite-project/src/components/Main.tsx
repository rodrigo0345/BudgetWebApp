import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Main() {
  const { currentUser } = useAuth();

  // set by default to a month 
  const [income, setIncome] = React.useState(0);
  const [expense, setExpense] = React.useState(0);

  // debug
  console.log(currentUser);

  return (
    <>
      <header className="header">
        <div className="welcome">
          <h1>Budget App</h1>
          <p>Welcome {currentUser || 'Unknown'}!</p>
        </div>
        <ul>
          <li>Login</li>
          <li>New movement</li>
        </ul>
      </header>
      <main>
        <div className="intro">
          <h1>Portfolio</h1>
          <div className="income">
            <div className="result">
              <h2>Income</h2>
              <p>23.00€</p>
            </div>
            <ul className="income__list">
                <li className='income__item'>
                  <div className="income__item--description">
                    <p>Salary</p>
                  </div>
                  <div className="income__item--value">
                    <p>23.00€</p>
                  </div>
                </li>
            </ul>
          </div>
          <div className="spending">
            <div className="result">
              <h2>Spending</h2>
              <p>23.00€</p>
            </div>
            <ul className="spending__list">
                <li className='spending__item'>
                  <div className="spending__item--description">
                    <p>Food</p>
                  </div>
                  <div className="spending__item--value">
                    <p>23.00€</p>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
          <div className="contact">
            <h2>Contact</h2>
            <p>email: <a href="mailto:casanova.rodrigo0011">Developer</a></p>
          </div>
          <div className="copyright">
            <p>© 2022 Rodrigo Casanova</p>
          </div>
      </footer>
    </>
  )
}
