import { useState, useEffect } from "react";
import "./CreateInvoiceCardBody.scss";
import Input from "../../input/Input";

const CreateInvoiceCardBody = (props) => {
  const [billForm, setBillForm] = useState({
    billFromName: "",
    billFromEmail: "",
    billFromAddress: "",
    billFromPhone: "",
    billToName: "",
    billToEmail: "",
    billToAddress: "",
    billToPhone: "",
  });

  useEffect(() => {
    if (checkBillForm()) {
      billFormCallback();
    }
  }, [billForm]);

  function checkBillForm() {
    return (
      billForm.billFromName &&
      billForm.billFromEmail &&
      billForm.billFromAddress &&
      billForm.billFromPhone &&
      billForm.billToName &&
      billForm.billToAddress &&
      billForm.billToEmail &&
      billForm.billToPhone
    );
  }

  function billFormCallback() {
    props.billFormCallback(billForm);
  }

  function handleBillFromChange(e) {
    setBillForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div className="dkCreateInvoiceCardBody">
      <div className="invoice-body-wrapper">
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col-6">
              <h6>Bill From</h6>
              <Input
                type="text"
                placeholder="Name"
                value={billForm.billFromName}
                onChange={handleBillFromChange}
                name="billFromName"
                className="mb-2"
              />
              <Input
                type="email"
                placeholder="Email"
                value={billForm.billFromEmail}
                onChange={handleBillFromChange}
                name="billFromEmail"
                className="mb-2"
              />
              <Input
                type="text"
                placeholder="Address"
                value={billForm.billFromAddress}
                onChange={handleBillFromChange}
                name="billFromAddress"
                className="mb-2"
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={billForm.billFromPhone}
                onChange={handleBillFromChange}
                name="billFromPhone"
                className="mb-2"
              />
            </div>
            <div className="col-6">
              <h6>Bill To</h6>
              <Input
                type="text"
                placeholder="Name"
                value={billForm.billToName}
                onChange={handleBillFromChange}
                name="billToName"
                className="mb-2"
              />
              <Input
                type="email"
                placeholder="Email"
                value={billForm.billToEmail}
                onChange={handleBillFromChange}
                name="billToEmail"
                className="mb-2"
              />
              <Input
                type="text"
                placeholder="Address"
                value={billForm.billToAddress}
                onChange={handleBillFromChange}
                name="billToAddress"
                className="mb-2"
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={billForm.billToPhone}
                onChange={handleBillFromChange}
                name="billToPhone"
                className="mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoiceCardBody;
