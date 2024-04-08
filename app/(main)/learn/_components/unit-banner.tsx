import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";

interface UnitBannerProps {
  title: string;
  description: string;
}

export const UnitBanner = ({
  title,
  description,
}: UnitBannerProps) => {
  return (
    <div className="w-full rounded-xl bg-emerald-500 p-5 text.white items-center justify-center">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>
        <p className="text-lg">
          {description}
        </p>
      </div>
      <Link href="/lesson">
        <Button
          size="lg"
          variant="secondary"
          className="hidden xl:flex border-2 border-b-4 active:border-b-2"
        >
          <NotebookText className="mr-2" />
          Continue
        </Button>
      </Link>
    </div>
  );
};