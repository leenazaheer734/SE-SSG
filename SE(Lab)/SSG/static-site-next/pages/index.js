import Head from "next/head";

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Create an account to join our platform." />
        <meta property="og:title" content="Sign Up" />
        <meta property="og:description" content="Create an account to join our platform." />
      </Head>
      <div className="container">
        <header className="header">
          <h1>Sign Up</h1>
          <p>Join us today to enjoy exclusive features!</p>
        </header>
        <main className="main">
          <form className="form">
            <div className="formGroup">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Leena" required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="button">
              Sign Up
            </button>
          </form>
        </main>
        <footer className="footer">
          <p>&copy; 2024 My Platform. All rights reserved.</p>
        </footer>
      </div>
      <style jsx>
        {`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .header h1 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .header p {
          font-size: 1.2rem;
          color: #666;
        }

        .main {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .formGroup {
          margin-bottom: 15px;
        }

        .formGroup label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .formGroup input {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .button {
          background: #0070f3;
          color: white;
          padding: 10px;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .button:hover {
          background: #005bb5;
        }

        .footer {
          text-align: center;
          margin-top: 20px;
          color: #888;
        }
      `}</style>
    </>
  );
}
