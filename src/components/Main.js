import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api.js';
import Card from './Card';

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    }, []);
  });

  return (
    <main>
      <section className='profile'>
        <button className='profile__avatar-btn' onClick={onEditAvatar}>
          <img
            className='profile__avatar profile__avatar_opacity'
            src={currentUser.avatar}
            alt='Аватар пользователя'
          />
        </button>
        <div className='profile__info'>
          <div className='profile__container'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button
              className='profile__edit-btn btn-opacity'
              type='button'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__job'>{currentUser.about}</p>
        </div>
        <button
          className='profile__add-btn btn-opacity'
          type='button'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='gallery'>
        <ul className='gallery__cards'>
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}