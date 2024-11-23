import React from 'react'
import Home from './Home';
import Products from './Products';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import img1 from "./imagecard/img1.jpg"
import img2 from "./imagecard/img2.jpg"
import img3 from "./imagecard/img3.jpg"
import img4 from "./imagecard/th.jpg"

function Monsite () {
 return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Mac' element={<Products src={img1} title='Macbook air' description={'Ce Mac est rapide et performant'} prix={8700} />} />
        <Route path='/Hp' element={<Products src={img4} title='Hp' description={'Ce PC est fiablet durable'} prix={6500} />}  />
        <Route path='/Lenovo' element={<Products src={img3} title='Lenovo' description={'Ce Lenovo est rapide et performant'} prix={4700} />}  />
        <Route path='/Dell' element={<Products src={img2} title='Dell' description={'Ce Dell est rapide et performant'} prix={7700} />}  />
    </Routes>
    </BrowserRouter>
 )

}
export default Monsite
