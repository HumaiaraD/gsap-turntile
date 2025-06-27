const Turntile = () => {

    return (
        <>
          <section className="relative w-screen h-[100svh] p-8 overflow-hidden bg-white text-dark">
            <div className="absolute top-[50%] left-[50%] translate-center w-[35%] flex justify-center gap-4">
                <div className=" flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between" 
                     id="hero-card-1">
                <div className="w-full flex justify-between ">
                    <span className="uppercase font-mono text-xs font-medium">Plan</span>
                    <span className="uppercase font-mono text-xs font-medium" 
                    >01</span>
                </div>
                <div className="w-full flex justify-between">
                    <span 
                     className="uppercase font-mono text-xs font-medium">01</span>
                    <span className="uppercase font-mono text-xs font-medium" >Plan</span>
                </div>
                </div>

                <div className="flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between" id="hero-card-2">
                <div className=" w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium" >Design</span>
                    <span className="uppercase font-mono text-xs font-medium" >02</span>
                </div>
                <div className=" w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">02</span>
                    <span className="uppercase font-mono text-xs font-medium">Design</span>
                </div>
                </div>

                <div className="flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between" id="hero-card-3">
                <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium" >Develop</span>
                    <span className="uppercase font-mono text-xs font-medium" >03</span>
                </div>
                <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium" >03</span>
                    <span className="uppercase font-mono text-xs font-medium" >Develop</span>
                </div>
                </div>
            </div>
          </section>

          <section className="relative w-screen h-[100svh] p-8 overflow-hidden flex justify-center
                    items-center bg-black text-white">
            <h1></h1>
          </section>

         <section className="py-32 px-8">
            <div className="relative w-full text-center translate-y-[400%] will-change-transform">
                <h1></h1>
            </div> 


          <div className="hidden">
        <div className="relative w-3/4 h-full mt-16 flex justify-center items-center gap-16">
          <div className=" flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between" id="mobile-card-1">
            <div className="absolute top-[50%] left-[50%] translate-center w-full h-full animate-floating">
              <div className="relative w-full h-full preserve-3d">
                <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">Plan</span>
                    <span className="uppercase font-mono text-xs font-medium">01</span>
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">01</span>
                    <span className="uppercase font-mono text-xs font-medium">Plan</span>
                  </div>
                </div>
                <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">Plan</span>
                    <span className="uppercase font-mono text-xs font-medium">01</span>
                  </div>
                  <div className="w-full h-full flex flex-col gap-2">
                    <p>Discovery</p>
                    <p>Audit</p>
                    <p>User Flow</p>
                    <p>Site Map</p>
                    <p>Personas</p>
                    <p>Strategy</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">01</span>
                    <span className="uppercase font-mono text-xs font-medium">Plan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between" id="mobile-card-2">
            <div className="absolute top-[50%] left-[50%] translate-center w-full h-full animate-floating">
              <div className="relative w-full h-full preserve-3d">
                <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">Design</span>
                    <span className="uppercase font-mono text-xs font-medium">02</span>
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">02</span>
                    <span className="uppercase font-mono text-xs font-medium">Design</span>
                  </div>
                </div>
                <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">Design</span>
                    <span className="uppercase font-mono text-xs font-medium">02</span>
                  </div>
                  <div className="w-full h-full flex flex-col gap-2">
                    <p>Wireframes</p>
                    <p>UI Kits</p>
                    <p>Prototypes</p>
                    <p>Visual Style</p>
                    <p>Interaction</p>
                    <p>Design QA</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">02</span>
                    <span className="uppercase font-mono text-xs font-medium">Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between" id="mobile-card-3">
            <div className="absolute top-[50%] left-[50%] translate-center w-full h-full animate-floating">
              <div className="relative w-full h-full preserve-3d">
                <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">Develop</span>
                    <span className="uppercase font-mono text-xs font-medium">03</span>
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">03</span>
                    <span className="uppercase font-mono text-xs font-medium">Develop</span>
                  </div>
                </div>
                <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">Develop</span>
                    <span className="uppercase font-mono text-xs font-medium">03</span>
                  </div>
                  <div className="w-full h-full flex flex-col gap-2">
                    <p>HTML/CSS/JS</p>
                    <p>CMS Build</p>
                    <p>GSAP Motion</p>
                    <p>Responsive</p>
                    <p>Optimization</p>
                    <p>Launch</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="uppercase font-mono text-xs font-medium">03</span>
                    <span className="uppercase font-mono text-xs font-medium">Develop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="fixed top-0 left-0 w-screen h-100svh flex justify-center z-[-1] bg-amber-50">
      <div className="relative w-3/4 h-full mt-16 flex justify-center items-center gap-16">
        <div className=" flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between" id="card-1">
          <div className="absolute top-[50%] left-[50%] translate-center w-full h-full animate-floating">
            <div className="relative w-full h-full preserve-3d">
              <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">Plan</span>
                  <span className="uppercase font-mono text-xs font-medium">01</span>
                </div>
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">01</span>
                  <span className="uppercase font-mono text-xs font-medium">Plan</span>
                </div>
              </div>
              <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">Plan</span>
                  <span className="uppercase font-mono text-xs font-medium">01</span>
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <p>Discovery</p>
                  <p>Audit</p>
                  <p>User Flow</p>
                  <p>Site Map</p>
                  <p>Personas</p>
                  <p>Strategy</p>
                </div>
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">01</span>
                  <span className="uppercase font-mono text-xs font-medium">Plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between" id="card-2">
          <div className="absolute top-[50%] left-[50%] translate-center w-full h-full animate-floating">
            <div className="relative w-full h-full preserve-3d">
              <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">Design</span>
                  <span className="uppercase font-mono text-xs font-medium">02</span>
                </div>
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">02</span>
                  <span className="uppercase font-mono text-xs font-medium">Design</span>
                </div>
              </div>
              <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">Design</span>
                  <span className="uppercase font-mono text-xs font-medium">02</span>
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <p>Wireframes</p>
                  <p>UI Kits</p>
                  <p>Prototypes</p>
                  <p>Visual Style</p>
                  <p>Interaction</p>
                  <p>Design QA</p>
                </div>
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">02</span>
                  <span className="uppercase font-mono text-xs font-medium">Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 relative aspect-[5/7] p-3 rounded-md flex flex-col justify-between" id="card-3">
          <div className="absolute top-[50%] left-[50%] translate-center w-full h-full animate-floating">
            <div className="relative w-full h-full preserve-3d">
              <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">Develop</span>
                  <span className="uppercase font-mono text-xs font-medium">03</span>
                </div>
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">03</span>
                  <span className="uppercase font-mono text-xs font-medium">Develop</span>
                </div>
              </div>
              <div className="absolute w-full h-full rounded backface-hidden overflow-hidden">
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">Develop</span>
                  <span className="uppercase font-mono text-xs font-medium">03</span>
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <p>HTML/CSS/JS</p>
                  <p>CMS Build</p>
                  <p>GSAP Motion</p>
                  <p>Responsive</p>
                  <p>Optimization</p>
                  <p>Launch</p>
                </div>
                <div className="w-full flex justify-between">
                  <span className="uppercase font-mono text-xs font-medium">03</span>
                  <span className="uppercase font-mono text-xs font-medium">Develop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <section className="relative w-screen h-[100svh] p-8 overflow-hidden flex justify-center
                    items-center bg-black text-white">

        </section>

        </>
    )
}

export default Turntile;