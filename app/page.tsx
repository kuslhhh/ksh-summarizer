"use client"

import Hero from "@/components/hero";
import Search from "@/components/search";
import { store } from "@/utils/services/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <section className="flex flex-col size-full my-auto cursor-default">
        <Hero/>
        <div className="wrapper flex flex-col">
          <p className="text-xl md:text-3xl text-primary/80">
            Enhance your reading experience with {" "}
            <span className="underline text-foreground/80 hover:underline-offset-4">
              KSH
            </span>
            , an innovative open-source article summarizer
          </p>
        </div>
        <div className="flex flex-row my-auto">
          <Search/>
        </div>
      </section>
    </Provider>
  );
}
