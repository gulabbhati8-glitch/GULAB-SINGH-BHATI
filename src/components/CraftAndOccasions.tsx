import { MessageCircle } from 'lucide-react';
import { IMAGES, WHATSAPP_DISPLAY, buildWhatsAppUrl } from '../data/hampers';
import { ResilientImage } from './ResilientImage';

const OCCASION_TIERS = [
  {
    title: 'Weddings & Mehendi Favors',
    range: 'From ₹500/- per box (Bulk orders 20+)',
    detail:
      'Custom ribbon shades to match your palette, monogrammed sleeves, and freshly tempered eggless assortments.',
  },
  {
    title: 'Diwali, Rakhi & Festive Gifting',
    range: '₹850 – ₹2,850/- per hamper',
    detail:
      'Simple rock, truffle, and hazelnut-almond-pista-raisin hampers, or VIP chests featuring dried raspberry & red currant chocolates.',
  },
  {
    title: 'Birthdays, Anniversaries & Corporate',
    range: 'Custom quotes on WhatsApp',
    detail:
      'Handwritten notes, edible chocolate monogram slabs, and coordinated dispatch for client appreciation.',
  },
];

export function CraftAndOccasions() {
  const bulkUrl = buildWhatsAppUrl(
    "Hello Bhati's Cacao Hearth Kitchen! I'd like to inquire about custom bulk or occasion gift hampers."
  );

  return (
    <section id="occasions" className="py-14 sm:py-20 border-b border-[#1D1512]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Occasion & Bulk Gifting Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wide text-[#7A4426] mb-2">
              Special Occasions &amp; Gift Wrapping
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-semibold text-[#1D1512] tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Thoughtful wrapping for milestones &amp; celebrations.
            </h2>
            <p className="text-sm sm:text-base text-[#55443A] leading-relaxed mb-6">
              Every hamper leaves our kitchen hand-wrapped—from crisp kraft boxes with natural twine
              and botanicals to festive satin ribbon gift hampers with dried florals. Planning wedding
              favors or festive bulk hampers? Message our kitchen directly on WhatsApp.
            </p>
            <a
              href={bulkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#F8F6F3] bg-[#2B1B15] hover:bg-[#3F2820] rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Inquire for Events on {WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#1D1512]/10 border-t border-b border-[#1D1512]/10">
            {OCCASION_TIERS.map((tier) => (
              <div key={tier.title} className="py-5 first:pt-4 last:pb-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                  <h3 className="font-display text-2xl font-semibold text-[#1D1512]">
                    {tier.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#7A4426] tabular-nums">
                    {tier.range}
                  </span>
                </div>
                <p className="text-sm text-[#55443A] leading-relaxed">{tier.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kitchen Craftsmanship Story */}
        <div
          id="kitchen"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-8 border-t border-[#1D1512]/10"
        >
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-xl overflow-hidden border border-[#1D1512]/10 bg-[#EDE7DF]">
              <ResilientImage
                src={IMAGES.kitchenCraft}
                alt="Hand-tempering dark chocolate on marble inside Bhati's Cacao Hearth Kitchen"
                aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            <p className="text-xs font-medium tracking-wide text-[#7A4426] mb-2">
              Our Home Kitchen Standard
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-semibold text-[#1D1512] tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Pure cocoa butter, zero preservatives, tempered fresh to order.
            </h2>
            <p className="text-sm sm:text-base text-[#55443A] leading-relaxed mb-6">
              At Bhati&apos;s Cacao Hearth Kitchen, we never keep pre-packed boxes sitting on shelves.
              Once your order arrives on WhatsApp, we roast hazelnuts, almonds, and pistas fresh, fold
              in sweet raisins or VIP dried raspberries and red currants, and marble-temper every batch
              of rock and truffle chocolate to order.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5 border-t border-[#1D1512]/10">
              <div>
                <p className="text-sm font-semibold text-[#1D1512] mb-1">100% Pure Couverture</p>
                <p className="text-xs text-[#6B574C] leading-relaxed">
                  Crafted with genuine cocoa butter—never compound vegetable fats.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1D1512] mb-1">24–48 Hr Fresh Batch</p>
                <p className="text-xs text-[#6B574C] leading-relaxed">
                  Tempered and packed after confirmation for peak flavor.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1D1512] mb-1">Eggless Options</p>
                <p className="text-xs text-[#6B574C] leading-relaxed">
                  Dedicated vegetarian and no-added-sugar dark batches available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
