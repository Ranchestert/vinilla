import type { FC } from "react"
import type { Vinilla, VinillaArray } from "../../api/vinilla"
import { VinillaView } from "../../ui/VinillaView"
import "./style.css"

interface IVinillaListViewProps{
    list: VinillaArray,
    handleCart: (vinilla: Vinilla, index:number) => void,
    stateList: ("active"|"inactive")[]
}

export const VinillaListView: FC<IVinillaListViewProps> = ({list, handleCart, stateList}) => {
    return (
        <ul className="array">
            {list.map((item,index)=>(<li key={item.id}><VinillaView vinilla={item} handleCart={handleCart} state={stateList[index]} index={index}/></li>))}
        </ul>
    )
}