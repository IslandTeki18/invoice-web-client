import { useState, useEffect } from "react";
import "./CreateInvoiceCardHeader.scss";
import Input from "../../input/Input";

const CreateInvoiceCardHeader = (props) => {
  const [dates, setDates] = useState({
    startDate: props.startDate || "",
    dueDate: props.dueDate || "",
  });

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

  function dateCallback() {
    props.dateCallback(dates);
  }

  return (
    <div className="dkCreateInvoiceCardHeader">
      <div className="header-wrapper d-flex justify-content-between align-items-center">
        <div className="date-picker-wrapper d-flex align-items-center">
          <label htmlFor="date-picker-input form-label">Date:</label>
          <Input
            className="ms-3"
            type="date"
            value={dates.startDate}
            onChange={handleInputChange}
            name="startDate"
          />
        </div>
        <div className="title-wrapper">
          <h3>Invoice #???</h3>
        </div>
        <div className="dueDate-picker-wrapper d-flex">
          <label htmlFor="dueDate-picker-input form-label">Due Date:</label>
          <Input
            type="date"
            className="ms-3"
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
