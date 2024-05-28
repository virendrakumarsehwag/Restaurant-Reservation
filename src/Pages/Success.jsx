import react, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate();

    useEffect(()=>{

        const timeOutId = setInterval(()=>{
            setCountdown(preCount=>{
                if(preCount=== 1){
                    clearInterval(timeOutId)
                    navigate("/")
                }
                return preCount -1;
            });

        },1000);
        return ()=> clearInterval(timeOutId);
    },[navigate]);
    return <>
    <section className="notFound">
        <div>
            <div className="container">
                <img src="/sandwich.png" alt="success" />
                <h1>Redirecting to Home in {countdown} seconds...</h1>
                <Link to={"/"}>Back to Home<HiOutlineArrowNarrowRight/></Link>
            </div>
        </div>
    </section>
        
        </>
};

export default Success;