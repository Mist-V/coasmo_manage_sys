import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SpacecraftForm from "@/components/spacecraft/SpacecraftForm";
import SpacecraftList from "@/components/spacecraft/SpacecraftList";
import Documentation from "@/components/docs/Documentation";

export default function Home() {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 p-6">
      <Card className="mx-auto max-w-7xl backdrop-blur-sm bg-background/80">
        <CardContent className="p-6">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Центр управления космическим флотом
          </h1>

          <div className="flex flex-col gap-8">
            <SpacecraftForm onSecretCodeEntered={setShowDocs} />
            {showDocs ? <Documentation /> : <SpacecraftList />}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}