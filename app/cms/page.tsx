import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aiGenerations, campaigns, landingSections } from '@/lib/mock';

export default function CmsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] text-sunset-400">Internal CMS</div>
        <h1 className="mt-4 text-5xl font-medium tracking-[-0.05em] text-white md:text-6xl">Editorial workflows for launch teams.</h1>
        <p className="mt-5 text-lg leading-8 text-white/66">Manage campaigns, schedule drops, create experiments, and publish AI-generated assets without leaving the launch system.</p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Card className="glass lg:col-span-2">
          <CardHeader>
            <CardTitle>Campaign board</CardTitle>
            <CardDescription>Editorial layout for fast-moving growth teams.</CardDescription>
          </CardHeader>
          <CardBody className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between rounded-3xl border border-white/8 bg-white/5 p-4">
                <div>
                  <div className="text-white">{campaign.name}</div>
                  <div className="mt-1 text-sm text-white/48">${campaign.spend.toLocaleString()} spend · {campaign.conversions.toLocaleString()} conversions</div>
                </div>
                <Badge>{campaign.channel}</Badge>
              </div>
            ))}
          </CardBody>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Section library</CardTitle>
            <CardDescription>Reusable landing page modules.</CardDescription>
          </CardHeader>
          <CardBody className="space-y-3">
            {landingSections.map((section) => <div key={section.id} className="rounded-2xl border border-white/8 bg-white/5 p-4"><div className="text-white capitalize">{section.type}</div><div className="mt-1 text-sm text-white/48">{section.heading}</div></div>)}
          </CardBody>
        </Card>
        <Card className="glass lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent AI outputs</CardTitle>
            <CardDescription>Editable copy blocks with history.</CardDescription>
          </CardHeader>
          <CardBody className="grid gap-4 md:grid-cols-2">
            {aiGenerations.map((item) => (
              <div key={item.id} className="rounded-3xl border border-white/8 bg-black/20 p-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/36"><span>{item.type}</span><span>{item.tone}</span></div>
                <div className="mt-3 text-white/82">{item.output}</div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
