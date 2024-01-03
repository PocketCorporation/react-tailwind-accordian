import React from 'react';
import Accordian, { AccordianItem } from './components/Accordian';

const App = () => {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <Accordian className='max-w-lg'>
        <AccordianItem value='1' trigger='Accordian Item 1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat a illum est sint corporis id veniam necessitatibus nulla doloribus alias architecto, quia excepturi ad voluptas? Ut eius temporibus porro.
        </AccordianItem>
        <AccordianItem value='2' trigger='Accordian Item 2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat a illum est sint corporis id veniam necessitatibus nulla doloribus alias architecto, quia excepturi ad voluptas? Ut eius temporibus porro.
        </AccordianItem>
        <AccordianItem value='3' trigger='Accordian Item 3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat a illum est sint corporis id veniam necessitatibus nulla doloribus alias architecto, quia excepturi ad voluptas? Ut eius temporibus porro.
        </AccordianItem>
      </Accordian>

    </main>
  );
}

export default App;
