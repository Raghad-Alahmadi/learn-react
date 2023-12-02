import React from 'react';


function Header(){


    const client = "Designer";

    const tit_des = "Design ";
    const tit_prg = "Programming ";

    const title ={
        designer:"Design ",
        programmer: "Programming "
    }

    const info = {
        name: "Raghad",
        nick: "Alahmadi"
    }

    return(

        <div className="navbar bg-dark rounded text-white">
            Hello {`${info.name}  ${info.nick}`}
            <h2 >
                {client == "Designer" ? title.designer : title.programmer}
            is my life.</h2>
        </div>

    );
}

export default Header;

