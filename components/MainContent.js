// components/MainContent.js
import { useState } from 'react';
import Image from 'next/image';
import Testimonials from './Testimonials';
import AdditionalSections from './AdditionalSections';

const MainContent = () => {
  return (
    <section>
      <Testimonials />
      <AdditionalSections />
    </section>
  );
};

export default MainContent;
