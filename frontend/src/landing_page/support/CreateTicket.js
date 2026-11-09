
import React from "react";

function CreateTicket() {
  const topics = [
    {
      icon: "fa-plus-circle",
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      icon: "fa-user",
      title: "Your Zerodha Account",
      links: [
        "Login Credentials",
        "Account Modification and Segment Addition",
        "DP ID and bank details",
        "Your Profile",
        "Transfer and conversion of shares",
      ],
    },
    {
      icon: "fa-bar-chart",
      title: "Your Zerodha Account",
      links: [
        "Margin/leverage, Product and Order types",
        "Kite Web and Mobile",
        "Trading FAQs",
        "Corporate Actions",
        "Sentinel",
        "Kite API",
        "Pi and other platform",
        "Stockreports+",
        "GTT",
      ],
    },
    {
      icon: "fa-credit-card",
      title: "Funds",
      links: [
        "Adding Funds",
        "Fund Withdrawal",
        "eMandates",
        "Adding Bank Accounts",
      ],
    },
    {
      icon: "fa-circle-o",
      title: "Console",
      links: [
        "Reports",
        "Ledger",
        "Portfolio",
        "60 Day Challenge",
        "IPO",
        "Referral Program",
      ],
    },
    {
      icon: "fa-circle-o",
      title: "Coin",
      links: [
        "Understanding Mutual Funds",
        "About Coin",
        "Buying and Selling",
        "Starting an SIP",
        "Managing your Portfolio",
        "Coin App",
        "Moving to Coin"
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-3 mt-5 mb-4">
        <h1 className="fs-2">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      <div className="row">
        {topics.map((topic, index) => (
          <div
            className="mt-3 col-lg-4 col-md-6 col-12 px-4 px-md-5 mb-4"
            key={index}
          >
            <h4 className="mb-4">
              <i
                className={`fa ${topic.icon} me-2`}
                aria-hidden="true"
              ></i>
              {topic.title}
            </h4>

            <div className="d-flex flex-column align-items-start">
              {topic.links.map((link, linkIndex) => (
                <a
                  href="#"
                  key={linkIndex}
                  onClick={(e) => e.preventDefault()}
                  className="text-decoration-none mb-3"
                  style={{ lineHeight: "1.6" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
