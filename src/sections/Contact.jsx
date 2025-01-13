import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRef } from "react"

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    // service_q7zcxia
    // template_5lhjvgc
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_q7zcxia',
                'template_0ihvthn',
                {
                    from_name: form.name,
                    to_name: 'TrialVest',
                    from_email: form.email,
                    to_email: 'harshaero.teamkartkgp@gmail.com',
                    message: form.message
                },
                'ZaVJmdFqfELhyLUAG'
            );

            setLoading(false);

            alert("Your message has been sent!");

            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong!");
        }
    }

  return (
    <section className="c-space my-20 mb-100" id="contact">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img
                src={`${import.meta.env.BASE_URL}/images/terminal.png`}
                alt="terminal bg"
                className="absolute inset-0 min-h-screen"
            />
            <div className="contact-container">
                <h3 className="head-text">
                    Have more <span className="text-p3">questions?</span> <br /> Let's connect.
                </h3>
                <p className="text-lg text-white-600 mt-3">
                    Our expert team will clear all your doubts with utmost transparency and clarity.
                </p>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col space-y-7"
                >
                    <label className="space-y-3">
                        <span className="field-label">
                            Full Name
                        </span>

                        <input 
                            type="text" 
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="John Doe"
                        />
                    </label>

                    <label className="space-y-3">
                        <span className="field-label">
                            Email
                        </span>

                        <input 
                            type="email" 
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="abc@example.com"
                        />
                    </label>

                    <label className="space-y-3">
                        <span className="field-label">
                            Your Query
                        </span>

                        <textarea 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hi, I want to ..."
                        />
                    </label>

                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Us Your Query' }

                        {!loading && <img src={`${import.meta.env.BASE_URL}/images/arrow-up.png`} alt="arrow" className="field-btn_arrow" />}
                    </button>
                </form>
            </div>
        </div>
        
    </section>
  )
}

export default Contact