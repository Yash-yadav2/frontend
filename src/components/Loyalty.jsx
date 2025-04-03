import React from "react";

const Loyalty = () => {
  return (
    <>
      <div className=" max-h-min w-full bg-[#151414] pl-[6vw] pr-[6vw] pt-2">
        <div className=" bg-[#1c1a19] text-white p-5 rounded-xl">
          <h1 className=" text-2xl text-[#fdb203] font-bold text-center">
            Casibom Fidelity Program
          </h1>
          <br />
          <p className=" text-sm ">
            With the Casibom VIP Program, you can increase your level as you
            play.
          </p>
          <br />
          <p className=" text-sm ">
            It is completely free to join the VIP Program, which offers
            different bonuses and privileges for each level.
          </p>
          <p className=" text-sm ">
            As soon as you become a member of the Casino, you automatically
            start at BRONZE level. Then, after you get 10000 points, you move on
            to the next level. You get points by playing, 1€ = 1 Point.
          </p>
          <br />
          <p className=" text-sm ">
            As you level up, you can get more and more bonuses and cashback
            bonus. In addition, special bonuses and many more privileges will be
            waiting for you.
          </p>
        </div>
        <div className="pt-5 flex justify-center items-center flex-col gap-5">
          <div className=" h-[50vh] w-full relative bg-[#151211] flex justify-around items-start p-1 md:p-20 md:pl-[15vw]  flex-col  ">
            <img
              className=" treasure absolute left-0 bottom-2"
              src="/logo/treasure.png"
              alt=""
            />
            <div className=" flex justify-center items-center gap-3 h-[20vh]">
              <div>
                <div className=" bg-[#fdb203] h-[15vw] md:h-[3.8vw] w-[15vw] md:w-[3.8vw]  rounded-full flex justify-center  items-center flex-col ">
                  <h1 className=" text-xl">1</h1>
                  <img src="/logo/loyalty-tick-black.png" alt="" />
                </div>
              </div>
              <div>
                <h1 className=" text-[#fdb203] text-2xl">IMPROVED CASHBACK</h1>
                <p className=" text-white text-xs md:text-sm w-[60vw] md:w-[30vw]">
                  After your balance is spent, the net amount lost is added to
                  your account according to your VIP level. There are 2 types of
                  Cashback bonuses, 🄳aily and 🅆eekly, which are credited every
                  Monday.
                </p>
              </div>
            </div>
            <div className=" h-[30vh] bg-[#151211] w-full md:w-[65vw] m-4">
              <div className=" bg-[#1c1a19] h-[18vh] w-full grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-0 gap-3 md:flex justify-center items-center">
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    10%🄳
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#773913] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/bronze.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#f99353]">Bronze</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    10%🄳＋5%🅂
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#5d5c5c] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/silver.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#5d5c5c]">Silver</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    10%🄳＋10%🅆
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#e6c424] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/gold.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#e6c424]">Gold</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    10%🄳＋15%🅆
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#1a44a0] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/platinum.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#1a44a0]">Platinum</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center  items-center flex justify-center text-white text-sm md:text-lg">
                    10%🄳＋20%🅆
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#970fb7] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/diamond.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-xs md:text-sm text-[#970fb7]">
                      Diamond
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-[50vh] w-full relative bg-[#151211] flex justify-around items-start p-1 md:p-20 md:pl-[15vw]  flex-col  ">
            <img
              className=" treasure absolute left-0 bottom-2"
              src="/logo/treasure.png"
              alt=""
            />
            <div className=" flex justify-center items-center gap-3 h-[20vh]">
              <div>
                <div className=" bg-[#fdb203] h-[15vw] md:h-[3.8vw] w-[15vw] md:w-[3.8vw]  rounded-full flex justify-center  items-center flex-col ">
                  <h1 className=" text-xl">2</h1>
                  <img src="/logo/loyalty-tick-black.png" alt="" />
                </div>
              </div>
              <div>
                <h1 className=" text-[#fdb203] text-2xl">
                  IMPROVED DAILY BONUS
                </h1>
                <p className=" text-white text-xs md:text-sm w-[60vw] md:w-[30vw]">
                  Each level is entitled to an improvement of the daily bonus.
                  You start at Bronze, with 10% up to 100€, and you can go up to
                  25% up to 1000€, in Diamond!
                </p>
              </div>
            </div>
            <div className=" h-[30vh] bg-[#151211] w-full md:w-[65vw] m-4">
              <div className=" bg-[#1c1a19] h-[18vh] w-full grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-0 gap-3 md:flex justify-center items-center">
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    10% up to 100€
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#773913] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/bronze.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#f99353]">Bronze</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    10% up to 500€
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#5d5c5c] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/silver.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#5d5c5c]">Silver</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    15% up to 500€
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#e6c424] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/gold.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#e6c424]">Gold</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    20% up to 1000€
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#1a44a0] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/platinum.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#1a44a0]">Platinum</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center  items-center flex justify-center text-white text-sm md:text-lg">
                    25% up to 1000€
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#970fb7] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/diamond.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-xs md:text-sm text-[#970fb7]">
                      Diamond
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-[50vh] w-full relative bg-[#151211] flex justify-around items-start p-1 md:p-20 md:pl-[15vw]  flex-col  ">
            <img
              className=" treasure absolute left-0 bottom-2"
              src="/logo/treasure.png"
              alt=""
            />
            <div className=" flex justify-center items-center gap-3 h-[20vh]">
              <div>
                <div className=" bg-[#fdb203] h-[15vw] md:h-[3.8vw] w-[15vw] md:w-[3.8vw]  rounded-full flex justify-center  items-center flex-col ">
                  <h1 className=" text-xl">3</h1>
                  <img src="/logo/loyalty-tick-black.png" alt="" />
                </div>
              </div>
              <div>
                <h1 className=" text-[#fdb203] text-2xl">LEVEL UP POINTS</h1>
                <p className=" text-white text-xs md:text-sm w-[60vw] md:w-[30vw]">
                  It is the required amount of points to reach the next level. 1
                  point = 1 euro.
                </p>
              </div>
            </div>
            <div className=" h-[30vh] bg-[#151211] w-full md:w-[65vw] m-4">
              <div className=" bg-[#1c1a19] h-[18vh] w-full grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-0 gap-3 md:flex justify-center items-center">
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    10000
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#773913] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/bronze.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#f99353]">Bronze</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    30000
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#5d5c5c] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/silver.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#5d5c5c]">Silver</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    100000
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#e6c424] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/gold.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#e6c424]">Gold</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    300000
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#1a44a0] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/platinum.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#1a44a0]">Platinum</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center  items-center flex justify-center text-white text-sm md:text-lg">
                    -
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#970fb7] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/diamond.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-xs md:text-sm text-[#970fb7]">
                      Diamond
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-[50vh] w-full relative bg-[#151211] flex justify-around items-start p-1 md:p-20 md:pl-[15vw]  flex-col  ">
            <img
              className=" treasure absolute left-0 bottom-2"
              src="/logo/treasure.png"
              alt=""
            />
            <div className=" flex justify-center items-center gap-3 h-[20vh]">
              <div>
                <div className=" bg-[#fdb203] h-[15vw] md:h-[3.8vw] w-[15vw] md:w-[3.8vw]  rounded-full flex justify-center  items-center flex-col ">
                  <h1 className=" text-xl">4</h1>
                  <img src="/logo/loyalty-tick-black.png" alt="" />
                </div>
              </div>
              <div>
                <h1 className=" text-[#fdb203] text-2xl">
                  MINIMUM LEVEL POINTS
                </h1>
                <p className=" text-white text-xs md:text-sm w-[60vw] md:w-[30vw]">
                  It is the minimum amount of points you have to earn to stay at
                  your level. 1 point = 1 euro.
                </p>
              </div>
            </div>
            <div className=" h-[30vh] bg-[#151211] w-full md:w-[65vw] m-4">
              <div className=" bg-[#1c1a19] h-[18vh] w-full grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-0 gap-3 md:flex justify-center items-center">
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    -
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#773913] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/bronze.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#f99353]">Bronze</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    20000
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#5d5c5c] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/silver.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#5d5c5c]">Silver</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    {" "}
                    75000
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#e6c424] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/gold.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#e6c424]">Gold</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center items-center flex justify-center text-white text-sm md:text-lg">
                    250000
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#1a44a0] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/platinum.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-sm text-[#1a44a0]">Platinum</h1>
                  </div>
                </div>
                <div className=" h-full w-full ">
                  <div className=" h-1/2 text-center  items-center flex justify-center text-white text-sm md:text-lg">
                    500000
                  </div>
                  <div className="h-1/2 bg-gradient-to-t from-[#970fb7] via-[#1c1a19] via-70%  to-[#1c1a19] flex justify-start items-center gap-8">
                    <img
                      className=" md:h-10 h-5 ml-2 mb-5 md:mb-0"
                      src="/logo/diamond.png"
                      alt=""
                    />
                    <h1 className="mb-3 text-xs md:text-sm text-[#970fb7]">
                      Diamond
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loyalty;
