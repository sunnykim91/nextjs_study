"use client";

import { useState } from "react";

export default function List() {
    let 상품 = ["Tomatoes", "Pasta", "coconut"];
    let 수량 = 0;
    let [amount, setAmount] = useState([0, 0, 0]);
    return (
        <div>
            <h2 className="title">상품 목록</h2>
            {상품.map((el: string, index: number) => {
                return (
                    <div key={el} className="food">
                        <img
                            className="food-img"
                            src={`/food${index}.png`}
                            alt="foodImage"
                        />
                        <h4>{el} $40</h4>
                        <span>{amount[index]}</span>
                        <button
                            onClick={() => {
                                let copy = [...amount];
                                copy[index]++;
                                setAmount(copy);
                            }}
                        >
                            +
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
