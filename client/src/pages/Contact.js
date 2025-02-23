import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout title={"Contact us - Shop Antique"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://www.honeywellbuildings.in/assets/images/tech_support.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : <Link to='https://mail.google.com'>  www.shopantique.com</Link> /  <Link to='https://mail.google.com'> rishi.ram@somaiya.edu </Link>
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 022-69462900
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
        <div>
          <form>
            <h1>FeedBack Form or Questions </h1>
            <input type="text" placeholder="Enter email"></input><br></br>
            <input type="text" placeholder="FAQ's and Queries"></input><br></br><br></br>
            <button onClick={()=> window.location.reload()} >Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
