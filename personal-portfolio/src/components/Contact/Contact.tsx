import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { Snackbar, Alert, AlertColor } from '@mui/material';
import myCV from '../../assets/TodorSavovResume.pdf';
import './Contact.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Message is required")
});

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const serviceID = 'service_0fq6m6l';
const templateID = 'template_3sxhdud';
const userID = 'iqbiKjvDE_KkKD976';

const Contact = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor|undefined>('success');

    const initialValues: FormValues = {
        name: '',
        email: '',
        message: ''
    };
  
    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { name, email, message } = values;
 
        try {
            const response = await emailjs.send(serviceID, templateID, { name, email, message }, userID);
            console.log('Email sent successfully:', response.status, response.text);            
            setSnackbarMessage('Message sent successfully!');
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
        } catch (error) {
            console.error('Failed to send the email:', error);            
            setSnackbarMessage('Failed to send the message. Please try again later.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        } finally {
            actions.setSubmitting(false);
            actions.resetForm();
        }
    };

  return (
        <motion.div
            initial={{ opacity: 0, scale: 0.1, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }} transition={{ duration: 3 }}
            style={{ position: 'relative', zIndex: 1 }}
        >
            <div className="contact-container">
                <div className="contact-row">
                    <div className="contact-left">
                        <p>I'm open to new opportunities! If you're looking to hire a dedicated front-end developer, feel free to reach out to discuss potential collaborations.</p>

                        <div className="social-icons">
                            <a href="https://github.com/todor-savov" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>

                            <a href="https://www.linkedin.com/in/todor-savov-4a14253b/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>

                            <a href="mailto:todor.savov@abv.bg">
                                <i className="fas fa-envelope"></i>
                                <span>Email</span>
                            </a>

                            <a href={myCV} download>
                                <i className="fas fa-file-download"></i>
                                <span>CV</span>
                            </a>
                        </div>
                    </div>

                    <div className="contact-right">
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {({ isSubmitting }) => (
                                <Form className="contact-form">
                                    <div className="field-container">
                                        <label htmlFor="name">Name</label>
                                        <Field name="name" type="text" />
                                        <ErrorMessage name="name" component="div" className="error" />
                                    </div>

                                    <div className="field-container">
                                        <label htmlFor="email">Email</label>
                                        <Field name="email" type="email" />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </div>

                                    <div className="field-container">
                                        <label htmlFor="message">Message</label>
                                        <Field name="message" as="textarea" rows="5" />
                                        <ErrorMessage name="message" component="div" className="error" />
                                    </div>

                                    <button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>                            
                                </Form>
                            )}
                        </Formik>
                        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                            <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ fontWeight: 'bold' }}>
                                {snackbarMessage}
                            </Alert>
                        </Snackbar>         
                    </div>
                </div>
            </div>
        </motion.div>
  );
};

export default Contact;