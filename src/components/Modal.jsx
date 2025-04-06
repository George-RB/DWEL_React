function Modal() {
  return (
    <div id="modal" className="modal hidden">
      <div className="modal-content">
        <span className="close-button">&times;</span>
        <h2>Registration</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
