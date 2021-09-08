import React from "react";

const Numbers = ({ numbers, onClick, onReset }) => {
    return (
        <div className="numbers">
            {numbers.map((number) =>
                number !== "AC" ? (
                    <div key={number} onClick={() => onClick(number, "number")}>
                        {number}
                    </div>
                ) : (
                    <div key={number} onClick={() => onReset()}>
                        {number}
                    </div>
                )
            )}
        </div>
    );
};

export default Numbers;
