import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";
import { NuqsAdapter } from "nuqs"

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <SidebarProvider>
        <DashboardSidebar />
        <main className="flex flex-col h-screen w-screen bg-muted">
          <DashboardNavbar />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
