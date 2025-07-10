import Footerb from "./Footer";
import styles from './Createacc.module.css';
import './ScaleWrapper.css'; // ✅ Make sure to import this new global CSS

function Createacc() {
  const days = [...Array(31)].map((_, i) => i + 1);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="scale-wrapper"> {/* ✅ Wrap entire page in scaling div */}
      <div className="container">
        <div className={styles["create-page-wrapper"]}>
          <div className={styles["create-page-content"]}>
            <div className={styles.whitecard}>
              <div className={styles.top}>
                <h2>Create a new account</h2>
                <p>It's quick and easy.</p>
                <hr />
              </div>
              <div className={styles.bottom}>
                <form className={styles.form}>
                  <div className={styles["name-fields"]}>
                    <input type="text" name="firstName" placeholder="First name" />
                    <input type="text" name="surname" placeholder="Surname" />
                  </div>

                  <label className={styles["dob-label"]}>
                    Date of birth <span className={styles["info-icon"]} title="Provide your birth date">?</span>
                  </label>
                  <div className={styles["dob-selects"]}>
                    <select name="day">
                      <option value="">Day</option>
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <select name="month">
                      <option value="">Month</option>
                      {months.map((month, idx) => (
                        <option key={idx + 1} value={idx + 1}>{month}</option>
                      ))}
                    </select>
                    <select name="year">
                      <option value="">Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <label className={styles["gender-label"]}>
                    Gender <span className={styles["info-icon"]} title="Choose your gender">?</span>
                  </label>
                  <div className={styles["gender-options"]}>
                    <label className={styles["gender-option"]}>
                      <span>Female</span>
                      <input type="radio" name="gender" value="female" />
                    </label>
                    <label className={styles["gender-option"]}>
                      <span>Male</span>
                      <input type="radio" name="gender" value="male" />
                    </label>
                    <label className={styles["gender-option"]}>
                      <span>Custom</span>
                      <input type="radio" name="gender" value="custom" />
                    </label>
                  </div>

                  <input className={styles.inputf} type="text" name="contact" placeholder="Mobile number or email address" />
                  <input className={styles.inputf} type="password" name="password" placeholder="New password" />

                  <p className={styles["contact-disclaimer"]}>
                    People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a>
                  </p>

                  <p className={styles["signup-terms"]}>
                    By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>. 
                    You may receive SMS notifications from us and can opt out at any time.
                  </p>

                  <button className={styles["signup-btn"]} type="submit">Sign Up</button>
                  <a href="#" className={styles["login-link"]}>Already have an account?</a>
                </form>
              </div>
            </div>
          </div>

          <div className={styles["footer-container"]}>
            <Footerb />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createacc;
