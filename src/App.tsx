import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import qrcode from 'qrcode';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [qrCodeLink, setQrCodeLink] = useState('');

  const handleDownload = (url: string) => {
    qrcode.toDataURL(
      url,
      {
        width: 600,
        margin: 3,
      },
      (_error, url) => {
        try {
          setQrCodeLink(url);
        } catch (_error) {
          throw new Error('Ops, algo deu errado!');
        }
      }
    );
  };

  return (
    <div className="App">
      <header>
        <h1 className="title">
          Qr<span>Code</span>Generator
        </h1>
      </header>
      <main>
        <div className="qrCode-container">
          <QRCode size={180} value={link}></QRCode>
        </div>
        <div className="inputGroup">
          <input
            onChange={(event) => {
              setLink(event.target.value);
              handleDownload(event.target.value);
            }}
            type="text"
            className="inputWrite"
            placeholder="Digite seu link aqui..."
          />
          <a href={qrCodeLink} download={`qrcode.jpg`}>
            <button className="downloadQRCode">Baixar QRCode</button>
          </a>
        </div>
      </main>
      <footer>
        <p>Created by:</p>
        <p>@eutago</p>
      </footer>
    </div>
  );
}

export default App;
