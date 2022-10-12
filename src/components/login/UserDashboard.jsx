import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Userdashboard() {
    const navigate = useNavigate();
    const myUser = localStorage.getItem("user-info");

    console.log(myUser);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("");
        setUsers(result.data);
        console.log(result);
    };

    return (
        <>
            <nav className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-sky-900 sm:px-4 py-2.5 rounded dark:bg-gray-800 h-48">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center">
                        <img
                            src="data:image/png;base64,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"
                            className="mr-3 h-28 rounded-full mt-3 sm:20"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                            welcome {localStorage.getItem("user-info")}
                            <Link to="/profile">
                                <p className="text-gray-900 border-b border-gray-300 text-sm">
                                    My Profile
                                </p>
                            </Link>
                        </span>
                    </a>

                    <button
                        data-collapse-toggle="mobile-menu"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        className="hidden w-fl md:block md:w-auto"
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <button
                                onClick={() => {
                                    localStorage.clear("isAuth");
                                    navigate("/");
                                }}
                                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-blue-900 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            >
                                Log Out
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="bg-white w-full h-auto mb-10 flex">
                <div className="container mx-auto bg-gray-50 shadow-md rounded-lg mt-10 mb-10  flex">
                    <div className="w-full mt-10 h-auto  pl-20 pr-20 space-x-8 flex">
                        <div className="bg-white shadow-md h-40 w-6/12 mt-10 rounded-lg  ">
                            <h1 className="text-white bg-gray-600 shadow-md text-center text-xl border-b font-semibold">
                                My total Earnings
                            </h1>
                            <div className="bg-blue-100 w-full mt-24 p-2 rounded-md inline-flex">
                                <div className="w-6/12 text-black text-center border-r border-blue-500">
                                    0.0 Paid
                                </div>
                                <div className="w-6/12 text-black text-center">
                                    0.0 pending
                                </div>
                            </div>
                            <div className=" w-full mt-20  space-x-16 inline-flex items-center pl-10">
                                <button
                                    type="button"
                                    className="text-white bg-gradient-to-r from-red-400 via-bule-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-teal-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    ID Cards
                                </button>
                                <button
                                    type="button"
                                    class="text-white bg-gradient-to-r from-red-400  to-pink-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-teal-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    offer Letter
                                </button>
                            </div>

                            <div className=" w-full mt-20  space-x-16 inline-flex items-center pl-10">
                                <button
                                    type="button"
                                    class="text-white bg-gradient-to-r from-red-400 via-bule-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-teal-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    My Task
                                </button>
                                <button
                                    type="button"
                                    className="text-white bg-gradient-to-r from-red-400  to-pink-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-teal-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    New Task
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-600 rounded-lg h-auto mb-20 pl-10 pr-10 w-6/12">
                            <div className="bg-white shadow-md h-28 w-full mt-5 rounded-lg flex  ">
                                <div className="w-8/12 mt-4 pl-5 flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-building-bank"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#6f32be"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <line x1="3" y1="21" x2="21" y2="21" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                        <polyline points="5 6 12 3 19 6" />
                                        <line x1="4" y1="10" x2="4" y2="21" />
                                        <line x1="20" y1="10" x2="20" y2="21" />
                                        <line x1="8" y1="14" x2="8" y2="17" />
                                        <line x1="12" y1="14" x2="12" y2="17" />
                                        <line x1="16" y1="14" x2="16" y2="17" />
                                    </svg>
                                    <p className="text-black mt-2  pl-2 text-xl ">
                                        Link Bank Account
                                    </p>
                                </div>
                                <div className="items-center">
                                    <Link to="/bankform">
                                        {" "}
                                        <button
                                            type="button"
                                            className="text-white bg-gradient-to-r from-red-400 via-bule-500 to-pink-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 mt-4 py-2 text-center mr-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Click Here
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white shadow-md h-28 w-full mt-5 rounded-lg flex  ">
                                <div className="w-8/12 mt-4 pl-5 flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-building-bank"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#6f32be"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <line x1="3" y1="21" x2="21" y2="21" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                        <polyline points="5 6 12 3 19 6" />
                                        <line x1="4" y1="10" x2="4" y2="21" />
                                        <line x1="20" y1="10" x2="20" y2="21" />
                                        <line x1="8" y1="14" x2="8" y2="17" />
                                        <line x1="12" y1="14" x2="12" y2="17" />
                                        <line x1="16" y1="14" x2="16" y2="17" />
                                    </svg>
                                    <p className="text-black mt-2  pl-2 text-xl ">
                                        Watch Summary
                                    </p>
                                </div>
                                <div className="items-center">
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r from-red-400 via-bule-500 to-pink-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 mt-4 py-2 text-center mr-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Click Here
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white shadow-md h-28 w-full mt-5 rounded-lg mb-10 flex  ">
                                <div className="w-8/12 mt-4 pl-5 flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-building-bank"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#6f32be"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <line x1="3" y1="21" x2="21" y2="21" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                        <polyline points="5 6 12 3 19 6" />
                                        <line x1="4" y1="10" x2="4" y2="21" />
                                        <line x1="20" y1="10" x2="20" y2="21" />
                                        <line x1="8" y1="14" x2="8" y2="17" />
                                        <line x1="12" y1="14" x2="12" y2="17" />
                                        <line x1="16" y1="14" x2="16" y2="17" />
                                    </svg>
                                    <p className="text-black mt-2  pl-2 text-xl ">
                                        Complete your KYC
                                    </p>
                                </div>
                                <div className="items-center">
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r from-red-400 via-bule-500 to-pink-600  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 mt-4 py-2 text-center mr-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Click Here
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
