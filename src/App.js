
import './App.css';
function App() {
const loadScript =(src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const displayRazorpay = async(amount)=>{
  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );
    if (!res) {
      alert("Razorpay SDK failed to load...");
      return;
    }
    const options = {
      key: "rzp_test_9rNfj5yBcD31y1",
      currency: "INR",
      amount: amount*100,
      name: "buyBold",
      description: "Test Wallet Transaction",
      image: "https://images.search.yahoo.com/images/view;_ylt=AwrjYnLJVGFjwksDTx6JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzFlMmZiMGZlY2U2NGM2NGI2MzI3ZWU2YmJkNGY5NjRiBGdwb3MDMjAEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%26type%3DE211US885G91645%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D20&w=742&h=1116&imgurl=www.health.qld.gov.au%2F__data%2Fassets%2Fimage%2F0029%2F457652%2F0281.jpg&rurl=https%3A%2F%2Fwww.health.qld.gov.au%2Fstayonyourfeet%2Fimage_library%2Fmedication&size=214.3KB&p=image&oid=1e2fb0fece64c64b6327ee6bbd4f964b&fr2=piv-web&fr=mcafee&tt=Queensland+Stay+On+Your+Feet%C2%AE+-+Image+library+%7C+Queensland+Health&b=0&ni=21&no=20&ts=&tab=organic&sigr=XhRp2DQLGp49&sigb=nEbd203EGhsA&sigi=arBoCh3InVta&sigt=k0wbg4TmMQpE&.crumb=aBnZgg57KKU&fr=mcafee&fr2=piv-web&type=E211US885G91645",
      
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "buyBold",
        email: "123abc@gmail.com",
        contact: "6206593821",
      },
    };  
    const paymentObject = new window.Razorpay(options)
    paymentObject.open() 
  }
const price="50";
  return (
    
    <div className="App">
      <button className="App-link" onClick={() => displayRazorpay(price)}>
        Pay Now
      </button>
    </div>
  );
}

export default App;