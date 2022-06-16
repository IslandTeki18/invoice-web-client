import { useState, useEffect } from "react";
import "./CreateInvoiceCardFooter.scss";

const CreateInvoiceCardFooter = (props) => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    props.notesCallback(notes);
  }, [notes]);

  function sendData(e) {
    setNotes(e.target.value);
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
