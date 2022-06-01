import { Routes, Route } from "react-router-dom";
import InvoiceListPage from "./pages/invoiceListPage/InvoiceListPage";
import InvoiceDetailsPage from "./pages/invoiceDetailsPage/InvoiceDetailsPage";
import CreateInvoicePage from "./pages/createInvoicePage/CreateInvoicePage";
import EstimateListPage from "./pages/estimateListPage/EstimateListPage";
import EstimateDetailsPage from "./pages/estimateDetailsPage/EstimateDetailsPage";
import CreateEstimatePage from "./pages/createEstimatePage/CreateEstimatePage";
import ClientListPage from "./pages/clientListPage/ClientListPage";
import ClientDetailsPage from "./pages/clientDetailsPage/ClientDetailsPage";
import CreateClientPage from "./pages/createClientPage/CreateClientPage";

function App() {
  return (
    <Routes>
      <Route path="invoices" element={<InvoiceListPage />}>
        <Route path=":invoiceId" element={<InvoiceDetailsPage />} />
        <Route path="new-invoice" element={<CreateInvoicePage />} />
      </Route>
      <Route path="estimates" element={<EstimateListPage />}>
        <Route path=":estimateId" element={<EstimateDetailsPage />} />
        <Route path="new-estimate" element={<CreateEstimatePage />} />
      </Route>
      <Route path="clients" element={<ClientListPage />}>
        <Route path=":clientId" element={<ClientDetailsPage />} />
        <Route path="new-client" element={<CreateClientPage />} />
      </Route>
    </Routes>
  );
}

export default App;
