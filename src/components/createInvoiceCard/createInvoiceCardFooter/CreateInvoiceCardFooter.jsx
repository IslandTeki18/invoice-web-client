import { useState } from "react";
import "./CreateInvoiceCardFooter.scss";

const CreateInvoiceCardFooter = () => {
  const [notes, setNotes] = useState("");

  function sendData(e) {
    e.preventDefault();
    setNotes(e.target.value);
    setTimeout(() => {
      props.notesCallback(notes);
    }, 5000);
  }
  return (
    <div className="dkCreateInvoiceCardFooter">
      <div className="footer-wrapper">
        <label htmlFor="notes" className="form-label">
          Notes
        </label>
        <textarea
          className="form-control"
          id="notes"
          rows="3"
          placeholder="Thank you for your business"
          value={notes}
          onChange={sendData}
        />
      </div>
    </div>
  );
};

export default CreateInvoiceCardFooter;
