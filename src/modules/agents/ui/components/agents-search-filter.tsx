import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAgentsFilter } from "@/modules/agents/hooks/use-agents-filter";


export const AgentsSearchFilter = () => {

    const [filters, setFilters] = useAgentsFilter();
    return (
        <div className="relative">
            <Input
              placeholder="Filter by name"
              className="h-9 bg-white w-[200px] pl-7" 
              value={filters.search}
              onChange={(event) => setFilters({ search: event?.target.value })} 
            />
            <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
    )
}
