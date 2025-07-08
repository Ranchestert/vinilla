import { useState, type ReactElement } from "react";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import { GetVinillasArray } from "../../api/vinilla";
import { queryClient } from "../../api/queryClient";
import { VinillaListView } from "../VinillaListView";
import { Button } from "../../ui/Button";
import type { Vinilla, VinillaArray } from "../../api/vinilla";

export const VinillasPage = (): ReactElement => {
  const listQuery = useQuery(
    {
      queryFn: GetVinillasArray,
      queryKey: ["get", "vinillas"],
      retry: false
    },
    queryClient
  );

  const [cartList, setCartList] = useState<VinillaArray>([]);

  const handleCart = (vinilla: Vinilla): void => {
    if(cartList.filter(({id})=>id===vinilla.id).length === 0){
        setCartList([...cartList, vinilla])
    }
  }

  return (
    <>
      {listQuery.status === "pending" ? (
        <span className="list-loading">
          Please wait until list will be loaded
        </span>
      ) : (
        listQuery.status === "success" ? (
            <VinillaListView list={listQuery.data} handleCart={handleCart}/>
        ) : (
            <>
                <span className="error">Error occurred. Please try again</span>
                {console.log(listQuery.error.message)}
                <Button kind="secondary" onClick={()=>{
                    queryClient.invalidateQueries({queryKey: ["get","vinillas"]})
                }}>Try again</Button>
            </>
        )
      )}
    </>
  );
};
