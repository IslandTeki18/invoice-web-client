import React from "react";
import "./CreateInvoiceCardFooter.scss";

const CreateInvoiceCardFooter = () => {
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
          valu
        />
      </div>
    </div>
  );
};

export default CreateInvoiceCardFooter;
