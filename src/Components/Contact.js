import React, {Component} from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Contact.css";
import avatar from "../assets/mikael.png";
class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="info">
          <img src={avatar}/>
          <div className="social">
            <a href="mailto:mikael@lonn.xyz">mikael@lonn.xyz</a>
            <a hfref="https://www.google.com/maps/place/Gothenburg/">
              <i className="fa fa-map-marker"></i> Gothenburg, Sweden
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/mlonn"><i className="fa fa-github"></i> </a>
            <a href="https://linkedin.com/in/mikaellonn"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
        <form action="https://formspree.io/mikael@lonn.xyz" method="POST">
          <div className="form-control">
            <h2>Name</h2>
            <input type="text" name="name" placeholder="Your name"/>
          </div>
          <div className="form-control">
            <h2>Email</h2>
            <input type="text" name="_replyto" placeholder="Your Email"/>
          </div>
          <div className="form-control">
            <h2>Subject</h2>
            <input  type="text" name="_subject" placeholder="What is your message about?"/>
          </div>
          <div className="form-control">
            <h2>Message</h2>
            <textarea rows="10" name="message" placeholder="What is your message?"/>
          </div>
          <div className="form-control">
            <input className="button" type="submit" value="Send Message"/>
          </div>
          <input type="hidden" name="_next" value="/contact" />
          <input type="text" name="_gotcha" style={{display:"none"}} />
        </form>

      </div>
    )
  }
}
export default Contact;