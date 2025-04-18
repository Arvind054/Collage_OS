import React from "react";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
export const dynamic = 'force-dynamic';
import Complain from "../../../components/Complain";
import toast, { Toaster } from 'react-hot-toast';

async function Complaints() {
    await new Promise((resolve) => { setTimeout(resolve, 1000) });

    const queryClient = new QueryClient();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Complain></Complain>
            <Toaster />
        </HydrationBoundary>
    );
};
 
export default Complaints;   