import { GeneratedAvatar } from "@/components/generated-avatar";
import { useMeetingsFilter } from "../../hooks/use-meetings-filter";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { useState } from "react";
import { CommandSelect } from "@/components/command-select";

export const AgentIdFilter = () => {
  const [filters, setFilters] = useMeetingsFilter();

  const [agentSearch, setAgentSearch] = useState("");
  const trpc = useTRPC();
  const { data } = useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search: agentSearch,
    })
  );

  return (
    <CommandSelect
      placeholder="Agent"
      className="h-9"
      options={(data?.items ?? []).map((agent) => ({
        id: agent.id,
        value: agent.id,
        children: (
          <div className="flex items-center gap-x-2">
            <GeneratedAvatar
              seed={agent.name}
              variant="botttsNeutral"
              className="size-4"
            />
            <span>{agent.name}</span>
          </div>
        ),
      }))}
      onSelect={(value) => setFilters({ agentId: value })}
      onSearch={setAgentSearch}
      value={filters.agentId ?? ""}
    />
  );
};
