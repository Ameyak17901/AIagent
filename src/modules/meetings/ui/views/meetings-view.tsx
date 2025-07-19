"use client";

import { DataTable } from "@/components/data-table";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";
import { useMeetingsFilter } from "../../hooks/use-meetings-filter";
import { DataPagination } from "@/components/data-pagination";
import { useRouter } from "next/navigation";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const [filters, setFilters] = useMeetingsFilter();
  const router = useRouter();

  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first meeting"
          description="Schedule a meeting to connect with others. Each meeting lets you collabarate, share ideas, and interact with participants in real time."
        />
      )}
    </div>
  );
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
