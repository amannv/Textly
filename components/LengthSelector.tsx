import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Shorter", value: "shorter" },
  { label: "Same", value: "same" },
  { label: "Longer", value: "longer" },
];

export default function LengthSelector({
  value,
  setValue,
}: {
  value: string | null;
  setValue: (value: string | null) => void;
}) {
  return (
    <Select items={items} value={value} onValueChange={setValue}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select length" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Length</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
