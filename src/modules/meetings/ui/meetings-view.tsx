"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const MeetingsView = () => {
  const trpc = useTRPC();

  const { data } = useQuery(trpc.meetings.getMany.queryOptions({}));

  return <div>{JSON.stringify(data)}</div>;
};

export const MeetingsLoadingState = () => {
  return (
    <LoadingState
      title="Loading Meetings"
      description="This may take few seconds"
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error loading Meetings"
      description="Please try again later"
    />
  );
};
