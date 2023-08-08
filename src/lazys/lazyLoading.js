import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const LazyLoad = (importFunc, props = undefined) => {
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 1500);
    });
  });
  //const LazyComponent = lazy(importFunc);

  return () => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props}/>
    </Suspense>
  );
};

export default LazyLoad;
