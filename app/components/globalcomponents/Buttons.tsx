// File: @/app/components/globalcomponents/Buttons.tsx

import React from "react";
import Link from "next/link";

interface ButtonProps {
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonName: string;
}

export const PrimaryButton = ({ link, onClick, buttonName }: ButtonProps) => {
  const buttonProps = {
    ...(link && { href: link }),
    ...(onClick && { onClick }),
  };

  return (
    <div>
      {link ? (
        <Link href={link}>
          <div className="bg-primary text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md hover:text-primary active:scale-95 hover:bg-white border-2 border-primary transition duration-300 text-sm md:text-base">
            {buttonName}
          </div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="bg-primary text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md hover:text-primary active:scale-95 hover:bg-white border-2 border-primary transition duration-300 text-sm md:text-base"
          {...buttonProps}
        >
          {buttonName}
        </button>
      )}
    </div>
  );
};

export const PrimaryOutlineButton = ({
  link,
  onClick,
  buttonName,
}: ButtonProps) => {
  const buttonProps = {
    ...(link && { href: link }),
    ...(onClick && { onClick }),
  };

  return (
    <div>
      {link ? (
        <Link href={link}>
          <div className="text-primary bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md border-2 border-primary hover:bg-primary active:scale-95 hover:text-white transition duration-300 text-sm md:text-base">
            {buttonName}
          </div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="text-primary bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md border-2 border-primary hover:bg-primary active:scale-95 hover:text-white transition duration-300 text-sm md:text-base"
          {...buttonProps}
        >
          {buttonName}
        </button>
      )}
    </div>
  );
};

export const SecondaryButton = ({
  link,
  onClick,
  buttonName,
}: ButtonProps) => {
  const buttonProps = {
    ...(link && { href: link }),
    ...(onClick && { onClick }),
  };

  return (
    <div>
      {link ? (
        <Link href={link}>
          <div className="bg-secondary text-primary px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md hover:text-secondary hover:border border-white hover:bg-primary active:scale-95 transition duration-300 text-sm md:text-base">
            {buttonName}
          </div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="bg-secondary text-primary px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md hover:text-secondary hover:border border-white hover:bg-primary active:scale-95 transition duration-300 text-sm md:text-base"
          {...buttonProps}
        >
          {buttonName}
        </button>
      )}
    </div>
  );
};

export const SecondaryOutlineButton = ({
  link,
  onClick,
  buttonName,
}: ButtonProps) => {
  const buttonProps = {
    ...(link && { href: link }),
    ...(onClick && { onClick }),
  };

  return (
    <div>
      {link ? (
        <Link href={link}>
          <div className="text-gray-700 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md border-2 border-gray-700 hover:bg-gray-700 active:scale-95 hover:text-white transition duration-300 text-sm md:text-base">
            {buttonName}
          </div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="text-gray-700 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md border-2 border-gray-700 hover:bg-gray-700 active:scale-95 hover:text-white transition duration-300 text-sm md:text-base"
          {...buttonProps}
        >
          {buttonName}
        </button>
      )}
    </div>
  );
};
