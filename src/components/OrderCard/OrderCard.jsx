import React from "react";

const OrderCard = (props) => {
  const styleStatus = props.status ? "text-green-600" : "text-red-600";
  return (
    <div className="bg-white p-3 text-black rounded-lg">
      <h3 className="">
        <span className="font-semibold">ID:</span> {props.id}
      </h3>
      <div className="flex justify-around items-center gap-5">
        <p className=" text-slate-400">{props.time}</p>
        <p>
          Status:{" "}
          <span className={styleStatus}>
            {props.status ? "Active" : "Inactive"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
