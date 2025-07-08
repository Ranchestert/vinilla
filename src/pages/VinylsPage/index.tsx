import { useEffect, useState, type ReactElement } from "react";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import { GetVinylsArray } from "../../api/vinyl.ts";
import { queryClient } from "../../api/queryClient";
import { VinylListView } from "../VinylListView";
import { Button } from "../../ui/Button";
import type { Vinyl, VinylArray } from "../../api/vinyl.ts";
import { Cart } from "../../ui/Cart";

export const VinylsPage = (): ReactElement => {
  const listQuery = useQuery(
    {
      queryFn: GetVinylsArray,
      queryKey: ["vinyls"],
      retry: false,
    },
    queryClient
  );

  const [cartList, setCartList] = useState<VinylArray>([]);
  const [stateList, setStateList] = useState<("active" | "inactive")[]>([]);

  const handleCart = (vinyl: Vinyl, index: number): void => {
    setStateList(
      stateList.map((item, ind) =>
        ind === index ? (item === "active" ? "inactive" : "active") : item
      )
    );
    if (cartList.filter(({ id }) => id === vinyl.id).length === 0) {
      setCartList([...cartList, vinyl]);
    } else {
      setCartList(cartList.filter((item) => item !== vinyl));
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
        <VinylListView
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
              queryClient.invalidateQueries({ queryKey: ["vinyls"] });
            }}
          >
            Try again
          </Button>
        </>
      )}

      <Cart list={cartList} />
    </>
  );
};
