import Link from "next/link";

interface ButtonsProps {
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonName: string;
}

export const PrimaryButton = ({ link, onClick, buttonName }: ButtonsProps) => {
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
}: ButtonsProps) => {
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
