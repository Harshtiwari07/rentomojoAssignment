// import React from 'react'

// function Footer() {
//   return (
//     <div className="foot">Privacy Policy |&copy; 2022 Harsh Tiwariß.All Rights Reserved.</div>
//   )
// }

// export default Footer




import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
         
  
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/in/tiwariharsh/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/Harshtiwari07' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
         Harsh Tiwari
      
      </div>
    </MDBFooter>
  );
}