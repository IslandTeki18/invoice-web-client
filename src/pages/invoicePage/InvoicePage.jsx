import React from 'react'
import "./InvoicePage.scss"
import { Outlet } from 'react-router-dom'

const InvoicePage = () => {
  return (
    <div className="dkInvoicePage">
        <Outlet />
    </div>
  )
}

export default InvoicePage