import { Link } from "react-router-dom";
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
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="endpoints">
                <AccordionTrigger>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    Endpoints
                  </Button>
                </AccordionTrigger>
                <AccordionContent>
                  <Link to="/endpoints/globalSettings">
                    <Button variant="ghost" className="w-full justify-start">
                      Global Settings
                    </Button>
                  </Link>
                  <Link to="/endpoints/authorization">
                    <Button variant="ghost" className="w-full justify-start">
                      Authorization
                    </Button>
                  </Link>
                  <Link to="/endpoints/token">
                    <Button variant="ghost" className="w-full justify-start">
                      Token
                    </Button>
                  </Link>
                  <Link to="/endpoints/general">
                    <Button variant="ghost" className="w-full justify-start">
                      General
                    </Button>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tokensAndClaims">
                <AccordionTrigger>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4"/>
                    Tokens and Claims
                  </Button>
                </AccordionTrigger>
                <AccordionContent>
                  <Link to="/tokensAndClaims/accessToken">
                    <Button variant="ghost" className="w-full justify-start">
                      Access Token
                    </Button>
                  </Link>
                  <Link to="/tokensAndClaims/claims">
                    <Button variant="ghost" className="w-full justify-start">
                      Claims
                    </Button>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}