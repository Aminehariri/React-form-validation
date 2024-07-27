import { useRef } from 'react';

export default function Accueil() {
  const editorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className='content '>
      <h2 className="main-title">Accueil</h2>
      <form className="formulaire" onSubmit={handleSubmit}>
        <div className="form-group">
          <span>Name</span>
          <input type="text" name="name" />
        </div>
        
        <div className="form-group">
          <span>City</span>
          <input type="text" name="city" className='city' />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input type="text" name="mail" className='mail' />
        </div>
        <div className="form-group">
          <span>Message</span>
          <input type="text" name="message" className='message'  />
        </div>
        <div className="form-group">
          <span>Accept conditions </span>
          <input type="checkbox"  name="acceptCondition" className='acceptCondition'  />
        </div>
        
        
        <div className="form-group">
          <input className="btn-principal" type="submit" value='Valide' />
        </div>
      </form>
    </div>
  );
}
