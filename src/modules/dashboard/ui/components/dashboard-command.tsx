import {
  CommandResponsiveDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search agents and meetings" className="h-5" />
      <CommandList>
        <CommandItem>Test 1</CommandItem>
        <CommandItem>Test 2</CommandItem>
        <CommandItem>Test 3</CommandItem>
        <CommandItem>Test 4</CommandItem>
        <CommandItem>Test 5</CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  );
};
