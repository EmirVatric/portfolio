import React from "react";
import "./Contact.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "" };
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div className="formWrapper">
          <div className="block">
            <h1 className="headingContact">CONTACT ME</h1>
            <h3>via email</h3>
            <form className="test-mailing">
              <div>
                <div className="group">
                  <input
                    type="text"
                    id="name"
                    className="input"
                    onChange={this.handleChangeName}
                    required
                    value={this.state.name}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
                </div>

                <div className="group">
                  <input
                    type="email"
                    id="email"
                    className="input"
                    onChange={this.handleChangeEmail}
                    required
                    value={this.state.email}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Email</label>
                </div>

                <div className="group">
                  <input
                    id="test-mailing"
                    name="test-mailing"
                    className="message"
                    onChange={this.handleChangeMessage}
                    required
                    value={this.state.feedback}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Write me a message</label>
                </div>
              </div>
              <input
                type="button"
                value="Submit"
                className="btn btn-1"
                onClick={this.handleSubmit}
              />
            </form>
          </div>
          <div className="block2">
            <blockquote className="ludwig">
              Web design is not just about creating pretty layouts. It’s about
              understanding the marketing challenge behind your business.
            </blockquote>
          </div>
        </div>
      </div>
    );
  }

  handleChangeMessage(event) {
    this.setState({ feedback: event.target.value });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "contactme";

    this.sendFeedback(templateId, {
      message: this.state.feedback,
      name: this.state.name,
      email: this.state.email
    });
  }

  sendFeedback(templateId, variables) {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      alert("Please fillout all fields!");
    } else {
      window.emailjs
        .send("gmail", templateId, variables)
        .then(res => {
          this.setState({ feedback: "" });
          this.setState({ name: "" });
          this.setState({ email: "" });
          alert("Thank you for sending me a message!");
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err =>
          console.error(
            "Oh well, you failed. Here some thoughts on the error that occured:",
            err
          )
        );
    }
  }
}
