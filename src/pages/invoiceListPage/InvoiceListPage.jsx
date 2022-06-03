import React from "react";
import "./InvoiceListPage.scss";
import { Link, Outlet } from "react-router-dom";

const InvoiceListPage = () => {
  return (
    <div className="dkInvoiceListPage pt-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card bg-dark">
              <div className="d-flex justify-content-between align-items-center p-3 text-light">
                <h4>Invoice List</h4>
                <div className="button-container">
                  <Link to="/invoices/new-invoice" className="btn btn-success me-3">
                    Create Invoice
                  </Link>
                  <button className="btn btn-secondary">Export</button>
                </div>
              </div>
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <td scope="col">Customer</td>
                    <td scope="col">Date</td>
                    <td scope="col">ID</td>
                    <td scope="col" className="text-end">
                      Total
                    </td>
                    <td scope="col">Status</td>
                    <td scope="col" className="text-end">
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test Testerton</td>
                    <td>01 Jan 2022</td>
                    <td>INV-001</td>
                    <td className="text-end">$10,300.00</td>
                    <td>Paid</td>
                    <td>
                      <div className="d-flex justify-content-end align-items-center">
                        <button className="btn btn-primary">view</button>
                        <button className="btn btn-danger">remove</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default InvoiceListPage;
