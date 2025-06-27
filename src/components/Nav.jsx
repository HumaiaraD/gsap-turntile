

const Nav = () => {

    return (
        <>
          <nav className="fixed w-full p-[2rem] flex justify-between items-center z-[2]">
            <div className="logo">
                <span className="text-tiny p-2 rounded bg-black text-white">
                    Site Logo
                </span>
            </div>
            <div className="">
                <span className="text-tiny p-2 rounded bg-white text-black">
                    Menu
                </span>
            </div>
          </nav>
        </>
    )
}

export default Nav;