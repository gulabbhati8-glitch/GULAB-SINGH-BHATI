import { useState } from 'react';
import { Check, Plus, Share2 } from 'lucide-react';
import {
  SIGNATURE_HAMPERS,
  HamperCategory,
  SignatureHamper,
  formatINR,
  buildWhatsAppShareUrl,
  formatHamperShareMessage,
} from '../data/hampers';
import { ResilientImage } from './ResilientImage';

interface HamperCatalogProps {
  onAddHamper: (hamper: SignatureHamper) => void;
}

const FILTER_TABS: { id: HamperCategory; label: string }[] = [
  { id: 'all', label: 'All Hampers' },
  { id: 'simple', label: 'Simple Hampers' },
  { id: 'vip', label: 'VIP Berry Hampers' },
];

export function HamperCatalog({ onAddHamper }: HamperCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<HamperCategory>('all');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const visibleHampers =
    activeFilter === 'all'
      ? SIGNATURE_HAMPERS
      : SIGNATURE_HAMPERS.filter((item) => item.category === activeFilter);

  function handleQuickAdd(hamper: SignatureHamper) {
    onAddHamper(hamper);
    setJustAddedId(hamper.id);
    window.setTimeout(() => {
      setJustAddedId((current) => (current === hamper.id ? null : current));
    }, 1500);
  }

  return (
    <section id="hampers" className="py-14 sm:py-20 border-b border-[#1D1512]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium tracking-wide text-[#7A4426] mb-2">
              Curated Collection
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-semibold text-[#1D1512] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Signature Homemade Chocolate Hampers
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter chocolate hampers"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFECE7] rounded-lg border border-[#1D1512]/8 self-start"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4426] ${
                    isActive
                      ? 'bg-[#FFFFFF] text-[#1D1512] shadow-xs'
                      : 'text-[#5A463B] hover:text-[#1D1512]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleHampers.map((hamper) => {
            const isAdded = justAddedId === hamper.id;
            return (
              <article
                key={hamper.id}
                className="group flex flex-col bg-[#FFFFFF] rounded-xl border border-[#1D1512]/10 overflow-hidden transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
              >
                <div className="bg-[#EDE7DF]">
                  <ResilientImage
                    src={hamper.image}
                    alt={hamper.name}
                    aspectClass="aspect-[4/3]"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-[#6B574C] mb-2">
                      <span className="truncate">
                        {hamper.categoryLabel} · {hamper.pieces} Pieces · {hamper.weightGrams}g
                      </span>
                      {hamper.featuredNote && (
                        <span className="text-[#7A4426] font-medium whitespace-nowrap shrink-0">
                          {hamper.featuredNote}
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-display text-2xl font-semibold text-[#1D1512] leading-snug">
                        {hamper.name}
                      </h3>
                      <span className="text-base font-semibold text-[#1D1512] tabular-nums whitespace-nowrap shrink-0">
                        {formatINR(hamper.price)}
                      </span>
                    </div>

                    <p className="text-sm text-[#55443A] leading-relaxed mb-3">
                      {hamper.description}
                    </p>

                    <p className="text-xs text-[#6B574C] leading-relaxed">
                      Includes: {hamper.contents.join(' · ')}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1D1512]/8 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(hamper)}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4426] ${
                        isAdded
                          ? 'bg-[#256D4A] text-[#FFFFFF]'
                          : 'bg-[#2B1B15] hover:bg-[#3F2820] text-[#F8F6F3]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>

                    <a
                      href={buildWhatsAppShareUrl(formatHamperShareMessage(hamper))}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Share ${hamper.name} on WhatsApp`}
                      title="Share on WhatsApp"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#1F5E3F] bg-[#EFECE7] hover:bg-[#E5E0D8] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5E3F]"
                    >
                      <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Share</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
