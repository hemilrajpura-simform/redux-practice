import React from 'react';

const Home = (props) => {
    console.log("props", props);
    return (

        <div>
            <div className='add-to-car'>
                <img alt='' src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/cart-add-icon.png" />
            </div>
            <h1>Home</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWEDaHlLoImFMtPIiXQETC3f2eE-YFZsM-w&usqp=CAU" />
                </div>

                <div className='text-wrapper item'>
                    <span>Oppo a75</span>
                    <span>Price : $1000</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>

            </div>
        </div>

    )
}

export default Home;