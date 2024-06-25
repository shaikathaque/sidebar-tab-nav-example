import { Button } from "./ui/button";
import { Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4"/>
              <p>General</p>
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4"/>
              <p>Endpoints</p>
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4"/>
              <p>Tokens and Claims</p>
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}