import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Settings } from 'lucide-react';

type Item = {
  title: string
}

type Props = {
  items: Item[]
}

export default function Sidebar({ items }: Props) {
  return (
    <div className="pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {/* {items.map((item, index) => (
              <>
                <Button key={index} variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4"/>
                  <p>{item.title}</p>
                </Button>
              </>
            ))} */}
            <>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    <p>Item A</p>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    <p>Item B</p>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    <p>Item C</p>
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    <p>Item A</p>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    <p>Item B</p>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    <p>Item C</p>
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    <p>Item A</p>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    <p>Item B</p>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    <p>Item C</p>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </>
          </div>
        </div>
      </div>
    </div>
  )
}