import { useState, useEffect } from "react";
import "./CreateInvoiceCardItems.scss";
import Input from "../../input/Input";

const CreateInvoiceCardItems = () => {
  // TODO: Remove all of the console logs
  const [item, setItem] = useState({
    title: "",
    description: "",
    quanity: 1,
    price: 0,
    total: 0,
  });
  const [itemArray, setItemArray] = useState([item]);
  console.log("Items: ", itemArray);

  function calculateTotalFromPrice(price) {
    const quanity = item.quanity;
    let total = quanity * price;
    return total;
  }
  function createNewItems() {
    const createdItem = item;
    createdItem.total = calculateTotalFromPrice(createdItem.price);
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
      <tr key={`item-${index}`}>
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
        <td>${item.total}</td>
        <td className="d-flex justify-content-end">
          <button className="btn btn-link" onClick={removeItem}>
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
              <tr>
                <td colSpan={5}>No Items</td>
              </tr>
            )}
            <tr>
              <td>
                <button className="btn btn-link" onClick={createNewItems}>
                  Add Item
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateInvoiceCardItems;
