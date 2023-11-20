import React from 'react';
import './builderComponent.css';

interface BuilderComponentProps { }

const BuilderComponent: React.FC<BuilderComponentProps> = () => {
  return (
    <div className="builder-component container-fluid" style={{background:"#FFF5F5"}}>
        <div className="row align-items-center">
            <div className="col col-5">

                <h1>DO YOU FIND FOR</h1>
                <h1>A Builder or are you a builder?</h1>
                <p className="w-lg-50">Get started on your construction journey today! Explore our website to discover our wide range of services, read testimonials from satisfied clients, and connect with us for any inquiries.</p>
                <div>
                    <div className="row mt-3">
                        <div className="col">
                            <button className="builder_button">Create Your Profile as a Customer</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <button className="builder_button">Create Your Profile as a Builder</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col d-flex justify-content-end">
                <img src="./assets/img/pngwing 1.png" alt="Builder image" />
            </div>
        </div>
    </div>
  );
};

export default BuilderComponent;

