import { Button } from "@/components/ui/button";
import LengthSelector from "@/components/ui/lenghselector";
import { Textarea } from "@/components/ui/textarea";
import ToneSelector from "@/components/ui/toneselector";
import TypeSelector from "@/components/ui/typeselector";


export default function Dashboard() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen max-w-2xl gap-6">
            <div>
                <h1 className="font-extrabold text-5xl text-white">paste your <span className="font-extrabold text-5xl text-primary">text </span><span className="font-extrabold text-5xl text-white">below!</span></h1>
            </div>
            <div className="w-full flex flex-col gap-4">
                <Textarea placeholder="paste your text here!" className="bg-zinc-950 border border-zinc-500 text-white"/>
                <div className="flex items-center justify-center w-full gap-2">
                    <TypeSelector />
                    <ToneSelector />
                    <LengthSelector />
                    <Button variant={"default"} size={"lg"} >Correct Grammar</Button>
                    <Button variant={"default"} size={"lg"}>Refine</Button>
                </div>
            </div>

        </div>
    )
}