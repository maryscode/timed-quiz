import React, { useState } from "react";
import { Container, DefaultButton } from "../../components";
import { UsaStates }  from "../../data/usa-states";
import { countries }  from "../../data/countries";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import styles from './Register.module.css';

function Register(props) {
    const [shake, setShake] = useState(false); 

    const animate = (e) => {
        setShake(true);
        setTimeout(() => setShake(false), 800);
    }


    return (
        <Container hideISI id={styles['formContainer']} className="screen" >
            <h1 className="text-yellow">enter your information</h1>            
            <Formik
            // validateOnChange={false}
            // validateOnBlur={false}
            initialValues={{
                firstName: '',
                lastName: '',
                state: '',
                country: 'USA',
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15)
                  .required(),

                lastName: Yup.string()
                  .max(1)
                  .required(),
            })}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                // alert(JSON.stringify(values, null, 2));
                
                props.history.push({
                    pathname: '/loading', 
                    state: values
                });                
            }}
            >
                {props => (
                <Form>
                    <div className={styles.row}>
                        <div>
                            <label>First Name</label>
                            <Field id={styles['firstName']} name="firstName" />
                            <span className={styles.required}>MANDATORY</span>
                        </div>
                        <div>
                            <label>Last Initial</label>
                            <Field id={styles['lastName']} name="lastName" maxLength="1" />
                            <span className={styles.required}>MANDATORY</span>
                        </div>                    
                    </div>
                    
                    <div className={styles.row}>
                        <div className={styles.state}>
                            {props.values.country === "USA" ? (
                            <>
                                <label>State</label>
                                <Field
                                    name="state"
                                    as="select"
                                    id={styles['state']}
                                >
                                    <option value=''></option>
                                    {UsaStates.map((option, index) => (
                                        <option value={option.abbreviation} key={`usastate-${index}`}>{option.name}</option>
                                    ))}
                                    {/* <script>
                                        ELECTRON_STATE_LIST.map(option => (
                                            document.write(`<option value=${option.abbreviation}>${option.name}</option>`)
                                        ) );
                                    </script> */}
                                </Field>                                
                            </>
                            ) : props.values.state = ""}
                        </div>                      

                        <div>
                            <label>Country</label>
                            <Field 
                                id={styles['country']} 
                                name="country" 
                                as="select" 
                            >   
                                {countries.map(option => (
                                   <option value={option.alpha3} key={`country-${option.countryCode}`}>{option.name}</option>
                                ))}
                            </Field>
                            <span className={styles.required}>MANDATORY</span>  
                        </div>      

                                    
                    </div>               
                    
                    {!props.dirty || !props.isValid ? (
                        <DefaultButton btnType="button" btnText="SUBMIT" arrow onClick={animate} customClass={`${shake ? styles.shake : 'no-style'}`} />  
                    ) : (
                        <DefaultButton btnType="submit" btnText="SUBMIT" arrow />  
                    )}
                </Form>
                )}
            </Formik>
        </Container>
    )
}

export { Register }