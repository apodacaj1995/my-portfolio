import React, { Component } from 'react';
import $ from 'jquery';
import Recaptcha from 'react-recaptcha';
// import './App.css';
import './ContactContent.css'


export default class ContactContent extends Component {
    state = { 
        inputEmail: '',
        inputMessage: '',
        inputName: '',
        isCaptchaValid: false,
        isErrorShown: false,
        isFormValid: false,
    }
// to handle visitors interaction with inputs
    handleInput = event => {
    // test for input and length  of the value
        if(event.target.value.length > 0 && event.target.name !== 'inputEmail') {
            this.setState({
                [event.target.name]: event.target.value
        })
    }
// if input is for email addres validate it
if (event.target.name === 'inputEmail') {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (reg.test(String(event.target.value).toLowerCase())) {
            this.setState({
                    [event.target.name]: event.target.value
                })
            }       
        }

}   

// show message in console when recaptcha is loaded
    onCaptchaLoad = () => {
        console.log('Captcha is')
    }
    
    // updates the state after recpatcha validates the visitor
    onCaptchaVerify = (Response) => {
        this.setState({
            isCaptchaValid: true
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()

        // test
        if(this.state.inputEmail.length >0 && this.state.inputName.length > 0 && this.state.inputMessage.length > 0 &&this.state.isCaptchaValid) {
           this.setState ({
                isErrorShown: false,
                isFormValid: true
           })

        //    send the form with ajax
        $.ajax({
            data: this.state,
            type: 'POST',
            url: 'mailer.php',
            success: function(data) {
                console.info(data)
            },
            error: function(xhr , status , err) {
                console.error(status, err.toString())
            }

        })

        // reset state after sending form
        this.setState({
            inputEmail: ' ',
            inputMessage: ' ',
            inputName: '',
            isCaptchaValid: false,
            isErrorShown: false,
            isFormValid: false,
    
        })

            
    } else {
            // error message
            this.setState({
                isErrorShown: true
            })
        }
    }

    render() {
// hello    
        return (
            <div className="contact-page">
                <h1 className="title">Contact</h1>
                <form id="my-form" action="./mailer.php" method="post">
                    <fieldset>
                        <input onChange={this.handleInput} type="text" placeholder="your name" name="inputName" id="inputName" required={true} />
                    </fieldset>

                    <fieldset>
                        <input onChange={this.handleInput} type="email" placeholder="your email" name="inputEmail" id="inputEmail"required={true} />
                    </fieldset>

                    <fieldset>
                        <textarea onChange={this.handleInput} name="inputMessage" placeholder="what you want to tell me" id="inputMessage" required={true} />
                    </fieldset>

                    <fieldset>
                        <Recaptcha
                            id="recaptcha"
                            onloadCallback={this.onCaptchaLoad}
                            sitekey="6Ldg0rgZAAAAAGwoPp0UWdIbNVYBMWOmt4ogfc4Y"
                            render="explicit"
                            verifyCallback={this.onCaptchaVerify}

                        />
                    </fieldset>

                    {this.state.isFormSubmitted && (
                        <fieldset>
                            <p>thank you for contacting jackie! jackie will reply soon!</p>
                        </fieldset>
                    )}

                    {this.state.isErrorShown &&(
                        <fieldset>
                            <p>did you make sure all the fields are filled? please and thank you!</p>
                        </fieldset>
                        
                    )}

                    <fieldset>
                        <button onClick={this.handleFormSubmit} className="button">
                            Send
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }






}
