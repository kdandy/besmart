import Sp01 from "./images/sp01.png"
import Sp02 from "./images/sp02.png"
import Sp03 from "./images/sp03.png"
import Sp04 from "./images/sp04.png"

export const Sponsor = ()=>{
    return(
        <>

        <div className="flex justify-around md:justify-center items-center w-full h-40 bg-gray-200">

            <div className=" gap-4 w-9/12">
                <div className="grid grid-cols-2 md:grid-cols-4 items-center">
                <img src={Sp01} alt="sponsor" className="w-20"/>
                <img src={Sp02} alt="sponsor"className="w-28 ml-2 lg:ml-0"/>
                <img src={Sp03} alt="sponsor" className="w-20 "/>
                <img src={Sp04} alt="sponsor" className="w-40"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sponsor