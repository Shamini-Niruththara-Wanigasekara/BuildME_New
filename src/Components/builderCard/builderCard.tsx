import React from 'react';
import './builderCard.css';

interface BuilderComponentProps {
    image:string;
    text:string;
}

const BuilderCard: React.FC<BuilderComponentProps> = (props) => {
    return (
        <div className="builder-card" style={{
            backgroundImage: `url(${props.image})`
        }} >
            <h3>{props.text}</h3>

        </div>
    );
};

export default BuilderCard;

