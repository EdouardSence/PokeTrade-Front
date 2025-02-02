import React, { useEffect, useState } from 'react';
import { getCards } from '../services/api';
import CardList from '../components/CardList';

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards();
        setCards(data);
        setFilteredCards(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cards:', error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const results = cards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(results);
  }, [searchTerm, cards]);

  if (loading) {
    return <p>Loading cards...</p>;
  }

  return (
    <div>
      <h1>Your Dashboard</h1>
      <input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '16px', padding: '8px', width: '300px' }}
      />
      <CardList cards={filteredCards} />
    </div>
  );
};

export default Dashboard;