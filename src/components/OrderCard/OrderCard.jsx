import React from "react";

const OrderCard = (props) => {
  const cancelOrder = (id) => {
    console.log(id);
  };
  const styleStatus =
    props.status === "in progress" ? "text-green-600" : "text-slate-500";
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
            {props.status === "canceled" ? (
              <del>{props.status}</del>
            ) : (
              <>{props.status}</>
            )}
          </span>
        </p>
      </div>
      <button
        className=" bg-slate-300 w-full p-1 rounded-md"
        onClick={() => {
          cancelOrder(props.id);
        }}
      >
        Cancel order
      </button>
    </div>
  );
};

export default OrderCard;
