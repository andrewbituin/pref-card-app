import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <>
      <nav className="navigation">
        <Link to="/login">
          <button type="click" className="login-button">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button type="click" className="register-button">
            Register
          </button>
        </Link>
      </nav>
      <main>
        <header className="home-header">
          <h1 className="home-title">PrefCards</h1>
          <h2 className="home-subtitle">Reliable. Accessible. Accurate.</h2>
        </header>
        <section className="about-section ">
          <h3>Experience simplicity and usablity.</h3>
          <p>
            PrefCards provides an easy way to generate, update and view surgical
            preference cards.
          </p>
          <h3>Work with team focused accessibility.</h3>
          <p>
            PrefCards allows you limit the users who are able to edit your preference
            card, ensuring consistency across procedures and allowing staff to come and
            go knowing that the surgeon's preferences for equipment and patient information is as it
            should be.
          </p>
          <h3>Log in and get started.</h3>
          <p>Create an account to get started.</p>
        </section>
      </main>
    </>
  );
}
