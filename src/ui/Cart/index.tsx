import { useState, type FC } from "react";
import type { VinylArray } from "../../api/vinyl";
import { Button } from "../Button";
import "./style.css";

interface ICartProps {
  list: VinylArray;
}

export const Cart: FC<ICartProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  let total = 0;
  list.forEach((item) => {
    total += Math.round(item.price * (1 - item.discount) * 100) / 100;
  });
  return (
    <div className="cart">
      {list.length !== 0 ? (
        <>
          <svg
            height="10"
            width="20"
            viewBox="0 0 20 10"
            className="open-close"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <path
              d={isOpen ? "M0,0 l10,10 l10,-10" : "M0,10 l10,-10 l10,10"}
              stroke="rgb(81, 81, 81)"
              strokeWidth="2"
              fill="white"
            />
          </svg>
          <div
            className="main-content"
            style={isOpen ? { display: "flex" } : { display: "none" }}
          >
            <table className="products">
              {list.map((item) => (
                <tr>
                  <td>{item.title}</td>
                  <td>
                    {Math.round(item.price * (1 - item.discount) * 100) / 100}
                    &nbsp;&#x20ac;
                  </td>
                </tr>
              ))}
            </table>
            <span className="total">
              Total:&nbsp;{Math.round(total * 100) / 100}&nbsp;&#x20ac;
            </span>
            <Button kind="primary">Buy</Button>
          </div>
        </>
      ) : (
        <p className="nothing">Nothing here yet</p>
      )}
    </div>
  );
};
