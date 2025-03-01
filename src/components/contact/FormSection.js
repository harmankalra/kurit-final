import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './FormSections.css';

const FormSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    
    const [progress, setProgress] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    
    const handleProgressChange = (e) => {
        const newProgress = parseInt(e.target.value);
        setProgress(newProgress);
        if (newProgress >= 100) {
            triggerSubmitIfReady();
        }
    };
    
    const triggerSubmitIfReady = () => {
        if (isSubmitting || formSubmitted) {
            return;
        }
        
        if (!validateEmail(formData.email)) {
            toast.warn("Please enter a valid email address", { position: "top-center" });
            return;
        }
        
        if (!validatePhone(formData.phone)) {
            toast.warn("Please enter a valid 10-digit phone number", { position: "top-center" });
            return;
        }
        
        const allFieldsFilled = 
            formData.name.trim() !== "" && 
            formData.email.trim() !== "" && 
            formData.phone.trim() !== "" && 
            formData.message.trim() !== "";
            
        if (allFieldsFilled) {
            handleFormSubmit();
        } else {
            setProgress(95);
            toast.warn("Please fill all required fields before submitting", { position: "top-center" });
        }
    };
    
    const handleFormSubmit = async () => {
        if (isSubmitting) return;
        
        setIsSubmitting(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const response = await fetch("https://dasmesh-mailer.ritaz.in/kuritemail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Email sent successfully!", { position: "top-center" });
                setFormData({ name: "", email: "", phone: "", message: "" });
                setProgress(0);
                setFormSubmitted(true);
                setTimeout(() => {
                    setFormSubmitted(false);
                }, 1000);
            } else {
                console.error("Server responded with error:", await response.text());
                toast.error("Error sending email! Please try again.", { position: "top-center" });
                setProgress(95);
            }
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Error sending email! Please check your connection and try again.", { position: "top-center" });
            setProgress(95);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (progress < 100) {
            toast.info("Please drag the slider to 100% to send", { position: "top-center" });
            return;
        }
        
        triggerSubmitIfReady();
    };

    return (
        <div className="formS">
            <ToastContainer />
            <div className="formStart">
                <div className="formHead" data-aos="zoom-in-right">
                    <p className="fh">Let's Build Your Real Estate Future Together!</p>
                    <p className="fp">Fill out the form below, and our experts will get back to you soon</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="formLower">
                        <div className="formInputs" data-aos="zoom-in-right">
                            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
                            <input type="number" placeholder="Phone No." name="phone" value={formData.phone} onChange={handleChange} required />
                            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                            <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                            
                            <div className="progressBarContainer">
                                <label htmlFor="formProgress" className="progressLabel">
                                    {isSubmitting ? "Sending..." : progress < 100 ? "Drag to Send →" : "Sending..."}
                                </label>
                                <input 
                                    id="formProgress"
                                    type="range" 
                                    min={0} 
                                    max={100} 
                                    value={progress} 
                                    onChange={handleProgressChange} 
                                    className={`progressBar ${isSubmitting ? 'sending' : ''}`} 
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            {isSubmitting && (
                                <div className="formLoader">
                                    <div className="spinner"></div>
                                </div>
                            )}
                        </div>

                        <div className="formMap" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3423.9427500942074!2d75.8031968!3d30.8882625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8181f5f9ef23%3A0xaca3c50f2aaaaf2b!2sBhai%20Randhir%20Singh%20Nagar%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1740221015133!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="iframe"></iframe>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormSection;
