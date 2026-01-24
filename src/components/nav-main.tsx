
import { ChevronRight, FileText, Folder } from "lucide-react"
import Link from '@docusaurus/Link';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// Simple recursive component for rendering sidebar items
function SidebarItemRenderer({ item }: { item: any }) {
  // If it has "items" array, treat as category
  if (item.items && item.items.length > 0) {
    return (
      <Collapsible
        key={item.label}
        asChild
        defaultOpen={!item.collapsed}
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={item.label}>
              <Folder className="mr-2 size-4" />
              <span>{item.label}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items.map((subItem: any, index: number) => (
                <SidebarItemRenderer key={index} item={subItem} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    )
  }

  // Otherwise treat as link
  return (
    <SidebarMenuItem key={item.label}>
      <SidebarMenuButton asChild isActive={item.active} tooltip={item.label}>
        <Link to={item.href}>
          <FileText className="mr-2 size-4" />
          <span>{item.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export function NavMain({ items }: { items: any[] }) {
  if (!items || !items.length) return null

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Documentation</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, index) => (
          <SidebarItemRenderer key={index} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

