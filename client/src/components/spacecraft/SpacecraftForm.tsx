import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertSpacecraftSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { factories } from "@/lib/patterns/factory";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  onSecretCodeEntered?: (showDocs: boolean) => void;
}

export default function SpacecraftForm({ onSecretCodeEntered }: Props) {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertSpacecraftSchema),
    defaultValues: {
      name: "",
      type: "Explorer",
      status: "Ready",
      health: 100,
      shield: 80,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (values: any) => {
      // Проверяем секретный код
      if (values.name.toLowerCase() === "docs") {
        onSecretCodeEntered?.(true);
        return new Promise((resolve) => resolve(null));
      } else if (onSecretCodeEntered) {
        onSecretCodeEntered(false);
      }

      const factory = factories[values.type as keyof typeof factories];
      const spacecraft = factory.createSpacecraft(values.name);
      return apiRequest("POST", "/api/spacecrafts", spacecraft);
    },
    onSuccess: async (response) => {
      if (response) {
        queryClient.invalidateQueries({ queryKey: ["/api/spacecrafts"] });
        toast({ title: "Успех", description: "Корабль успешно создан" });
        form.reset();
      }
    },
    onError: () => {
      toast({ title: "Ошибка", description: "Не удалось создать корабль", variant: "destructive" });
    },
  });

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Регистрация нового корабля</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((values) => createMutation.mutate(values))} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название корабля</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-background/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип корабля</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Выберите тип корабля" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Explorer">Исследовательский</SelectItem>
                    <SelectItem value="Battleship">Боевой крейсер</SelectItem>
                    <SelectItem value="Cargo">Грузовой</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={createMutation.isPending}
            className="w-full bg-primary/80 hover:bg-primary"
          >
            Зарегистрировать корабль
          </Button>
        </form>
      </Form>
    </div>
  );
}