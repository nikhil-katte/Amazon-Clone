import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
                    
                />
            </div>
            <div className="home__row">
                
                <Product
                    id="87945321"
                    title="NCERT Solutions Mathematics 12th"
                    price={205}
                    image={'data:image/webp;base64,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'}
                    rating={5}>
                </Product>
                <Product
                     id="87945327"
                    title="Amazon Brand - Symbol Men's Solid Regular Fit Half Sleeve Cotton T-Shirt"
                    price={250}
                    image={'https://m.media-amazon.com/images/I/814YD9ymRKL._AC_UL480_FMwebp_QL65_.jpg'}
                    rating={4}>
                </Product>


             </div>
            <div className="home__row">
                <Product
                     id="87965321"
                    title="All-new Echo (4th Gen) | Premium sound powered by Dolby and Alexa (Black)"
                    price={7999}
                    image={'https://images-eu.ssl-images-amazon.com/images/I/51jE0vvxulL._AC_US327_FMwebp_QL65_.jpg'}
                    rating={5}>

                </Product>
                <Product
                     id="86945321"
                    title="Redmi Note 9 Pro Max (Aurora Blue, 6GB RAM, 64GB Storage)- 64MP Quad Camera & Latest 8nm"
                    price={15998}
                    image={'https://m.media-amazon.com/images/I/51HfbNSrA6L.__AC_SY200_.jpg'}
                    rating={5}>

                </Product>
                <Product
                     id="97945321"
                     title="Mivi Duopods M40 True Wireless Bluetooth Earbuds with Studio Sound, Powerful Bass, 24 Hours of Battery and EarPods with Touch Control- Carmine"
                     price={15998}
                     image={'https://images-na.ssl-images-amazon.com/images/I/71NUOyUmV1L._SL1500_.jpg'}
                     rating={5}>

                </Product>
            </div>
            <div className="home__row">
                <Product
                     id="87945621"
                    title="LG 23.8 inch (60.45 cm) Borderless LED Monitor - Full HD, IPS Panel with VGA, HDMI, Audio in/Out Ports and in-Built Speakers - 24MP88HV (Silver/White)"
                    price={13499}
                    image={'https://images-na.ssl-images-amazon.com/images/I/81rpK20lAtL._SL1500_.jpg'}
                    rating={5}>
                    
                    </Product>
          </div>
        </div>
    )
}

export default Home
