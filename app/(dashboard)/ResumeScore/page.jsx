import React from "react";
import ResumeATS_Score from "../../../components/ResumeATS_Score";
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
                {/*Resume  ATS Score  */}
                <ResumeATS_Score></ResumeATS_Score> 
            </div>
        </HydrationBoundary>
    );
};
 
export default ResumeScore;  