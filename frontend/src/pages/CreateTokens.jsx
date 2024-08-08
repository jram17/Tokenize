import React from 'react';
import TokenForm from '@/app_components/TokenForm';
import bg from '/TokenMinting.png';
function CreateTokens() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-repeat-y"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <TokenForm />
    </div>
  );
}

export default CreateTokens;
