import React, { useEffect } from 'react';
import '@fontsource-variable/faustina';
import '@fontsource/poppins';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
function Info() {
  const nameRef = React.useRef(null);
  const subtextref = React.useRef(null);

  useEffect(() => {
    gsap.to(nameRef.current, {
      ease: 'power1.inOut',
      opacity: 1,
      y: 1,
    });
    gsap.to(subtextref.current, {
      ease: 'power1.inOut',
      opacity: 1,
      y: 1,
      delay: 0.5,
    });
  }, []);
  return (
    <section className="flex flex-col gap-10 m-8 text-white">
      <div className="flex flex-col gap-1 font-faustina">
        <p className="text-9xl opacity-0" ref={nameRef}>
          Tokenize
        </p>
        <p className="text-2xl font-poppins opacity-0" ref={subtextref}>
          Create Your Own Tokens
        </p>
      </div>
      <div className="flex gap-5">
        <Link to={'/create'}>
          <Button>Create Tokens</Button>
        </Link>
        <Link to={'/trade'}>
          <Button>Trade Tokens</Button>
        </Link>
        <Link to={'/details'}>
          <Button> Tokens Details</Button>
        </Link>
      </div>
    </section>
  );
}

export default Info;
