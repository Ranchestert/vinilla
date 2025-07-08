import type { FC } from "react";
import type { Vinilla } from "../../api/vinilla";
import "./style.css";
import { Button } from "../Button";

interface IVinillaViewProps {
  vinilla: Vinilla;
  state?: "active" | "inactive";
}

export const VinillaView: FC<IVinillaViewProps> = ({
  vinilla,
  state = "inactive",
}) => {
  switch (state) {
    case "inactive":
      return (
        <div className="vinilla">
          <div className="closed-vinilla">
            <svg height="100" width="100" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circle"
                  d="M35,50
                        a15,15 0 1,1 30,0
                        a15,15 0 1,1 -30,0"
                />
              </defs>
              <path
                d="M5,0
                        l90,0
                        a5,5 0 0 1 5,5
                        l0,90
                        a5,5 0 0 1 -5,5
                        l-90,0
                        a5,5 0 0 1 -5,-5
                        l0,-90
                        a5,5 0 0 1 5,-5"
                fill="rgb(54, 54, 54)"
              />
              <path
                d="M4.76,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0
                        m9.52,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0
                        m9.52,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0
                        m9.52,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0
                        m9.52,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0
                        m9.52,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0
                        m9.52,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0
                        m9.52,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0
                        m9.52,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0
                        m9.52,0
                        l0,100
                        l4.76,0
                        l0,-100
                        l-4.76,0"
                fill="rgb(85, 85, 85)"
              />
              <path
                d="M25,50
                        a25,25 0 1,1 50,0
                        a25,25 0 1,1 -50,0"
                fill={vinilla.color}
              />
              <text fill={vinilla.fontColor} fontSize="12">
                <textPath href="#circle">{vinilla.title}</textPath>
              </text>
            </svg>
          </div>
          <div className="info">
            <div className="main-info">
              <p className="title">{vinilla.title}</p>
              <p className="artist">{vinilla.artist}</p>
            </div>
            <p className="qunatity">{vinilla.quantity} copies left</p>
            {vinilla.discount === 0 ? (
              <p className="no-discount">{vinilla.price}&nbsp;&#x20ac;</p>
            ) : (
              <div className="discount">
                <p className="oldPrice">{vinilla.price}&nbsp;&#x20ac;</p>
                <p className="newPrice">
                  {Math.round(vinilla.price * (1 - vinilla.discount) * 100) /
                    100}
                  &nbsp;&#x20ac;
                </p>
              </div>
            )}
          </div>
        </div>
      );
    case "active":
      return (
        <div className="vinilla">
          <div className="openedVinilla">
            <svg height="100" width="100" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circle"
                  d="M35,50
                        a15,15 0 1,1 30,0
                        a15,15 0 1,1 -30,0"
                />
              </defs>
              <path
                d="M0,50
                    a50,50 0 1,1 100,0
                    a50,50 0 1,1 -100,0"
                fill="rgb(54, 54, 54)"
              />
              <path
                d="M25,50
                        a25,25 0 1,1 50,0
                        a25,25 0 1,1 -50,0"
                fill={vinilla.color}
              />
              <text fill={vinilla.fontColor} fontSize="12">
                <textPath href="#circle">{vinilla.title}</textPath>
              </text>
            </svg>
          </div>
          <div className="info">
            <p className="title">{vinilla.title}</p>
            <p className="artist">{vinilla.artist}</p>
            <p className="qunatity">{vinilla.quantity} copies left</p>
            {vinilla.discount === 0 ? (
              <p className="no-discount">{vinilla.price}&nbsp;&#x20ac;</p>
            ) : (
              <div className="discount">
                <p className="oldPrice">{vinilla.price}&nbsp;&#x20ac;</p>
                <p className="newPrice">
                  {Math.round(vinilla.price * (1 - vinilla.discount) * 100) /
                    100}
                  &nbsp;&#x20ac;
                </p>
              </div>
            )}
            <Button kind="secondary">Add to the cart</Button>
          </div>
        </div>
      );
  }
};
