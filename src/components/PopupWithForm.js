export default function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${(props.isOpen && 'popup_opened') ? 'popup_opened':''}`}
    >
      <div className='popup__container'>
        <button
          className='popup__btn-close btn-opacity'
          type='button'
          onClick={props.onClose}
        />
        <h2 className='popup__title'>{props.title}</h2>
        <form
          onSubmit={props.onSubmit}
          className={`popup__form popup__${props.name}-form`}
          name='Form'
          action='#'
          noValidate
        >
          {props.children}
          <button className='popup__btn-save popup__form-submit' type='submit'>
            {props.btnText}
          </button>
        </form>
      </div>
    </div>
  );
}
