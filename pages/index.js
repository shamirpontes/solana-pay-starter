import React from 'react';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

// Constantes
const TWITTER_HANDLE = '_web3dev';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  // Isso buscará a chave pública dos usuários (endereço da carteira) de qualquer carteira que suportamos
  const { publicKey } = useWallet();

  const renderNotConnectedContainer = () => (
    <div>
      <img src="https://media.tenor.com/1mJ-tJSzvwsAAAAd/solana-sol.gif" alt="emoji" />

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>    
    </div>
  );

  return (
    <div className="App">
      <div className="container">
        <header className="header-container">
          <p className="header"> WEB3 Tools Development</p>
          <p className="sub-text">Venda seus serviços e encontre clientes facilmente e com segurança!</p>
        </header>

        <main>
          {/* Nós só renderizamos o botão de conexão se a chave pública não existir */}
          {publicKey ? 'Conectado!' : renderNotConnectedContainer()}

        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`Tecnologia WEB3 Blockchain`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;