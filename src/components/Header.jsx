import { IoIosAddCircle } from "react-icons/io";

function Header(){
    return(
        <>
            <header className="w-100 bg-black text-light py-2 px-4 shadow">
                <div className="w-100 d-flex flex-column align-items-center ">
                    <div className="w-100">
                        <p>The future is now</p>
                    </div>
                    <h2 className=" w-70 my-3 text-center fw-bolder" style={{fontFamily: 'Anybody'}} >connecting knowledge for
                    a green future</h2>
                </div>
                <div className="w-100 row d-flex">
                    <IoIosAddCircle className="" style={{ width: '65px', height: '65px'}}  />
                </div>
            </header>
        </>
    )
}

export default Header