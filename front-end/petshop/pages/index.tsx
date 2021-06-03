import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  Navbar,
  SearchBar,
  CardProductMap,
  Footer,
} from "../components";

import { updateSectionsStore, updateCategoriesStore } from "../actions";

import { END_POINT } from "../common/defs";

import getPetShopDatabase from "../services/getPetShopDatabase";
import { initialState } from "../common/interfaces";

export default function Home() {
  const { sections, categories } = useSelector((state: initialState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    async function updateStoreGlobal() {
      const { categories, sections } = await getPetShopDatabase(END_POINT);
      dispatch(updateSectionsStore(sections));
      dispatch(updateCategoriesStore(categories));
    }
    updateStoreGlobal();
  }, []);

  return (
    <>
      <Header disableDetailsScreen={true} />
      <Navbar categories={categories} />
      <SearchBar />
      <CardProductMap sections={sections} categories={categories} />
      <Footer />
    </>
  );
}
