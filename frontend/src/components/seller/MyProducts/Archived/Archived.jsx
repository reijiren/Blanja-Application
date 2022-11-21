import React from "react";
// images
import mensFormalSuit from "../../../../assets/images/men jacket jeans.png"

const Archived = () => {
  return (
    <>
      <div className="form-search mb-3">
        <div
          className="wrapper-search d-flex"
          style={{
            border: "1px solid #9b9b9b99",
            width: "max-content",
            background: "#FFFFFF",
            borderRadius: "15px",
          }}
        >
          <div className="icon mx-3">
            <i className="text-muted bi bi-search"></i>
          </div>
          <div className="form-search">
            <form>
              <input
                type="text"
                style={{
                  outline: "none",
                  border: "none",
                  background: "#FFFFFF",
                  borderRadius: "15px",
                }}
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="table-show-products">
        <table
          className="w-100"
          style={{
            border: "1px solid #9b9b9b99",
            width: "max-content",
            background: "#FFFFFF",
            borderRadius: "15px",
          }}
        >
          <tr className="row mx-3 mt-3">
            <th className="col-8 text-muted">Product Name</th>
            <th className="col-2 text-muted">Price</th>
            <th className="col-2 text-muted">Stock</th>
          </tr>

          {/* data */}
          <tr className="row mx-3 mt-3" style={{borderBottom:"2px solid #D4D4D4 "}}>
            <td className="col-8 text-muted">
              <div className="product-name">Mens formal Suit</div>
              <div className="img-review">
                <img src={mensFormalSuit} alt="mens formal suit" />
              </div>
            </td>
            <td className="col-2 text-muted">
              $ <span>50.0</span>
            </td>
            <td className="col-2 text-muted">5000</td>
          </tr>

          <tr className="row mx-3 mt-3" style={{borderBottom:"2px solid #D4D4D4 "}}>
            <td className="col-8 text-muted">
              <div className="product-name">Mens formal Suit</div>
              <div className="img-review">
                <img src={mensFormalSuit} alt="mens formal suit" />
              </div>
            </td>
            <td className="col-2 text-muted">
              $ <span>50.0</span>
            </td>
            <td className="col-2 text-muted">5000</td>
          </tr>
          {/* data */}
        </table>
      </div>
    </>
  )
}

export default Archived