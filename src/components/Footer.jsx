export default function Footer() {
  return (
    <div className="bg-[#1c1a19] text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="hidden md:flex justify-between items-center mb-8">
          <div>
            <p className="text-sm">E-MAIL</p>
            <p className="text-yellow-500">support@casibom.com</p>
          </div>
          <div className="flex space-x-16">
            <div>
              <h2 className="text-yellow-500 mb-2 border-b-2 border-yellow-500 inline-block">
                Legal
              </h2>
              <ul>
                <li>
                  <a className="hover:text-yellow-500" href="#">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a className="hover:text-yellow-500" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-yellow-500" href="#">
                    Affiliates
                  </a>
                </li>
                <li>
                  <a className="hover:text-yellow-500" href="#">
                    Responsible Game
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-yellow-500 mb-2 border-b-2 border-yellow-500 inline-block">
                About Us
              </h2>
              <ul>
                <li>
                  <a className="hover:text-yellow-500" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-yellow-500" href="#">
                    Betting Rules
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3673 10.416H8.89819C7.932 10.416 7.4668 10.5953 7.4668 11.3841V12.2805C7.4668 13.0694 7.96779 13.2487 8.89819 13.2487H9.47075C9.8286 13.2487 9.97174 13.4279 9.97174 14.0016V25.7625C9.97174 26.7306 10.1507 27.1967 10.9379 27.1967H11.8683C12.6556 27.1967 12.8345 26.6947 12.8345 25.7625V11.3841C12.7987 10.5953 12.2978 10.416 11.3673 10.416Z"
                fill="#8493A1"
              ></path>
              <path
                d="M28.3291 2.24076C27.2556 1.20093 25.9315 0.663086 24.3212 0.663086H12.2617C10.6514 0.663086 9.29157 1.20093 8.25381 2.24076L1.84832 8.62317C0.846343 9.62714 0.30957 10.9538 0.30957 12.4239V24.7226C0.30957 26.4078 0.882128 27.7345 2.02724 28.8461L8.11067 34.9416C9.29157 36.1249 10.6514 36.6986 12.3691 36.6627H24.2854C25.9315 36.6627 27.2914 36.1607 28.5438 34.9416L34.6273 28.8461C35.7366 27.7345 36.3449 26.4078 36.3449 24.7226V12.4239C36.3449 10.9538 35.8082 9.62714 34.8062 8.62317L28.3291 2.24076ZM33.9116 16.6191C33.9116 17.0135 33.7326 17.2287 33.339 17.2287H31.514V15.9378C31.514 14.9697 31.3708 14.5036 30.5478 14.5036H29.7247C28.9017 14.5036 28.7585 15.0056 28.7585 15.9378V17.2287H27.5061C26.5399 17.2287 26.0747 17.3721 26.0747 18.1968V19.0573C26.0747 19.882 26.5757 20.0254 27.5061 20.0254H28.7943V21.3163C28.7943 22.2844 28.9375 22.7505 29.7605 22.7505H30.5836C31.4066 22.7505 31.5498 22.2485 31.5498 21.3163V20.0254H33.3748C33.7326 20.0254 33.9116 20.2047 33.9473 20.5633V24.7226C33.9473 25.7266 33.6611 26.4796 32.9454 27.1608L26.8619 33.2564C26.1462 33.9735 25.359 34.2962 24.3928 34.2962H12.2259C11.2597 34.2962 10.4725 33.9735 9.75678 33.2564L3.67335 27.1608C2.95765 26.4437 2.63559 25.7266 2.67137 24.7226V12.7108C2.67137 11.7068 2.99344 10.8463 3.74492 10.0933L9.89992 3.81843C10.5083 3.20888 11.3313 2.99374 12.2259 2.99374H24.357C25.2516 2.99374 26.0389 3.17302 26.683 3.81843L32.8738 10.0933C33.5895 10.8463 33.9473 11.7068 33.9473 12.7108V16.6191H33.9116Z"
                fill="#8493A1"
              ></path>
              <path
                d="M23.176 18.4836C24.7148 17.3721 24.7148 16.2247 24.7148 15.2924V14.3601C24.5359 11.2765 23.5339 10.0933 19.9554 10.0933C16.3769 10.0933 15.3749 11.2765 15.196 14.3601V15.2924C15.196 16.2247 15.2318 17.3721 16.7348 18.4836C14.9097 19.2007 14.7666 20.7426 14.7666 22.7864C14.7666 25.7983 15.8401 27.3042 19.9196 27.3759C24.0349 27.3042 25.0726 25.7983 25.0726 22.7864C25.1442 20.7426 25.0011 19.2007 23.176 18.4836ZM19.9912 12.6391C21.4942 12.6391 22.1025 13.1769 22.1025 15.0056C22.1025 16.7625 21.4942 17.3721 19.9912 17.3721C18.4882 17.3721 17.8799 16.7625 17.8799 15.0056C17.8799 13.1769 18.4882 12.6391 19.9912 12.6391ZM19.9912 24.8302C18.2377 24.8302 17.6294 24.1489 17.6294 22.4278C17.6294 20.7067 18.2377 19.9179 19.9912 19.9179C21.7446 19.9179 22.353 20.7067 22.353 22.4278C22.353 24.1489 21.7089 24.8302 19.9912 24.8302Z"
                fill="#8493A1"
              ></path>
            </svg>
            <img alt="GCB logo" className="h-8" src="/logo/gcb-seal.svg" />
            <div className="flex items-center space-x-2">
              <img
                alt="Language flag"
                className="h-8"
                src="/logo/english.png"
              />
              <span>EN</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mb-8">
          <p>
            casibom.com is operated by Seguri N.V., a company incorporated under
            the laws of Curaçao with Company Number 153142 and holds a valid
            Certificate of Operation from GCB.
          </p>
          <p>© CasiBom. All rights reserved.</p>
        </div>
        <div className="h-[1px] w-full bg-white/10"></div>

        {/* //footer */}
        
        <footer class="p-6">
          <div class="grid grid-cols-5 xs:grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2 place-items-center">
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222418.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222405.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222412.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222418.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222424.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222429.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222434.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222441.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222448.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222455.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222501.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222507.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222537.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222551.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222557.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222603.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222609.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222615.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222622.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222627.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222631.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222635.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222640.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222646.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222652.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222658.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222703.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222710.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222717.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222723.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222731.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222736.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222740.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222744.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222749.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222756.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222805.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222813.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222819.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/image/footer/Screenshot 2025-03-31 222823.png"
                alt=""
                class="object-contain w-full h-full"
              />
            </div>
          </div>
        </footer>
      </div>
      <div className="fixed bottom-4 right-4">
        <img
          src="/logo/chat icon.png"
          alt="Chat icon"
          className="h-14 w-14 object-fill"
        />
      </div>
    </div>
  );
}
