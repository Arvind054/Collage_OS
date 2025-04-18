import React from "react";
import {RulesPage} from "../../../components/RulesPage";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
export const dynamic = 'force-dynamic';

async function GeminiChat() {
    await new Promise((resolve) => { setTimeout(resolve, 1000) });

    // THIS WILL CREATE NEW QUERY CLIENT.
    // This is required only for our querying purpose
    const queryClient = new QueryClient(); 
    
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="m-10">
                <RulesPage></RulesPage>
            </div>
        </HydrationBoundary>
    );
};

export default GeminiChat;  