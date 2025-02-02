import axios from 'axios';


export const getSets = async () => {
    const response = await fetch('/public/getsets.json');
    const data = await response.json();
    return response.data;
};

export const getAccessories = async () => {
    const response = await fetch('/public/getgacha.json');
    const data = await response.json();
    return response.data;
};

export const getCards = async () => {
    const response = await fetch('/public/getcards.json');
    console.log('Response:', response);
    const data = await response.json();
    console.log('Data:', data);

    // Transform the data into an array of card objects
    const cards = data.data.map((cardArray) => {
        const card = {};
        data.names.forEach((field, index) => {
            card[field] = cardArray[index];
        });
        return card;
    });

    return cards;
};