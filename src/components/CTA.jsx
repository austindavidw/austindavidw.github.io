import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";

const CTA = () => {
  const [toSend, setToSend] = useState({
    from_fName: "",
    from_lName: "",
    reply_to: "",
    call_to: "",
    message: "",
  });

  const [sent, setSent] = useState("Send");

  function onSubmit(event) {
    event.preventDefault();
    send("service_1avhg7p", "template_8ysjapk", toSend, "ggvBWXa-vkfdhLNSM")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })

      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      from_fName: "",
      from_lName: "",
      reply_to: "",
      call_to: "",
      message: "",
    });
    setSent("Message Sent!");
  }

  function handleClick() {
    setSent("Send");
  }

  function handleChange(event) {
    setToSend({
      ...toSend,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <hr class="my-5" />
      <section class="mb-5">
        <h4 class="mb-5 text-center">
          <strong>Send me a message!</strong>
        </h4>

        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <form onSubmit={onSubmit} id="CTA">
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="firstName"
                      name="from_fName"
                      class="form-control"
                      onChange={handleChange}
                      value={toSend.from_fName}
                      onClick={handleClick}
                      required
                    />
                    <label class="form-label" for="firstName">
                      First name
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="lastName"
                      class="form-control"
                      onChange={handleChange}
                      value={toSend.from_lName}
                      name="from_lName"
                      onClick={handleClick}
                      required
                    />
                    <label class="form-label" for="lastName">
                      Last name
                    </label>
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="emailInfo"
                      class="form-control"
                      onChange={handleChange}
                      value={toSend.reply_to}
                      name="reply_to"
                      onClick={handleClick}
                      required
                    />
                    <label class="form-label" for="emailInfo">
                      E-mail
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="phone"
                      class="form-control"
                      onChange={handleChange}
                      value={toSend.call_to}
                      name="call_to"
                      onClick={handleClick}
                    />
                    <label class="form-label" for="phone">
                      Phone Number
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="floatingTextArea"
                  onChange={handleChange}
                  value={toSend.message}
                  name="message"
                  onClick={handleClick}
                  required
                ></textarea>
                <label htmlFor="floatingTextArea">Message</label>
              </div>

              <button type="submit" class="btn btn-dark btn-block mb-4">
                {sent}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
