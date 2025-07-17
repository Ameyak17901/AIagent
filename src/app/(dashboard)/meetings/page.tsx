import {
  MeetingsLoadingState,
  MeetingsView,
  MeetingsViewError,
} from "@/modules/meetings/ui/meetings-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Page = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<MeetingsLoadingState />}>
        <ErrorBoundary fallback={<MeetingsViewError />}>
          <MeetingsView />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
};
// o8Pe_vkaM0RFuJwtjENdP - agent id
// T60Sq5qiCViHe6uENSQs3McNWz3PvoMm - user

export default Page;
