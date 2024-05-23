import PropTypes from "prop-types";
import React, { useState } from "react";

Tab.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};
function Tab({ label, isActive, onClick }) {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium focus:outline-none ${
        isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
};
function TabPanel({ children, isActive }) {
  return isActive ? <div>{children}</div> : null;
}

Tabs.propTypes = {
  tabs: PropTypes.array,
  product: PropTypes.object,
};
function Tabs({ tabs, product }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-screen-lg mx-auto ">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="px-4">
        {tabs.map((tab, index) => (
          <TabPanel key={index} isActive={index === activeTab}>
            {tab.label === "Description" && (
              <p className="mt-2 text-md uppercase">{product.description}</p>
            )}
            {tab.label === "Shipping" && (
              <div className="mt-2 text-lg">
                <span className="text-bold text-blue-500 mr-2">
                  Shippping Address:
                </span>
                <span className="">{product.address}</span>
              </div>
            )}
            {tab.label === "Vendor Info" && (
              <div className="flex flex-col gap-2 items-start mt-2 text-lg">
                <span className=" text-blue-500">
                  Store Name:
                  <span className="ml-2 text-black">{product.storeName}</span>
                </span>
                <div>
                  <span className="text-bold text-blue-500 mr-2">Vendor:</span>
                  <span className="">{product.vendor}</span>
                </div>
              </div>
            )}
            {tab.label === "Additional Information" && (
              <div className="flex flex-col gap-2 items-start mt-2 text-lg">
                <span className="font-semibold text-gray-700">Dimensions</span>
                <div>
                  <span className=" text-blue-500 mr-2">Width:</span>
                  <span className="">{product.dimensions.width}</span>
                </div>
                <div>
                  <span className=" text-blue-500 mr-2">Height:</span>
                  <span className="">{product.dimensions.height}</span>
                </div>
                <div>
                  <span className=" text-blue-500 mr-2">Depth:</span>
                  <span className="">{product.dimensions.depth}</span>
                </div>
              </div>
            )}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

ProductDescriptionTabs.propTypes = {
  product: PropTypes.object,
};
function ProductDescriptionTabs({ product }) {
  const tabs = [
    { label: "Description", content: "Content of Tab 1" },
    { label: "Shipping", content: "Content of Tab 2" },
    { label: "Additional Information", content: "Content of Tab 3" },
    { label: "Vendor Info", content: "Content of Tab 4" },
    // { label: "More Products", content: "Content of Tab 5" },
  ];

  return <Tabs tabs={tabs} product={product} />;
}

export default ProductDescriptionTabs;
