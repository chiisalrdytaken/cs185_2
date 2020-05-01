import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper


import p1 from '../image2/p01.jpg'
import p2 from '../image2/p02.jpg'
import p3 from '../image2/p03.jpg'
import p4 from '../image2/p04.jpg'
import p5 from '../image2/p05.jpg'
import p6 from '../image2/p06.jpg'
import p7 from '../image2/p07.jpg'
import p8 from '../image2/p08.jpg'


 
function MyComponent() {
  return (
    <div className="MyComponent">
          
      <SRLWrapper>
            <img src={p1} alt="185"/>
			<img src={p2} alt="185"/>
			<img src={p3} alt="185"/>
			<img src={p4} alt="185"/>
			<img src={p5} alt="185"/>
			<img src={p6} alt="185"/>
			<img src={p7} alt="185"/>
			<img src={p8} alt="185"/>
      </SRLWrapper>
    </div>
  );
}
 
export default MyComponent;
