import  React, {useState} from 'react';
import { useFormik  } from "formik";
import './Register.css';
import image from '../image.PNG';
import { useHistory } from "react-router-dom";

export default function Register(){
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const [submitted,setSubmitted] = useState(false);
    const history = useHistory();
    const validate = values => {
        const errors = {};
     
        if (!values.name) {
          errors.name = 'Required';
        } 
      
        if (!values.emailId) {
          errors.emailId = 'Required';
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailId)){
            errors.emailId = 'Enter valid emailId';
        }
      
        if (!values.password) {
          errors.password = 'Required';
        } 

        if (!values.phoneNo) {
            errors.phoneNo = 'Required';
          } else if(!phoneRegExp.test(values.phoneNo)){
            errors.phoneNo = 'Enter valid phone number'
          }
      
        return errors;
      };

      const formik = useFormik({
        initialValues: {
          name: '',
          emailId: '',
          password: '',
          phoneNo:''
        },
        validate,
        onSubmit: values => {
          setSubmitted(true);
          setTimeout(()=>{
            history.push('/home');
          },100)
        },
      });

    return (<div className="parent">
        <form  onSubmit={formik.handleSubmit}>
        <img src={image}/>
        <input placeholder="YOUR NAME" name="name" id="name"   onBlur={formik.handleBlur} onChange={formik.handleChange}
         value={formik.values.name}/>
 { formik.errors.name && formik.touched.name? <div className="form-error">{formik.errors.name}</div> : null}
        <input placeholder="EMAIL" type="email"  onBlur={formik.handleBlur} name="emailId" id="emailId"  onChange={formik.handleChange}
         value={formik.values.emailId}/>
        {formik.errors.emailId && formik.touched.emailId ? <div className="form-error">{formik.errors.emailId}</div> : null}
        <input placeholder="PASSWORD" type="password" onBlur={formik.handleBlur} name="password" id="password"  onChange={formik.handleChange}
         value={formik.values.password}/>
       {formik.errors.password && formik.touched.password ? <div className="form-error">{formik.errors.password}</div> : null}
        <input placeholder="PHONE" name="phoneNo"  onBlur={formik.handleBlur} id="phoneNo"  pattern="/[2-9]{2}\d{8}/"  onChange={formik.handleChange}
         value={formik.values.phoneNo}/>
       {formik.errors.phoneNo && formik.touched.phoneNo ? <div className="form-error">{formik.errors.phoneNo}</div> : null}
        <div className="buttons">
            <button className="reset" onClick={formik.handleReset}> RESET</button>
            <button className="register" type="sublit" onClick={formik.handleSubmit}> REGISTER</button>
            
        </div>
       {submitted && <div className="success"> YOU ARE VALID USER </div>}
        </form>
    </div>
    )
}