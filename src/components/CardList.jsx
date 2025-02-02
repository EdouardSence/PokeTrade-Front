const CardList = ({ cards }) => {
    return (
        <div>
            <h2>Your Cards</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {cards.map((card) => (
                    <div key={card.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '200px' }}>
                        <img src={"/cards/" + card.id + ".webp"} alt={card.id} style={{ width: '100%' }} />
                        <h3>{card.name}</h3>
                        <p><strong>Set:</strong> {card.set_name}</p>
                        <p><strong>Rarity:</strong> {card.rarity}</p>
                        <p><strong>Type:</strong> {card.type}</p>
                        {card.attack && (
                            <p>
                                <strong>Attack:</strong> {card.attack[0].info}
                            </p>
                        )}
                        {card.weakness && (
                            <p>
                                <strong>Weakness:</strong> {card.weakness}
                            </p>
                        )}
                        {card.retreat && (
                            <p>
                                <strong>Retreat Cost:</strong> {card.retreat}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardList;