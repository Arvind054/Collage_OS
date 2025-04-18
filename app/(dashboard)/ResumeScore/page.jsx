import React from "react";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
export const dynamic = 'force-dynamic';

async function ResumeScore() {
    await new Promise((resolve) => { setTimeout(resolve, 1000) });

    // THIS WILL CREATE NEW QUERY CLIENT.
    const queryClient = new QueryClient();
    
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="m-8">
               {/* <ResumeScore></ResumeScore> */}
               <h1>Here we will add Resume ATS Score</h1>
            </div>
        </HydrationBoundary>
    );
};
 
export default ResumeScore;  