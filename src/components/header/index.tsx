import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const institutions = [
  {
    id: `UP Seal`,
    image: `/images/up-seal.png`,
    alt: `University of the Philippines Seal.`,
  },
  {
    id: `DOST Logo`,
    image: `/images/dost-logo.jpg`,
    alt: `Department of Science and Technology Logo.`,
  },
  {
    id: `PSHS Logo`,
    image: `/images/pshs-logo.png`,
    alt: `Philippine Science High School Logo.`,
  },
];

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Your AI diagnostics tool! Improve day-by-day!
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Achieve your dream university with three easy steps! Coming soon!
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Pre-register</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>
          Aim high, these folks get it
        </p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          {institutions.map((insti) => (
            <div
              key={insti.id}
              className={tw(
                `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
              )}
            >
              <div className={tw(`h-64 z-20`)}>
                <img
                  src={insti.image}
                  alt={insti.alt}
                  className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
