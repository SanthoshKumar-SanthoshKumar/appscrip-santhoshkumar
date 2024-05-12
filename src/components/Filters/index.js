import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import './style.css'

const Filters = () => {
  return (
    <div className="filters-container">
      <div className="custom-heading-container">
         <input for ="customizble" type="checkbox" />
         <lable id="customizble">CUSTOMIZBLE</lable>
      </div>
     <div className="custom-category">
      <div className="title">
        <p>IDEAL FOR</p>
        <p><IoIosArrowUp /></p>
      </div>
       <h3>All</h3>
      <h5>UnselectAll</h5>
      <div className="values">
        <div className="check-category-type">
          <input type="checkbox" for="value"/>
          <label id="value">Men</label>
        </div>
        <div className="check-category-type">
          <input type="checkbox" for="value"/>
          <label id="value">Women</label>
        </div>
        <div className="check-category-type">
          <input type="checkbox" for="value"/>
          <label id="value">baby& Kids</label>
        </div>
      </div>
       </div>
      <div className="custom-category">
      <div className="title">
        <h4>OCCASION</h4>
        <h6><IoIosArrowUp /></h6>
      </div>
      <h3>All</h3>
      </div>
      <div className="custom-category">
      <div className="title">
        <h4>WORK</h4>
        <h6><IoIosArrowUp /></h6>
      </div>
      <h3>All</h3>
      </div>
      <div className="custom-category">
      <div className="title">
        <h4>FABRIC</h4>
        <h6><IoIosArrowUp /></h6>
      </div>
      <h3>All</h3>
      </div>
      <div className="custom-category">
      <div className="title">
        <h4>SEGMENT</h4>
        <h6><IoIosArrowUp /></h6>
      </div>
      <h3>All</h3>
      </div>
      <div className="custom-category">
      <div className="title">
        <h4>SUITABLE FOR</h4>
        <IoIosArrowUp />
      </div>
      <h3>All</h3>
      </div>
      <div className="custom-category">
      <div className="title">
        <h4>RAW MATERIALS</h4>
        <h6><IoIosArrowUp /></h6>
      </div>
      <h3>All</h3>
      </div>
      <div className="custom-category">
      <div className="title">
        <h4>PATTERNS</h4>
        <h6><IoIosArrowUp /></h6>
      </div>
      <h3>All</h3>
      </div>
    </div>
  );
};

export default Filters;
