import React from "react";
import "./style/Content-s2.css";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import BookSlides from './BookSlides'
 
/*<BooksGrid onAdd={onAdd} />*/

function Content({ onAdd }) {
  return (
    <div>
      <section class="lastest-offers" id="lastest-offers">
        <div className="containertitle-s2">
          <h2 className="text-cap">
            Lastest <span className="color-change">Offers</span>
          </h2>
        </div>
        
        <BookSlides onAdd= {onAdd} />
       
      </section>

      <section className="why-choose-us" id="why-choose-us">
        <div className="container2title-s2">
          <h2 className="text-cap">
            Why Choose <span className="color-change">Us?</span>
          </h2>
        </div>

        <div className="container2-s2">
          <div className="box1-s2">
            <p className="box-title-s2">
              {" "}
              <AiOutlineBook size={40} />
            </p>
            <p className="box-content-s2">
              {" "}
              As an independent bookstore, we strive to offer the same variety
              and richness of experience as the books on our shelves.
            </p>
          </div>
          <div className="box2-s2">
            <p className="box-title-s2">
              {" "}
              <AiOutlineShop size={40} />
            </p>
            <p className="box-content-s2">
              {" "}
              We keep up to date with the best new books, timely features, and
              special offers.
            </p>
          </div>
          <div className="box3-s2">
            <p className="box-title-s2">
              {" "}
              <AiOutlineTeam size={40} />
            </p>
            <p className="box-content-s2">
              {" "}
              The only people we’re beholden to are our customers and ourselves,
              we can focus on what really matters — bolstering the great
              community of readers and authors we’re lucky to be a part of.
            </p>
          </div>
          <div className="box4-s2">
            <p className="box-title-s2">
              {" "}
              <AiOutlineHome size={40} />
            </p>
            <p className="box-content-s2">
              Your choice sustains a family business, and allows us to follow
              our passion for getting the right books into the right hands, 365
              days a year.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
