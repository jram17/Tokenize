import React, { useState } from 'react';
import SellTokens from '@/app_components/SellTokens';
import BuyTokens from '@/app_components/BuyTokens';
import '@fontsource-variable/faustina';
import classNames from 'classnames';
import bg from '/tradepage.png';
function TradeTokens() {
  const [holder, setHolder] = useState(true);

  const pageHandler = () => {
    setHolder((prev) => !prev);
  };

  return (
    <div
      className="min-h-screen w-[100vw] flex flex-col gap-8  bg-contain bg-repeat justify-around "
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div className="w-full flex text-4xl justify-center font-faustina text-white">
        Token exchange
      </div>

      <div className="flex w-full items-center justify-center">
        <div className="text-lg  text-center font-medium w-[50vw] text-white border-b dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px  items-center justify-center">
            <li className="me-2">
              <div
                onClick={() => setHolder(true)}
                className={classNames(
                  'inline-block p-4 border-b-2 rounded-t-lg cursor-pointer',
                  {
                    'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500':
                      holder,
                    'hover:text-white hover:border-gray-300 dark:hover:text-gray-300':
                      !holder,
                  }
                )}
              >
                Sell
              </div>
            </li>
            <li className="me-2">
              <div
                onClick={() => setHolder(false)}
                className={classNames(
                  'inline-block p-4 border-b-2 rounded-t-lg cursor-pointer',
                  {
                    'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500':
                      !holder,
                    'hover:text-white hover:border-gray-300 dark:hover:text-gray-300':
                      holder,
                  }
                )}
              >
                Buy
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        {holder ? <SellTokens /> : <BuyTokens />}
      </div>
    </div>
  );
}

export default TradeTokens;
