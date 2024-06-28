import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Settings } from 'lucide-react';

type SidebarItem = {
  title: string
  path: string
}

export type SidebarSection = {
  title: string
  items: SidebarItem[]
  value: string
}

type SidebarProps = {
  sidebarData: SidebarSection[]
}


export default function Sidebar({ sidebarData }: SidebarProps) {
  return (
    <div className="pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Accordion type="single" collapsible className="w-full">
              {sidebarData.map((section) => {
                return (
                  <AccordionItem key={section.value} value={section.value}>
                    <AccordionTrigger>
                      <Button variant="ghost" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4"/>
                        {section.title}
                      </Button>
                    </AccordionTrigger>
                    <AccordionContent>
                      {section.items.map((item) => {
                        return (
                          <Link key={item.title} to={item.path}>
                            <Button variant="ghost" className="w-full justify-start">
                              {item.title}
                            </Button>
                          </Link>
                        )
                      })}
                    </AccordionContent>
                
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
