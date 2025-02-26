import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Rocket, AlertTriangle, Wrench, ChevronUp, Zap } from "lucide-react";
import type { Spacecraft } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { spacecraftSubject, type Observer } from "@/lib/patterns/observer";
import { useToast } from "@/hooks/use-toast";

interface Props {
  spacecraft: Spacecraft;
}

const getStatusColor = (health: number) => {
  if (health <= 20) return "text-red-500";
  if (health <= 50) return "text-yellow-500";
  return "text-green-500";
};

const getTypeTranslation = (type: string) => {
  switch (type) {
    case "Explorer": return "Исследовательский";
    case "Battleship": return "Боевой крейсер";
    case "Cargo": return "Грузовой";
    default: return type;
  }
};

export default function SpacecraftCard({ spacecraft: initialSpacecraft }: Props) {
  const [spacecraft, setSpacecraft] = useState(initialSpacecraft);
  const { toast } = useToast();
  const statusColor = getStatusColor(spacecraft.health);
  const [repairCooldown, setRepairCooldown] = useState(false);
  const [upgradeCooldown, setUpgradeCooldown] = useState(false);

  useEffect(() => {
    const observer: Observer = {
      update: (updatedSpacecraft: Spacecraft) => {
        if (updatedSpacecraft.id === spacecraft.id) {
          setSpacecraft(updatedSpacecraft);
        }
      }
    };

    spacecraftSubject.attach(observer);
    return () => spacecraftSubject.detach(observer);
  }, [spacecraft.id]);

  const deleteMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("DELETE", `/api/spacecrafts/${spacecraft.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/spacecrafts"] });
      toast({ title: "Успех", description: "Корабль списан" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (update: Partial<Spacecraft>) => {
      return apiRequest("PATCH", `/api/spacecrafts/${spacecraft.id}`, update);
    },
    onSuccess: async (response) => {
      const updated = await response.json();
      spacecraftSubject.setSpacecraft(updated);
      queryClient.invalidateQueries({ queryKey: ["/api/spacecrafts"] });
    },
  });

  const simulateDamage = () => {
    const attackType = Math.random() > 0.7 ? "critical" : "normal";
    const damage = attackType === "critical"
      ? Math.floor(Math.random() * 40) + 20
      : Math.floor(Math.random() * 20) + 10;
    const shieldDamage = Math.floor(Math.random() * 25) + 15;

    const health = Math.max(0, spacecraft.health - damage);
    const shield = Math.max(0, spacecraft.shield - shieldDamage);

    updateMutation.mutate({ health, shield });

    if (attackType === "critical") {
      toast({
        title: "Критическое попадание!",
        description: "Корабль получил серьезные повреждения",
        variant: "destructive"
      });
    }

    if (health <= 20) {
      toast({
        title: "Критическое состояние!",
        description: "Корабль нуждается в срочном ремонте",
        variant: "destructive"
      });
    }
  };

  const repair = () => {
    if (repairCooldown) return;

    const repairAmount = Math.floor(Math.random() * 30) + 20;
    const newHealth = Math.min(100, spacecraft.health + repairAmount);

    updateMutation.mutate({ health: newHealth });
    setRepairCooldown(true);

    toast({
      title: "Ремонт завершен",
      description: `Восстановлено ${repairAmount}% прочности`
    });

    setTimeout(() => setRepairCooldown(false), 10000);
  };

  const upgradeShields = () => {
    if (upgradeCooldown) return;

    const upgradeAmount = Math.floor(Math.random() * 20) + 10;
    const newShield = Math.min(150, spacecraft.shield + upgradeAmount);

    updateMutation.mutate({ shield: newShield });
    setUpgradeCooldown(true);

    toast({
      title: "Щиты усилены",
      description: `Мощность щитов увеличена на ${upgradeAmount}%`
    });

    setTimeout(() => setUpgradeCooldown(false), 15000);
  };

  return (
    <Card className={`overflow-hidden backdrop-blur-sm border-primary/20 transition-all duration-300 hover:border-primary/40 ${spacecraft.health <= 20 ? 'animate-pulse border-red-500/50' : ''}`}>
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            {spacecraft.name}
            {spacecraft.health <= 20 && (
              <AlertTriangle className="h-5 w-5 text-red-500" />
            )}
          </span>
          <span className="text-sm font-normal text-white/70 hover:text-white transition-colors">
            {getTypeTranslation(spacecraft.type)}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Heart className={`h-4 w-4 ${statusColor}`} />
            <Progress value={spacecraft.health} className="h-2" />
            <span className="text-sm">{spacecraft.health}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-500" />
            <Progress value={spacecraft.shield} className="h-2" />
            <span className="text-sm">{spacecraft.shield}%</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 pb-4">
        <Button
          variant="secondary"
          size="sm"
          onClick={simulateDamage}
          disabled={spacecraft.health === 0 || updateMutation.isPending}
          className="flex-1"
        >
          <Rocket className="h-4 w-4 mr-2" />
          Симулировать атаку
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={repair}
          disabled={repairCooldown || spacecraft.health >= 100 || updateMutation.isPending}
          className="flex-1"
        >
          <Wrench className="h-4 w-4 mr-2" />
          Ремонт
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={upgradeShields}
          disabled={upgradeCooldown || spacecraft.shield >= 150 || updateMutation.isPending}
          className="flex-1"
        >
          <ChevronUp className="h-4 w-4 mr-2" />
          Усилить щиты
        </Button>

        <Button
          variant="destructive"
          size="sm"
          onClick={() => deleteMutation.mutate()}
          disabled={deleteMutation.isPending}
        >
          <Zap className="h-4 w-4 mr-2" />
          Списать
        </Button>
      </CardFooter>
    </Card>
  );
}