import { useRef } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
    location: string;
    namePlaceholder: string;
    contactPlaceholder: string;
    messagePlaceholder: string;
}

const ContactForm = ({ location, namePlaceholder, contactPlaceholder, messagePlaceholder }: ContactFormProps) => {
    const form = useRef<HTMLFormElement>(null);
    emailjs.init("xfbPdiVD70qK8vTY3");
    const serviceId = "service_g63duhk";
    const templateId = "template_gmt1yl4";

    // Form submission
    const sendEmail = async (e: any) => {
        e.preventDefault();
        const form = e.target;

        form.location.value = location;

        // Form validation
        function validateMessage() {
            if (form && (!form.message.value || !form.contact.value)) {
                console.log(
                    "Please fill out all required information before sending your message.",
                );
                return false;
            }
            return true;
        }

        if (validateMessage()) {
            try {
                const sendResult = await emailjs.sendForm(
                    serviceId,
                    templateId,
                    form
                );
                console.log(
                    "SUCCESS",
                    sendResult.status,
                    sendResult.text,
                );
                console.log(
                    "Your message has been sent successfully. Thank you!",
                );

                form.reset();
            } catch (error: any) {
                console.error("FAILED", error);
                console.log(
                    "Something seems to have gone wrong. Please try again or email me directly. \nError: " +
                    (error.text || "Check console"),
                );
            }
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col self-end text-sm p-6 bg-off-white rounded-[8px]">
            <input
                type="text"
                name="location"
                className="hidden"
            />
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder={namePlaceholder}
                name="name"
                autoComplete="++++++"
                className="py-2 px-3 w-full bg-white rounded-[8px] border mt-2 mb-6"
            />
            <label htmlFor="contact">Contact*</label>
            <input
                type="text"
                placeholder={contactPlaceholder}
                name="contact"
                autoComplete="email tel"
                className="py-2 px-3 w-full bg-white rounded-[8px] border mt-2 mb-6"
            />
            <label htmlFor="message">Message*</label>
            <textarea
                placeholder={messagePlaceholder}
                name="message"
                className="py-2 px-3 w-full h-20 bg-white rounded-[8px] border resize-none mt-2 mb-6"
            >
            </textarea>
            <input
                type="submit"
                value="send"
                className="w-full py-2 px-3 rounded-[20px] border bg-font-secondary text-font uppercase"
            />
        </form>
    );
};

export default ContactForm;