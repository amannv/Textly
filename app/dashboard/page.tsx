"use client";
import { Button } from "@/components/ui/button";
import LengthSelector from "@/components/LengthSelector";
import { Textarea } from "@/components/ui/textarea";
import ToneSelector from "@/components/ToneSelector";
import TypeSelector from "@/components/TypeSelector";

import { grammarPrompt, refinePrompt } from "../utils/prompt";
import { useRef, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [tone, setTone] = useState<string | null>(null);
  const [length, setLength] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleCorrectGrammar = async () => {
    const prompt = grammarPrompt({
      text: textRef.current?.value || "",
    });
    const response = await axios.post("/api/refine", {
      prompt,
    });
    if (response.data) {
      setResult(response.data as string);
    }
  };

  const handleRefineText = async () => {
    const prompt = refinePrompt({
      text: textRef.current?.value || "",
      tone: tone,
      postType: type,
      length: length,
    });
    const response = await axios.post("/api/refine", {
      prompt,
    });
    if (response.data) {
      setResult(response.data as string);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen max-w-2xl gap-6">
      <div>
        <h1 className="font-extrabold text-5xl text-white">
          paste your{" "}
          <span className="font-extrabold text-5xl text-primary">text </span>
          <span className="font-extrabold text-5xl text-white">below!</span>
        </h1>
      </div>
      <div className="w-full flex flex-col gap-4">
        <Textarea
          ref={textRef}
          placeholder="paste your text here!"
          className="bg-zinc-950 border border-zinc-500 text-white"
        />
        <div className="flex items-center justify-center w-full gap-2">
          <TypeSelector value={type} setValue={setType} />
          <ToneSelector value={tone} setValue={setTone} />
          <LengthSelector value={length} setValue={setLength} />
          <Button
            onClick={handleCorrectGrammar}
            variant={"default"}
            size={"lg"}
          >
            Correct Grammar
          </Button>
          <Button onClick={handleRefineText} variant={"default"} size={"lg"}>
            Refine
          </Button>
        </div>
      </div>
    </div>
  );
}
