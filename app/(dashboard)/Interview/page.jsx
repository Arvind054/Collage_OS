import React from "react";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
export const dynamic = 'force-dynamic';

async function Interview() {
    await new Promise((resolve) => { setTimeout(resolve, 1000) });

    // THIS WILL CREATE NEW QUERY CLIENT.
    const queryClient = new QueryClient();
    
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <h1>Here we will have all Interview Section</h1>
        </HydrationBoundary>
    );
};
 
export default Interview;   