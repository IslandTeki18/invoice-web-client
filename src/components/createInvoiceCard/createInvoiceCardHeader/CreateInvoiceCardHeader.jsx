import { useState, useEffect } from "react";
import "./CreateInvoiceCardHeader.scss";
import Input from "../../input/Input";

const CreateInvoiceCardHeader = (props) => {
  const [dates, setDates] = useState({
    startDate: props.startDate || "",
    dueDate: props.dueDate || "",
  });
  const [invoiceNum, setInvoiceNum] = useState("");

  useEffect(() => {
    if (dates.startDate !== "" && dates.dueDate !== "") {
      dateCallback();
    }
  }, [dates]);

  function handleInputChange(e) {
    setDates((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleInvoiceTitle(e) {
    setInvoiceNum(e.target.value);
  }

  function dateCallback() {
    props.dateCallback(dates, invoiceNum);
  }

  return (
    <div className="dkCreateInvoiceCardHeader">
      <div className="header-wrapper row">
        <div className="date-wrapper col-4">
          <label htmlFor="date-picker-input form-label">Date:</label>
          <Input
            className="ms-3"
            type="date"
            value={dates.startDate}
            onChange={handleInputChange}
            name="startDate"
          />
        </div>
        <div className="title-wrapper col-4">
          <h3 className="fw-bolder">
            Invoice<span className="ms-2">#</span>
          </h3>
          <Input
            type="text"
            className="ms-1"
            value={invoiceNum}
            onChange={handleInvoiceTitle}
            name="invoiceNum"
            placeholder="INV001"
          />
        </div>
        <div className="date-wrapper col-4">
          <label htmlFor="form-label" className="dueDate-label">
            Due Date:
          </label>
          <Input
            type="date"
            className="ms-2"
            value={dates.dueDate}
            min={dates.startDate}
            onChange={handleInputChange}
            name="dueDate"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateInvoiceCardHeader;
