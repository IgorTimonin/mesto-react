import React from 'react';
import PopupWithForm from './PopupWithForm';


export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
    inputRef.current.value = '';
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      btnText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        id='avatar-url-input'
        className='popup__field popup__field_newcard-adress popup__form-input'
        type='url'
        name='avatarLink'
        placeholder='Ссылка на картинку'
        required
        autocomplete='off'
      />
      <span className='avatar-url-input-error input-error'>
        Введите адрес аватара.
      </span>
    </PopupWithForm>
  );
}