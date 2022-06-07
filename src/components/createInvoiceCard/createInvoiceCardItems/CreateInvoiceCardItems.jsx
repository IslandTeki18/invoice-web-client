import { useState, useEffect } from "react";
import "./CreateInvoiceCardItems.scss";
import Input from "../../input/Input";

const CreateInvoiceCardItems = () => {
  const [item, setItem] = useState({
    title: "",
    description: "",
    quanity: 1,
    price: 0,
    total: 0,
  });
  const [itemArray, setItemArray] = useState([]);
  const [itemsAndTotal, setItemsAndTotal] = useState({
    items: itemArray,
    tax: "tax",
    discount: "discount",
    subTotal: 0,
    grandTotal: 0,
  });
  useEffect(() => {
    calculateSubTotal();
    calculateGrandTotal();
  }, [itemArray]);

  function calculateItemTotal(price, qty) {
    return Number(qty * price);
  }
  function calculateSubTotal() {
    if (!itemArray) return itemsAndTotal.subTotal;
    let subTotal = itemArray.reduce((prev, curr) => prev + curr.total, 0);
    setItemsAndTotal((prevState) => {
      return {
        ...prevState,
        subTotal: subTotal,
      };
    });
    return itemsAndTotal.subTotal;
  }
  function calculateGrandTotal() {
    if (!itemArray) return itemsAndTotal.grandTotal;
    let grandTotal = itemArray.reduce((prev, curr) => prev + curr.total, 0);
    // Add tax object
    // Add discount object
    setItemsAndTotal((prevState) => {
      return {
        ...prevState,
        grandTotal: grandTotal,
      };
    });
    return itemsAndTotal.grandTotal;
  }
  function createNewItems() {
    const createdItem = item;
    createdItem.total = calculateItemTotal(createdItem.price);
    let newArray = [...itemArray];
    newArray.push(createdItem);
    setItemArray(newArray);
    setItem({ title: "", description: "", quanity: 1, price: 0, total: 0 });
  }

  function removeItem(index) {
    const newArray = [...itemArray];
    newArray.splice(index, 1);
    setItemArray(newArray);
  }

  const handleFormChange = (index) => (e) => {
    let newArray = [...itemArray];
    newArray[index][e.target.name] = e.target.value;
    setItemArray(newArray);
  };

  function renderItems() {
    if (isNaN(!itemArray)) return;
    return itemArray.map((item, index) => (
      <tr key={`item-${index}`} className="border-bottom border-bottom-dashed">
        <td>
          <div className="title-description">
            <Input
              className="mb-2"
              type="text"
              value={item.title}
              onChange={handleFormChange(index)}
              name="title"
              placeholder="Title"
              id="invoice-title-input"
            />
            <Input
              type="text"
              value={item.description}
              onChange={handleFormChange(index)}
              name="description"
              placeholder="Description"
              id="invoice-description-input"
            />
          </div>
        </td>
        <td>
          <Input
            type="number"
            value={item.quanity}
            onChange={handleFormChange(index)}
            name="quanity"
            placeholder="Quanity"
            id="invoice-qunaity-input"
          />
        </td>
        <td>
          <Input
            type="number"
            value={item.price}
            onChange={handleFormChange(index)}
            name="price"
            placeholder="Price"
            id="invoice-price-input"
          />
        </td>
        <td>${(item.total = calculateItemTotal(item.price, item.quanity))}</td>
        <td className="text-end">
          <button className="btn btn-link" onClick={() => removeItem(index)}>
            <i className="fa-solid fa-trash-can color-trash" />
          </button>
        </td>
      </tr>
    ));
  }
  return (
    <div className="dkCreateInvoiceCardItems">
      <div className="invoice-items-wrapper">
        <table className="table text-light">
          <thead>
            <tr scope="row" className="text-uppercase">
              <th scope="col">Item</th>
              <th scope="col">QTY</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col" className="d-flex justify-content-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {itemArray.length > 0 ? (
              renderItems()
            ) : (
              <tr className="border-bottom border-bottom-dashed">
                <td colSpan={5}>No Items</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="border-top border-top-dashed align-top fs-6 fw-bolder text-gray-700">
              <th className="text-primary">
                <button className="btn btn-link" onClick={createNewItems}>
                  Add Item
                </button>
              </th>
              <th
                colSpan="2"
                className="border-bottom border-bottom-dashed ps-0"
              >
                <div className="d-flex flex-column align-items-start">
                  <div className="fs-5">Subtotal</div>
                  <button
                    className="btn btn-link"
                    onClick={() => alert("Coming Soon")}
                  >
                    Add Tax
                  </button>
                  <button
                    className="btn btn-link"
                    onClick={() => alert("Coming Soon")}
                  >
                    Add Discount
                  </button>
                </div>
              </th>
              <th
                colSpan="2"
                className="border-bottom border-bottom-dashed text-end"
              >
                ${itemsAndTotal.subTotal}
              </th>
            </tr>
            <tr className="align-top fw-bolder text-gray-700">
              <th></th>
              <th colSpan="2" className="fs-4 ps-0">
                Total
              </th>
              <th colSpan="2" className="text-end fs-4 text-nowrap">
                ${itemsAndTotal.grandTotal}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CreateInvoiceCardItems;
