import { useState } from "react";
import "./CreateInvoicePage.scss";
import CreateInvoiceCard from "../../components/createInvoiceCard/CreateInvoiceCard";

const CreateInvoicePage = () => {
  
  return (
    <div className="dkCreateInvoicePage">
      <div className="container">
        <div className="row">
          <div className="col-10">
            <CreateInvoiceCard className="my-5" />
          </div>
          <div className="col-2">
            <div className="card bg-dark text-light my-5">
              <div className="card-body">
                <div className="currency-wrapper"></div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoicePage;
