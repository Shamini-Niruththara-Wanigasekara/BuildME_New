import React from 'react';
import BuilderComponent from "../../Components/BuilderComponent/builderComponents";
import BuilderCard from "../../Components/builderCard/builderCard";
const HomePage = ()=>{

    const builders = [
        {image:"/assets/img/Rectangle%206.png", text:"Plumber"},
        {image:"/assets/img/Rectangle%206.png", text:"Plumber"},
        {image:"/assets/img/Rectangle%206.png", text:"Plumber"},
        {image:"/assets/img/Rectangle%206.png", text:"Plumber"},
        {image:"/assets/img/Rectangle%206.png", text:"Plumber"},
        {image:"/assets/img/Rectangle%206.png", text:"Plumber"},
        {image:"/assets/img/Rectangle%206.png", text:"Plumber"}]

    return (

        <div className="container-fluid">
            <section className="container-fluid">
                <div className="row">
                    <div className="col">
                        <BuilderComponent/>
                    </div>
                </div>
            </section>
            <section className="container-fluid mt-3">
                <div className="row">
                    <div className="col text-center">
                        <h1>BUILDERS</h1>
                        <h3>Find the best suitable builder for your work.</h3>

                        <div className="row mt-5">
                            {builders.map((b,i)=>{
                                return <div className="col-3 mt-3 d-flex justify-content-center">
                                    <BuilderCard image={b.image} text={b.text} key={i}/>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default HomePage;