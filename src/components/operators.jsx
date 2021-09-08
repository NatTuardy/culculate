import React from "react";

const Symbol = ({ symbol, onClick }) => {
    return <div onClick={() => onClick(symbol, "operator")}>{symbol}</div>;
};

export default Symbol;
