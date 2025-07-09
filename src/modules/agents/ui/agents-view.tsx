"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { ResponsiveDialog } from "@/components/response-dialog";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div>
      <ResponsiveDialog
        title="Responsive test"
        description="This is responsive description"
        open
        onOpenChange={() => {}}
      >
        <div className="flex flex-col">
          <Button>Close</Button>
        </div>
      </ResponsiveDialog>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export const AgentsLoadingState = () => {
  return (
    <LoadingState
      title="Loading agents"
      description="This may take few seconds"
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title="Error loading agents"
      description="Please try again later"
    />
  );
};
