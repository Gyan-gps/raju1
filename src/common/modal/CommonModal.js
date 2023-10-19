import { useState } from "react";
import "./CommonModal.css";
const category = [
  {
    Name: "Fruits",
    Category_id: 123,
    is_active: true
  },
  {
    Name: "Clothes",
    Category_id: 124,
    is_active: true
  },
  {
    Name: "Vegitables",
    Category_id: 125,
    is_active: true
  }
];
export const CommonModal = ({ type }) => {
  const [categoryList, setCategoryList] = useState(category);
  const [details, setDetails] = useState({
    Name: "",
    Image: "",
    Price: 0,
    Discount: 0,
    Category: ""
  });
  console.log(type);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((e) => ({ ...e, [name]: value }));
  };
  const handleCreate = () => {
    console.log(details);
  };
  return (
    <div className="commonModal">
      <>
        <h3>Create {type === "category" ? "Category" : "Product"}</h3>
        <label>
          Name
          <input
            onChange={handleChange}
            value={details.Name}
            name="Name"
            placeholder="Enter Name"
          />
        </label>
        {type !== "category" && (
          <>
            <label>
              Image
              <input
                onChange={handleChange}
                value={details.Image}
                name="Image"
                placeholder="Enter image url"
              />
            </label>
            <label>
              Price
              <input
                onChange={handleChange}
                value={details.Price}
                name="Price"
                type="Number"
                placeholder="Enter Price"
              />
            </label>
            <label>
              Discount
              <input
                onChange={handleChange}
                value={details.Discount}
                name="Discount"
                type="Number"
                placeholder="Enter Discount"
              />
            </label>
            <select
              onChange={handleChange}
              value={details.Category}
              name="Category"
              required
            >
              <option value="">Select Category</option>
              {categoryList?.map((ele) => (
                <option value={ele.Category_id} key={ele.Category_id}>
                  {ele.Name}
                </option>
              ))}
            </select>
          </>
        )}
        <br />
        <button onClick={handleCreate}>Create</button>
      </>
    </div>
  );
};
