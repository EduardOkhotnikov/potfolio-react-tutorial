import React from 'react';

export default function Contacts() {
  return (
<main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Alanya, Turkey</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+38011111111    11">+380 97 375 95 04</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:example@gmail.com<">eduardohotnikov@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
  )
}
