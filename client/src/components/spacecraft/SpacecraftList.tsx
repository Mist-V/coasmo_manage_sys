import { useQuery } from "@tanstack/react-query";
import type { Spacecraft } from "@shared/schema";
import SpacecraftCard from "./SpacecraftCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function SpacecraftList() {
  const { data: spacecrafts, isLoading } = useQuery<Spacecraft[]>({
    queryKey: ["/api/spacecrafts"],
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Активный флот</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[200px] w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Активный флот</h2>
      {spacecrafts?.length === 0 ? (
        <div className="text-center p-8 border-2 border-dashed border-primary/20 rounded-lg">
          <p className="text-white/90">Космический флот пуст</p>
          <p className="text-sm text-white/70">Зарегистрируйте новый корабль</p>
        </div>
      ) : (
        <div className="space-y-4">
          {spacecrafts?.map((spacecraft) => (
            <SpacecraftCard key={spacecraft.id} spacecraft={spacecraft} />
          ))}
        </div>
      )}
    </div>
  );
}