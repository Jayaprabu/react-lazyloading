import {lazy, Suspense} from "react";
const LazyInfo = lazy(() => import('./lazyInfo'));


const LazyLoading = () => {
    return (
        <div className="App">
           <h1>Lazy Loading</h1>
           <Suspense fallback={<div>Loading...</div>}>
              <LazyInfo />
           </Suspense>
        </div>
     );
 }

 export default LazyLoading;