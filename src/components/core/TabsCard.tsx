import { useState } from "react";
// Components
import { Button } from "@/components/common/Button";

export default function TabsCard () {
    const [tab, setTab] = useState<number>(1);

    return (
        <section className="py-20 flex justify-center">
            <div className="w-1/3 bg-zinc-800 p-5 rounded-md">
                <div className="grid grid-cols-5">
                    <div className="col-span-2 space-y-4">
                        <Button 
                            onClick={() => tab !== 1 ? setTab(1) : null} 
                            size="full" 
                            variant={tab === 1 ? "destructive" : "secondary"}
                        >
                            Tab 1
                        </Button>
                        <Button 
                            onClick={() => tab !== 2 ? setTab(2) : null}
                            size="full" 
                            variant={tab === 2 ? "destructive" : "secondary"}
                        >
                            Tab 2
                        </Button>
                        <Button 
                            onClick={() => tab !== 3 ? setTab(3) : null}
                            size="full" 
                            variant={tab === 3 ? "destructive" : "secondary"}
                        >
                            Tab 3
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};