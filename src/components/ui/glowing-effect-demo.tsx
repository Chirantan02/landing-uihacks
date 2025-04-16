"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-blue-400" />}
        title="Higher Conversion Rates"
        description="Increase conversions by 40% when customers can virtually try on products before purchase."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-blue-400" />}
        title="Lower Return Rates"
        description="Reduce returns by up to 50% with better fit visualization and accurate size recommendations."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={null} // Remove the Lock icon
        title={
          <>
            <div className="flex justify-center mb-6">
              <img 
                src="/shopify-icon.svg" 
                alt="Shopify" 
                className="w-32 h-32"
                // Removing the filter that was making the white parts invisible
                // style={{ filter: 'brightness(0) saturate(100%) invert(72%) sepia(12%) saturate(1661%) hue-rotate(43deg) brightness(89%) contrast(88%)' }}
              />
            </div>
            Shopify Integration
          </>
        }
        description={
          <>
            <div className="flex items-center gap-2 mb-2 bg-blue-950/50 rounded-lg p-1.5 w-fit">
              <span>🗃️</span>
              <span className="text-xs font-medium text-blue-400">One-Click Install</span>
            </div>
            Seamlessly integrate with your Shopify store with our easy-to-use app. No coding required.
          </>
        }
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-blue-400" />}
        title="Enhanced Customer Experience"
        description="Delight your customers with an engaging, interactive shopping experience."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-blue-400" />}
        title="Fast Implementation"
        description="Get up and running in minutes with our simple setup process and dedicated support."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string | React.ReactNode;  // Updated to accept both string and ReactNode
  description: string | React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-blue-500/20 p-2 md:rounded-3xl md:p-3 bg-black/40">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-black/80 shadow-[0px_0px_27px_0px_#00a3ff20]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-blue-500/30 bg-blue-500/10 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-white/70 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};








