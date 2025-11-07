import React from 'react'
// import "../style.css";

export default function Contact(){
    return(
        <section id='contact' className='contact'>
            <h2>Contact us📞</h2>
            <form>
                <input type="text" placeholder='Your Name' /><br />
                <input type="email" placeholder="Your Email✉️" /><br />
                <textarea rows="4" placeholder="Message"></textarea><br />
                <button type='submit'>Send</button>
            </form>
        </section>
    )
}

// export default Contact
