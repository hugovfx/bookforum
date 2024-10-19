'use client';
import { useEffect, useState } from 'react';
import NavBar from '../app/components/navbar';

export default function Home() {
  const [joke, setJoke] = useState('Cargando...');

  useEffect(() => {
    const fetchJoke = async () => {
      const res = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es');
      const data = await res.json();

      if (data.type === 'single') {
        setJoke(data.joke);
      } else if (data.type === 'twopart') {
        setJoke(`${data.setup} ... ${data.delivery}`);
      } else {
        setJoke('No se encontró un chiste.');
      }
    };

    fetchJoke();
  }, []);

  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <h1 style={styles.title}>Chiste Random</h1>
        <p style={styles.joke}>{joke}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  joke: {
    fontSize: '1.5rem',
    color: '#555',
  },
};
