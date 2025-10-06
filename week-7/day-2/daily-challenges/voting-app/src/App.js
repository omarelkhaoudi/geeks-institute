import React, { useState } from "react";

function App() {
  // State : tableau des langages et votes
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  // Fonction pour augmenter le vote
  const voteForLanguage = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  // Calcul du total des votes
  const totalVotes = languages.reduce((sum, lang) => sum + lang.votes, 0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Vote for your favorite programming language</h1>

        <div style={styles.languageList}>
          {languages.map((lang, index) => (
            <div key={index} style={styles.languageItem}>
              <span style={styles.voteCount}>{lang.votes}</span>
              <span style={styles.languageName}>{lang.name}</span>
              <button
                style={styles.voteButton}
                onClick={() => voteForLanguage(index)}
              >
                Vote
              </button>
            </div>
          ))}
        </div>

        <div style={styles.totalVotes}>Total Votes: {totalVotes}</div>
      </div>
    </div>
  );
}

// Styles object
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #EA6692FF 0%, #764ba2 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    padding: '20px'
  },
  card: {
    background: 'white',
    borderRadius: '15px',
    padding: '40px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    minWidth: '400px',
    maxWidth: '500px',
    width: '100%'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: '30px',
    fontWeight: 'bold'
  },
  languageList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  languageItem: {
    display: 'grid',
    gridTemplateColumns: '60px 1fr auto',
    alignItems: 'center',
    padding: '20px',
    background: '#fef3e2',
    border: '1px solid #e0d4b8',
    borderRadius: '10px'
  },
  voteCount: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  languageName: {
    fontSize: '1.2rem',
    color: '#333',
    fontWeight: '500',
    paddingLeft: '20px'
  },
  voteButton: {
    background: 'none',
    border: '1px solid #4a9b4a',
    color: '#4a9b4a',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '5px',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  },
  totalVotes: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '1.2rem',
    color: '#666',
    fontWeight: '500',
    padding: '15px',
    background: '#f8f9fa',
    borderRadius: '10px'
  }
};

export default App;
