import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Button } from "@/components/ui/button";
import React from "react";

interface SearchParamsType {
  searchParams: {
    category?: string;
    search?: string;
  };
}

function HomePage({ searchParams }: SearchParamsType) {
  return (
    <section>
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <PropertiesContainer
        category={searchParams.category}
        search={searchParams.search}
      />
    </section>
  );
}

export default HomePage;
