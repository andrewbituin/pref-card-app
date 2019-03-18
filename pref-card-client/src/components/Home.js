import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
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
        <Link to="/all">
          <button type="click" className="all-cards-button">
            View PrefCards
          </button>
        </Link>
      </nav>
      <main>
        <h1>PrefCards</h1>
        <h2>Reliable. Accessible. Accurate.</h2>
        <section className="about-section ">
          <h3>Experience simplicity and usablity.</h3>
          <p>
            PrefCards provides an easy way to generate, update and view surgical
            preference cards.
          </p>
          <h3>Work with team focused accessibility.</h3>
          <p>
            With PrefCards, you can control who is able to edit your preference
            card. Allow only people you trust to edit your preference card. This
            ensures consistency across procedures and allows staff to come and
            go knowing that the equipment and patient information is as it
            should be.
          </p>
          <h3>Log in and get started.</h3>
          <p>Create an account to get started.</p>
        </section>
      </main>
    </>
  );
}
