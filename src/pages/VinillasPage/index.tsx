import { useEffect, useState, type ReactElement } from "react";
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
      queryKey: ["vinillas"],
      retry: false,
    },
    queryClient
  );

  const [cartList, setCartList] = useState<VinillaArray>([]);
  const [stateList, setStateList] = useState<("active" | "inactive")[]>([]);

  const handleCart = (vinilla: Vinilla, index: number): void => {
    setStateList(
      stateList.map((item, ind) =>
        ind === index ? (item === "active" ? "inactive" : "active") : item
      )
    );
    if (cartList.filter(({ id }) => id === vinilla.id).length === 0) {
      setCartList([...cartList, vinilla]);
    } else {
      setCartList(cartList.filter((item) => item !== vinilla));
    }
  };
  useEffect(() => {
    if (listQuery.status === "success" && stateList.length === 0) {
      setStateList(Array(listQuery.data.length).fill("inactive"));
    }
  }, [listQuery.status, listQuery.data, stateList.length]);

  return (
    <>
      {listQuery.status === "pending" ? (
        <span className="list-loading">
          Please wait until list will be loaded
        </span>
      ) : listQuery.status === "success" ? (
        <VinillaListView
          list={listQuery.data}
          handleCart={handleCart}
          stateList={stateList}
        />
      ) : (
        <>
          <span className="error">Error occurred. Please try again</span>
          <Button
            kind="secondary"
            onClick={() => {
              queryClient.invalidateQueries({ queryKey: ["vinillas"] });
            }}
          >
            Try again
          </Button>
        </>
      )}
    </>
  );
};
