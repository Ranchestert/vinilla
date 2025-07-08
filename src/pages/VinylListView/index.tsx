import type { FC } from "react";
import type { Vinyl, VinylArray } from "../../api/vinyl";
import { VinylView } from "../../ui/VinylView";
import "./style.css";

interface IVinylListViewProps {
  list: VinylArray;
  handleCart: (vinyl: Vinyl, index: number) => void;
  stateList: ("active" | "inactive")[];
}

export const VinylListView: FC<IVinylListViewProps> = ({
  list,
  handleCart,
  stateList,
}) => {
  return (
    <ul className="array">
      {list.map((item, index) => (
        <li key={item.id}>
          <VinylView
            vinyl={item}
            handleCart={handleCart}
            state={stateList[index]}
            index={index}
          />
        </li>
      ))}
    </ul>
  );
};
