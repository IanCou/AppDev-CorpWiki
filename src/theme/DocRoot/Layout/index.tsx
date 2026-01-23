import React, { Fragment } from 'react';
import { useDocsSidebar, useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import { AppSidebar } from '@/components/app-sidebar';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function DocRootLayout({ children }: { children: React.ReactNode }) {
    const sidebar = useDocsSidebar();
    const breadcrumbs = useSidebarBreadcrumbs();

    return (
        <SidebarProvider className="h-svh overflow-hidden">
            <AppSidebar items={sidebar?.items || []} />
            <SidebarInset className="overflow-hidden">
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-6">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs?.map((item, idx) => {
                                    const isLast = idx === breadcrumbs.length - 1;
                                    return (
                                        <Fragment key={idx}>
                                            <BreadcrumbItem className="hidden md:block">
                                                {isLast ? (
                                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                                ) : (
                                                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                                                )}
                                            </BreadcrumbItem>
                                            {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
                                        </Fragment>
                                    );
                                })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-6 pt-0 overflow-y-auto">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
