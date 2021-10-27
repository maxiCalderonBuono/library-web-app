import "./style/OurPartner.css"
//import partner from "../assets/images/partner.png"

export default function OurPartner () {
    return (
        <>
            <section id="our-partner">
                <div>
                    <h3 className="text-cap">Our Charity Partner</h3>
                    <img className= "ourpartner-img" src= "https://i.imgur.com/cLflKfd.png" alt="Partner main logo" /> <br /> 
                    <button className="text-cap"><a href="https://www.cace.org.ar/" target="_blank">Learn more about CACE</a></button>
                </div>
            </section>
        </>
    );
}