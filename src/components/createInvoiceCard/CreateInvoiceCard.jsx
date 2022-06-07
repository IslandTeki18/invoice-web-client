import { useState } from "react";
import CreateInvoiceCardBody from "./createInvoiceCardBody/CreateInvoiceCardBody";
import CreateInvoiceCardFooter from "./createInvoiceCardFooter/CreateInvoiceCardFooter";
import CreateInvoiceCardHeader from "./createInvoiceCardHeader/CreateInvoiceCardHeader";
import CreateInvoiceCardItems from "./createInvoiceCardItems/CreateInvoiceCardItems";

const CreateInvoiceCard = (props) => {
  const [invoiceForm, setInvoiceForm] = useState({
    startDate: "",
    dueDate: "",
    billForm: {
      billFromName: "",
      billFromEmail: "",
      billFromAddress: "",
      billFromPhone: "",
      billToName: "",
      billToEmail: "",
      billToAddress: "",
      billToPhone: "",
    },
    items: {
      items: [],
      tax: "tax",
      discount: "discount",
      subTotal: 0,
      grandTotal: 0,
    },
  });
  console.log("Invoice Form: ", invoiceForm);
  return (
    <div className={`dkCreateInvoiceCard ${props.className}`}>
      <div className="card bg-dark text-light">
        <div className="card-body">
          <CreateInvoiceCardHeader
            dates={{
              startDate: invoiceForm.stateDate,
              dueDate: invoiceForm.dueDate,
            }}
            dateCallback={(dates) => {
              setInvoiceForm((prevState) => {
                return {
                  ...prevState,
                  startDate: dates.startDate,
                  dueDate: dates.dueDate,
                };
              });
            }}
          />
          <hr />
          <CreateInvoiceCardBody
            billFormCallback={(billForm) => {
              setInvoiceForm((prevState) => {
                return {
                  ...prevState,
                  billForm: billForm,
                };
              });
            }}
          />
          <CreateInvoiceCardItems
            invoiceItemCallback={(items) => {
              setInvoiceForm((prevState) => {
                return {
                  ...prevState,
                  items: items,
                };
              });
            }}
          />
          <hr />
          <CreateInvoiceCardFooter />
        </div>
      </div>
    </div>
  );
};

CreateInvoiceCard.defaultProps = {
  className: "",
};

export default CreateInvoiceCard;
