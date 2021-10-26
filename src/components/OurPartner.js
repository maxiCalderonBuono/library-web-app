import "./style/OurPartner.css"
import partner from '../assets/images/partner.png'

export default function OurPartner () {
    return (
        <>
            <section id="our-partner">
                <div>
                    <h3 className="text-cap">Our Charity Partner</h3>
                    <img src= {partner} alt="Partner main logo" /> <br /> 
                    <button className="text-cap"><a href="#">Learn more about CACE</a></button>
                </div>
            </section>
        </>
    );
}