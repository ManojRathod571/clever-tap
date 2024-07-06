import clevertap from "clevertap-web-sdk";
import "./App.css";
// import ClevertapReact from "clevertap-react";

function App() {
  clevertap.onUserLogin.push({
    Site: {
      Name: "Vinod Rathod", // String
      Identity: 1230, // String or number
      Email: "vinod@gmail.com", // Email address of the user
      Phone: "+14155551234", // Phone (with the country code)
      Gender: "M", // Can be either M or F
      DOB: new Date(), // Date of Birth. Javascript Date object
    },
  });

  clevertap.profile.push({
    Site: {
      Name: "Vinod Rathod", // String
      Identity: 1230, // String or number
      Email: "vinod@gmail.com", // Email address of the user
      Phone: "+14155551234", // Phone (with the country code)
      Gender: "M", // Can be either M or F
      DOB: new Date(), // Date of Birth. Javascript Date object
    },
  });

  const handleClick = () => {
    clevertap.event.push("Product viewed", {
      "Product name": "Puma shoes",
      Category: "Mens Accessories",
      Price: 5999,
      Date: new Date(),
    });
    console.log("CleverTap Explore");
  };

  const handleClick1 = () => {
    clevertap.event.push("Strategy Subscribed", {
      "Strategy Name": "Casio Watch ",
      price: "100",
    });
    console.log("CleverTap Subscribe");
  };

  return (
    <div className="App">
      <h1>This is a test project for testing purposes</h1>
      <button onClick={() => handleClick()}>CleverTap Explore</button>
      <button onClick={() => handleClick1()}>CleverTap Subscribe</button>
    </div>
  );
}

export default App;
