import React from "react";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import DropDown2 from "../../components/Dropdown2";
import Review from "../../components/Review";
import { FilterToolbar } from "../../components/FilterToolbar";
import HR from "../../components/HR";
import { ProductCard } from "../../components/ProductCard";
import ProductPreview from "../../components/ProductPreview/ProductPreview";
import { productData } from "../../util/Dummy";
import FAQ from "../../components/FAQ";
import { faqData } from "../../util/FAQs";
export default function Index() {
  return (
    <div className="container-div">
      <FilterToolbar />
      <div className="grid mt-6 gap-x-10 grid-cols-2">
        <ProductPreview />
        <div>
          <h1 className="text-[24px] font-[700]">
            "Adidas" NMD Women Fashion Trending Sneakers Running Sports Shoes
          </h1>
          <div>{/* <DropDown2 label='XL' /> */}</div>
          <div className="flex items-center gap-x-10 mt-7">
            <h1 className="text-[28px] font-[700]">$1,99.99</h1>
            <Button className="text-primary" text="Buy Now" />
            <Button className="bg-primary text-[#fff]" text="Add to cart" />
          </div>
          <HR className="mt-8" />
          <FAQ faqClasses=" lg:grid-cols-1" list={productData} />
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center mt-20 mb-10">
          <h1 className="text-[36px] font-semibold">Related Products</h1>
          <Button text="View All"></Button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Review />
        <div className="pb-40">
          <div className="grid grid-cols-2 items-center pb-10">
            <h1 className="text-[36px] font-[700]">Frequently Asked Questions</h1>
            <HR />
          </div>
          <FAQ list={faqData} />
        </div>
      </div>
    </div>
  );
}
