import type { FC } from "react"
import type { Vinilla, VinillaArray } from "../../api/vinilla"
import { VinillaView } from "../../ui/VinillaView"
import "./style.css"

interface IVinillaListViewProps{
    list: VinillaArray,
    handleCart: (vinilla: Vinilla) => void
}

export const VinillaListView: FC<IVinillaListViewProps> = ({list, handleCart}) => {
    return (
        <ul className="array">
            {list.map((item)=>(<li key={item.id}><VinillaView vinilla={item} handleCart={handleCart}/></li>))}
        </ul>
    )
}