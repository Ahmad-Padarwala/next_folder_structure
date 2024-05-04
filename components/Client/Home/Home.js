import React from "react";

const Home = () => {
    return (
        <>
            <div className="home-main-div">
                <div id="home-main-first">
                    <p className="main-title">Sahara Faundation</p>
                    <p className="second-title">Bieng United for a big cause</p>
                </div>
                <div>
                    <p className="ramzan-tilte">RAMAZAN CROWD FUNDING <span id="ramazan-year">2024</span></p>
                </div>
                <div className="mt-3">
                    <p className="poetry">Khuda per ho Jaano-Mal-nisar</p>
                    <p className="poetry">Ittehad ki fir se ho kayam ho misaal</p>
                </div>
                <div>
                    <div className="flex justify-around mt-3">
                        <div>
                            <input type="radio" id="zakat" name="zakat" value="zakat" />
                            <label for="vanilla" className="ms-1">ZAKAT</label>
                        </div>
                        <div>
                            <input type="radio" id="sadaqah" name="sadaqah" value="sadaqah" />
                            <label for="vanilla" className="ms-1">SADAQAH</label>
                        </div>
                        <div>
                            <input type="radio" id="lillah" name="lillah" value="lillah" />
                            <label for="vanilla" className="ms-1">LILLAH</label>
                        </div>
                    </div>
                </div>
                <div class="relative mt-4">
                    <input type="text" class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter Amount" />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <img width="25" height="25" src="https://img.icons8.com/color-glass/48/average.png" alt="average" />
                    </div>
                </div>

                <div class="relative mt-3">
                    <input type="text" class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter Number" />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <img width="20" height="20" src="https://img.icons8.com/material-two-tone/24/phone--v1.png" alt="phone--v1" />
                    </div>
                </div>

                <div className="pay-btn-div">
                    <button className="pay-btn" type="button">PAY</button>
                </div>

                <div>
                   <p className="help-number"> CCF Helpline No.:9876543210</p>
                </div>

            </div>
        </>
    )
}

export default Home;