import React from 'react';
import "./Home.css";
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            </div>

            <div className="home__row">
                <Product 
                    id="567216"
                    title="Harry Potter and the Philosopher's Stone"
                    price={4.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="245554"
                    title="Samsung 138 cm (55 Inches) Wondertainment Series Ultra HD LED Smart TV UA55TUE60AKXXL (Titan Gray) (2020 model)"
                    price={724.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71Gp8RVxmhL._SL1500_.jpg"
                />

            </div>

            <div className="home__row">
                <Product 
                    id="975212"
                    title="American Tourister Casual Backpack"
                    price="13.99"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71+xfz79pWL._UL1500_.jpg" 
                />
                <Product 
                    id="863255"
                    title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Pitch Black)"
                    price="39.49"
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg"
                />
                <Product 
                    id="085435"
                    title="OnePlus Bullets in Ear Wireless Z Bass Edition with Mic (Reverb Red)"
                    price="8.99"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg"
                />

            </div>

            <div className="home__row">
                <Product 
                    id="643168"
                    title="Redmi 164 cm (65 inches) 4K Ultra HD Android Smart LED TV X65|L65M6-RA (Black) (2021 Model)"
                    price="2499.99"
                    rating={5}
                    image="https://media.cnn.com/api/v1/images/stellar/prod/210909082910-amazon-fire-tv-omni-lead-2.jpg?q=x_0,y_0,h_968,w_1720,c_fill/h_720,w_1280"
                />

            </div>

            <div>
            <div className="home__row">
                <Product
                    id="878421"
                    title="Apple iPhone 13 Pro Max (128GB) - Silver"
                    price="999.99"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61D84NtVgVL._SL1500_.jpg"
                />

                <Product
                    id="673822"
                    title="Samsung S21 Ultra 5G with Snapdragon 888 (Phantom Black, 16GB RAM, 512GB Storage)"
                    price="1049.99"
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81kfA-GtWwL._SL1500_.jpg"
                />

            </div>
            </div>


            <div>
            <div className="home__row">
                <Product
                    id="636521"
                    title="SYSKA HT3333K Corded & Cordless Stainless Steel Blade Grooming Trimmer with 60 Minutes Working Time; 10 Length Settings (Black)"
                    price="40.50"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/6129t4+q67L._SL1500_.jpg"
                />

                <Product
                    id="672342"
                    title="Bosch 6 kg 5 Star Touch Control Fully Automatic Front Loading Washing Machine with Heater (WLJ2006OIN,White)"
                    price="298.49"
                    rating={2}
                    image="https://m.media-amazon.com/images/I/71413N1V6ES._SL1500_.jpg"
                />

                <Product
                    id="076822"
                    title="Havells Florence Underlight 1200mm Ceiling Fan (Walnut Black Antique Copper)"
                    price="99.49"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81WcxIy6T7S._SL1500_.jpg"
                />

            </div>
            </div>

            <div>
            <div className="home__row">
                <Product
                    id="867012"
                    title="Prestige PRWO 1.8-2 700-Watts Delight Electric Rice Cooker with 2 Aluminium Cooking Pans"
                    price="22.50"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61fvmjwcxpL._SL1500_.jpg"    
                />
                <Product
                    id="099722"
                    title="zia carpets Modern Soft Shaggy Rugs Fluffy Home Decorative Carpet for Living Room 2-inch Thick Carpet 4 x 6 feet"
                    price="58.99"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/811ggAMZRyL._SL1500_.jpg"
                />
            </div>
            </div>

            
        </div>
    )
}

export default Home
