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
            {items.map((item, index) => (
              <>
                <Button key={index} variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4"/>
                  <p>{item.title}</p>
                </Button>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}