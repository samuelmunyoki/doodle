import "./App.css"


function App(){
  
    return (
      <div className="flex items-center justify-center h-screen">
        <div className='effect1 w-[90%] h-[90vh] bg-[#e0e4e7] absolute mt-[-3/6] ml-[-3/6] left-3/6 top-3/6 rounded-[8px] flex flex-col py-[15px] px-[40px]'>
          
          {/* Header start */}
          <div className="flex flex-row justify-between mt-[15px] mb-[15px]">
            <div className="txt text-[#EC7EDA] cursor-pointer text-3xl font-extrabold font-nunito">Doodle</div>
            <div className="flex flex-row">
              
              <button className="txt text-[#EC7EDA] active btn bg-transparent font-nunito   font-semibold  py-2 px-[15px]  w-[80px]  hover:border-transparent rounded mr-2 ">
                Login
              </button>
              <button className="txt text-[#EC7EDA] btn bg-transparent font-nunito  font-semibold  py-2  w-[80px]   hover:border-transparent rounded mr-2 ">
                Register
              </button>
            </div>
          </div>
  
          {/* Header end */}
  
          {/* Rows cols */}
          <div className="flex flex-col h-full flex-wrap md:flex-row">
  
            <div className="flex flex-col sm:h-full flex-1 w-[3/6]">
              <div className=" flex flex-row shadow w-[3/6] h-3/6  mr-[2px] mb-[2px]  items-center flex-wrap">
                <div className="flex flex-col justify-evenly items-center effect2 w-2/6  h-full mr-[20px] ">
                  <div className="flex flex-col justify-evenly items-center">
                    <i className="fa fa-user txt text-[60px] mb-[15px]" aria-hidden="true"></i>
                    <div className="txt cursor-pointer text-xl font-bold text-[#006F52] font-nunito">WaterBird - 06</div>
                    <div className="txt  cursor-pointer text-[12px] font-bold text-[#006F52] font-nunito">ID: 9397357924</div>
                  </div>
                  <div className="txt txt1 px-[15px] py-[8px] cursor-pointer text-[14px] font-bold text-[#006F52] font-nunito">Balance: KSH. 549.00</div>
                  <div className="flex flex-row">
                    <button className="txt text-[#EC7EDA] text-[14px] btn1 bg-transparent font-nunito  font-semibold  py-2  w-[80px]   hover:border-transparent rounded mr-2 ">
                      Deposit
                    </button>
                    <button className="txt text-[#EC7EDA]  text-[14px] btn1 bg-transparent font-nunito   font-bold  py-2  w-[80px]   hover:border-transparent rounded mr-2 ">
                      Withdraw
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-evenly">


                  <div className="txt_green text-3xl font-nunito font-bold flex flex-col justify-center items-center counter">
                    23.9x
                    <div className="txt text-[16px] font-nunito font-bold">
                      Busted 
                    </div> 
                  </div>
                  <div className="flex flex-col justify-center items-center">
                  <div className="txt font-nunito font-bold flex flex-col justify-center items-center ">
                    <ul>
                      <li>1.0x</li>
                      <li>2.50x</li>
                      <li>9.0x</li>
                      <li>20.80x</li>
                    </ul>
                  </div>
                  <input placeholder="&#xF0D6; Stake"  name="amnt" className="stake"/>
                  <button className="txt text-[#EC7EDA]  text-[14px] btn1 bg-transparent font-nunito   font-bold  py-2  w-[100px]   hover:border-transparent rounded mr-2 ">
                      BET
                  </button>

                  </div>
                  
                </div>
                
                
                
              </div>
              <div className="shadow w-[3/6] h-3/6  mr-[2px] mt-[2px]">col 2</div>
            </div>
  
            <div className="flex-1 w-[3/6] mx-[2px] ml-[2px]my-[2px]">Row 2</div>
          </div>
        </div>
      </div>
    )
}

export default App;