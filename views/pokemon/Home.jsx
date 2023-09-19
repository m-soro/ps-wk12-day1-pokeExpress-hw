import React from "react";

export default function Home() {
  return (
    <div className="container">
      <link rel="stylesheet" type="text/css" href="/pico.min.css" />
      <h1>Welcome to Pokemon App!</h1>
      <section>
        <img src="https://i.imgur.com/rRKtN1B.jpg" alt="" />
      </section>
      <a href="/pokemon" role="button" className="outline">
        view pokemon
      </a>
    </div>
  );
}
