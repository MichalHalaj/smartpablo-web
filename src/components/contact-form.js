import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  const [state, setState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const intl = useIntl();

  const handleChange = (event) => {
    event.persist();
    setState((s) => ({
      ...s,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    }).then(() => {
      setIsSent(true);
    });
  };

  return !isSent ? (
    <>
      <h3>
        <FormattedMessage id="contact.formSection.form.heading" />
      </h3>
      <form name="contact" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <FormattedMessage id="contact.formSection.form.name.label" />
          </label>
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            type="text"
            className="form-control"
            placeholder={intl.formatMessage({ id: 'contact.formSection.form.name.placeholder' })}
          />
        </div>

        <div className="form-group">
          <label>
            <FormattedMessage id="contact.formSection.form.email.label" />
          </label>
          <input
            onChange={handleChange}
            value={state.email}
            name="email"
            type="email"
            className="form-control"
            placeholder={intl.formatMessage({ id: 'contact.formSection.form.email.placeholder' })}
          />
        </div>
        <div className="form-group">
          <label>
            <FormattedMessage id="contact.formSection.form.subject.label" />
          </label>
          <input
            onChange={handleChange}
            value={state.subject}
            name="subject"
            type="text"
            className="form-control"
            placeholder={intl.formatMessage({ id: 'contact.formSection.form.subject.placeholder' })}
          />
        </div>
        <div className="form-group">
          <label>
            <FormattedMessage id="contact.formSection.form.message.label" />
          </label>
          <textarea
            onChange={handleChange}
            value={state.message}
            name="message"
            placeholder={intl.formatMessage({ id: 'contact.formSection.form.message.placeholder' })}
            className="form-control"
            rows="10"
          ></textarea>
        </div>

        <div className="actions">
          <button type="submit" className="btn btn-primary btn-throbber">
            <FormattedMessage id="contact.formSection.form.button" />
          </button>
        </div>
      </form>
    </>
  ) : (
    <>
      <h3>
        <FormattedMessage id="contact.formSection.form.message.heading" />
      </h3>
      <div className="thank-you text-center">
        <p>
          <FormattedMessage id="contact.formSection.form.message.text" />
        </p>
      </div>
    </>
  );
};

export default ContactForm;
