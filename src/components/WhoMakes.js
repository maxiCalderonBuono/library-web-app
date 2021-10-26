import "./style/WhoMakes.css"
//import libros2 from '../assets/images/libros2.jpg'

export default function WhoMakes () {
    return (
        <>
            <section className= 'who-makes'>
                <div className="box1">
                        <h2 className="text-cap">Who writes <span className="color-change">your books</span></h2>
                        <p>Our mission is to empower every local writers across Latin America.  Why? </p>
                        
                        <ul>
                            <li>Because it connects us to the land we live on, and to the people who live here.</li>
                            <li>Because it’s more meaningful to cook and eat something made by a person nearby than by some distant corporation</li>
                            <li>Because good local food makes our corner of the world a better place to live</li>
                            <li>Because it supports local jobs</li>
                            <li>Because it makes more sense for the environment</li>
                        </ul>
                        <button className="text-cap"><a href="#">Learn more about</a></button>
                </div>
                <div className="box2">
                <img src= "https://i.imgur.com/UJ3SvfG.jpg" alt="libros" className="image"/>
                </div>
            </section>
        </>
    );
}