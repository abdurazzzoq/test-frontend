import AuthContextProvider, { AuthContext } from '@/context/auth.context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {  useContext } from 'react';
import {BiLogOutCircle} from 'react-icons/bi'

const Sidebar = () => {
  const {logout} = useContext(AuthContext)

  return (
    <>
      <aside className=" fixed top-0 left-0 h-full w-64 shadow-2xl">
        <div className="overflow-y-auto py-5 px-3 h-full bg-[#F2F4F7] ">
          <ul className="space-y-2">
           <Link href={'/'}>
         
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 bg-[#F2F4F7]"
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Home
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            </Link>


            <Link href={'/process-doc'}>
            <li>

              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group bg-[#F2F4F7]"
                aria-controls="dropdown-sales"
                data-collapse-toggle="dropdown-sales"
              >
              
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                 
                  Table
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            </Link>
          </ul>


<button className='flex items-center gap-[10px]  pl-[24px] mt-[600px]' onClick={logout}>
          <BiLogOutCircle />
          Chiqish
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
