'use client';

import { useState } from 'react';
import NavBar from '../components/navbar';

export default function DogPage() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDogImage = async () => {
    setLoading(true);
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setDogImage(data.message);
    setLoading(false);
  };

  return (
    <div style={styles.content}>
      <NavBar />
      <div style={{ marginTop: '20px',padding: '10px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',width: '400px'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px'}}>
        <h1 style={{ fontSize: '30px' }}>Dog Image</h1>
        <button onClick={fetchDogImage} style={{background: '#87ee86', padding: '10px', borderRadius: '20px', width:'42px',}}>
          {loading ? '...' : '↺'}
        </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          dogImage && <img style={{borderRadius: '10px', width: '400px'}} src={dogImage} width={300} height={300} alt="Random Dog" />
        )}
      </div>
    </div>
  );
}


const styles = {
  content:{
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
  }
}
