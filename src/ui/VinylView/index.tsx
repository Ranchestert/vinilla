import type { FC } from "react";
import type { Vinyl } from "../../api/vinyl";
import "./style.css";
import { Button } from "../Button";

interface IVinylViewProps {
  vinyl: Vinyl;
  state?: "active" | "inactive";
  handleCart: (vinilla: Vinyl, index: number) => void;
  index: number;
}

export const VinylView: FC<IVinylViewProps> = ({
  vinyl,
  state = "inactive",
  handleCart,
  index,
}) => {
  const handleClick = () => {
    state = state === "inactive" ? "active" : "inactive";
    handleCart(vinyl, index);
  };

  switch (state) {
    case "inactive":
      return (
        <div className="vinyl">
          <div className="closed-vinyl">
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
                fill={vinyl.color}
              />
              <text fill={vinyl.fontColor} fontSize="12">
                <textPath href="#circle">{vinyl.title}</textPath>
              </text>
            </svg>
          </div>
          <div className="info">
            <div className="main-info">
              <p className="title">{vinyl.title}</p>
              <p className="artist">{vinyl.artist}</p>
            </div>
            <p className="qunatity">{vinyl.quantity} copies left</p>
            {vinyl.discount === 0 ? (
              <p className="no-discount">{vinyl.price}&nbsp;&#x20ac;</p>
            ) : (
              <div className="discount">
                <p className="oldPrice">{vinyl.price}&nbsp;&#x20ac;</p>
                <p className="newPrice">
                  {Math.round(vinyl.price * (1 - vinyl.discount) * 100) /
                    100}
                  &nbsp;&#x20ac;
                </p>
              </div>
            )}
          </div>
          <Button kind="secondary" onClick={handleClick}>
            Add to the cart
          </Button>
        </div>
      );
    case "active":
      return (
        <div className="vinyl">
          <div className="openedVinyl">
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
                d="M5,50
                    a45,45 0 1,1 90,0
                    a45,45 0 1,1 -90,0
                    m5,0
                    a40,40 0 1,1 80,0
                    a40,40 0 1,1 -80 0
                    m5,0
                    a35,35 0 1,1 70,0
                    a35,35 0 1,1 -70,0
                    m5,0
                    a30,30 0 1,1 60,0
                    a30,30 0 1,1 -60,0"
                stroke="rgb(85, 85, 85)"
                strokeWidth="1"
                fill="rgb(54, 54, 54)"
              />
              <path
                d="M25,50
                        a25,25 0 1,1 50,0
                        a25,25 0 1,1 -50,0"
                fill={vinyl.color}
              />
              <text fill={vinyl.fontColor} fontSize="12">
                <textPath href="#circle">{vinyl.title}</textPath>
              </text>
            </svg>
          </div>
          <div className="info">
            <div className="main-info">
              <p className="title">{vinyl.title}</p>
              <p className="artist">{vinyl.artist}</p>
            </div>
            <p className="qunatity">{vinyl.quantity} copies left</p>
            {vinyl.discount === 0 ? (
              <p className="no-discount">{vinyl.price}&nbsp;&#x20ac;</p>
            ) : (
              <div className="discount">
                <p className="oldPrice">{vinyl.price}&nbsp;&#x20ac;</p>
                <p className="newPrice">
                  {Math.round(vinyl.price * (1 - vinyl.discount) * 100) /
                    100}
                  &nbsp;&#x20ac;
                </p>
              </div>
            )}
          </div>
          <Button kind="secondary" onClick={handleClick}>
            Remove from the cart
          </Button>
        </div>
      );
  }
};
