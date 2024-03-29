import React from 'react'

import Logo from '../img/logo-purple.svg'

const Footer = () => {
  return (
    <div className="flex flex-row justify-between pl-2 text-xs md:text-base bg-blue-500">
      <div className="hidden md:block md:w-1/3 my-1">
        <p>
          Built with{' '}
          <a
            href="https://redwoodjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            RedwoodJS
          </a>
          &nbsp;and{' '}
          <a
            href="https://www.tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            TailwindCSS
          </a>
          .
        </p>
      </div>
      <div className="md:w-1/3 flex justify-center my-1">
        <a
          rel="me noreferrer"
          href="https://hachyderm.io/@isaacTait"
          target="_blank"
        >
          <svg
            width="25"
            height="29"
            viewBox="0 0 75 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M73.8393 17.4898C72.6973 9.00165 65.2994 2.31235 56.5296 1.01614C55.05 0.797115 49.4441 0 36.4582 0H36.3612C23.3717 0 20.585 0.797115 19.1054 1.01614C10.5798 2.27644 2.79399 8.28712 0.904997 16.8758C-0.00358524 21.1056 -0.100549 25.7949 0.0682394 30.0965C0.308852 36.2651 0.355538 42.423 0.91577 48.5665C1.30307 52.6474 1.97872 56.6957 2.93763 60.6812C4.73325 68.042 12.0019 74.1676 19.1233 76.6666C26.7478 79.2728 34.9474 79.7055 42.8039 77.9162C43.6682 77.7151 44.5217 77.4817 45.3645 77.216C47.275 76.6092 49.5123 75.9305 51.1571 74.7385C51.1797 74.7217 51.1982 74.7001 51.2112 74.6753C51.2243 74.6504 51.2316 74.6229 51.2325 74.5948V68.6416C51.2321 68.6154 51.2259 68.5896 51.2142 68.5661C51.2025 68.5426 51.1858 68.522 51.1651 68.5058C51.1444 68.4896 51.1204 68.4783 51.0948 68.4726C51.0692 68.4669 51.0426 68.467 51.0171 68.4729C45.9835 69.675 40.8254 70.2777 35.6502 70.2682C26.7439 70.2682 24.3486 66.042 23.6626 64.2826C23.1113 62.762 22.7612 61.1759 22.6212 59.5646C22.6197 59.5375 22.6247 59.5105 22.6357 59.4857C22.6466 59.4609 22.6633 59.4391 22.6843 59.422C22.7053 59.4048 22.73 59.3929 22.7565 59.3871C22.783 59.3813 22.8104 59.3818 22.8367 59.3886C27.7864 60.5826 32.8604 61.1853 37.9522 61.1839C39.1768 61.1839 40.3978 61.1839 41.6224 61.1516C46.7435 61.008 52.1411 60.7459 57.1796 59.7621C57.3053 59.7369 57.431 59.7154 57.5387 59.6831C65.4861 58.157 73.0493 53.3672 73.8178 41.2381C73.8465 40.7606 73.9184 36.2364 73.9184 35.7409C73.9219 34.0569 74.4606 23.7949 73.8393 17.4898Z"
              fill="url(#paint0_linear_549_34)"
            />
            <path
              d="M61.2484 27.0263V48.114H52.8916V27.6475C52.8916 23.3388 51.096 21.1413 47.4437 21.1413C43.4287 21.1413 41.4177 23.7409 41.4177 28.8755V40.0782H33.1111V28.8755C33.1111 23.7409 31.0965 21.1413 27.0815 21.1413C23.4507 21.1413 21.6371 23.3388 21.6371 27.6475V48.114H13.2839V27.0263C13.2839 22.7176 14.384 19.2946 16.5843 16.7572C18.8539 14.2258 21.8311 12.926 25.5264 12.926C29.8036 12.926 33.0357 14.5705 35.1905 17.8559L37.2698 21.346L39.3527 17.8559C41.5074 14.5705 44.7395 12.926 49.0095 12.926C52.7013 12.926 55.6784 14.2258 57.9553 16.7572C60.1531 19.2922 61.2508 22.7152 61.2484 27.0263Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_549_34"
                x1="37.0692"
                y1="0"
                x2="37.0692"
                y2="79"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6364FF" />
                <stop offset="1" stopColor="#563ACC" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
      <div className="flex flex-row justify-end md:w-1/3 my-1">
        {/*Email Icon*/}
        <a href="mailto:isaac@mountaintopcoding.com" className="pr-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H7C7 3.84315 8.34315 2.5 10 2.5H14C15.6569 2.5 17 3.84315 17 5.5ZM14 4.5H10C9.44772 4.5 9 4.94772 9 5.5H15C15 4.94772 14.5523 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z"
              fill="currentColor"
            />
          </svg>
        </a>
        {/*Instagram Icon*/}
        <a
          href="https://www.instagram.com/fallfish_tenkara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11Z"
              fill="currentColor"
            />
            <path
              d="M11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H11Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.09447 4.74918C8.41606 4.03243 8 3.0648 8 2H10C10 3.10457 10.8954 4 12 4C13.1046 4 14 3.10457 14 2H16C16 3.0648 15.5839 4.03243 14.9055 4.74918C16.1782 5.45491 17.1673 6.6099 17.6586 8H19C19.5523 8 20 8.44772 20 9C20 9.55229 19.5523 10 19 10H18V12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H18V16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H17.6586C16.8349 20.3304 14.6124 22 12 22C9.38756 22 7.16508 20.3304 6.34141 18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H6V14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12H6V10H5C4.44772 10 4 9.55229 4 9C4 8.44772 4.44772 8 5 8H6.34141C6.83274 6.6099 7.82181 5.45491 9.09447 4.74918ZM8 16V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Footer
