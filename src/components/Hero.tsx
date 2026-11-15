import { MessageCircle, ArrowRight } from 'lucide-react';
import { IMAGES, WHATSAPP_DISPLAY, buildWhatsAppUrl } from '../data/hampers';
import { ResilientImage } from './ResilientImage';

export function Hero() {
  const quickWhatsAppUrl = buildWhatsAppUrl(
    "Hello Bhati's Cacao Hearth Kitchen! I'd like to explore your homemade chocolate hampers (starting ₹500/-) and custom gift wrapping options."
  );

  return (
    <section id="top" className="pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-[#1D1512]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#7A4426] mb-3">
                Small-Batch Homemade Chocolates · Made to Order
              </p>
              <h1
                className="font-display font-semibold text-[#1D1512] tracking-tight leading-[1.06] mb-5"
                style={{ fontSize: 'clamp(2.35rem, 4.2vw, 3.85rem)', textWrap: 'balance' }}
              >
                Artisanal chocolate hampers, tempered in our hearth kitchen.
              </h1>
              <p className="text-base sm:text-[17px] text-[#4B3B33] leading-relaxed max-w-[54ch] mb-8">
                Simple homemade hampers crafted with rock chocolate, smooth truffle chocolate, and
                nutty hazelnut, almond, pista &amp; raisin chocolates—starting at{' '}
                <span className="font-semibold text-[#1D1512] tabular-nums">₹500/-</span>. For VIP
                hampers, enjoy dried raspberry &amp; red currant chocolates with bespoke occasion
                gift wrapping.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#hampers"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#F8F6F3] bg-[#7A4426] hover:bg-[#63361C] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4426] focus-visible:ring-offset-2"
              >
                <span>Browse Hampers</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#1D1512] bg-[#EFECE7] hover:bg-[#E5E0D8] border border-[#1D1512]/12 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4426]"
              >
                <MessageCircle className="w-4 h-4 text-[#256D4A]" aria-hidden="true" />
                <span>WhatsApp {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-xl overflow-hidden border border-[#1D1512]/10 bg-[#EDE7DF]">
              <ResilientImage
                src={IMAGES.hero}
                alt="Bhati's Cacao Hearth Kitchen signature wooden chocolate hamper tied with bronze satin ribbon"
                aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full"
                className="lg:min-h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Highlights Strip below split */}
        <div className="mt-10 pt-8 border-t border-[#1D1512]/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-xs text-[#6B574C] mb-1">Standard Boxes From</p>
            <p className="font-display text-2xl font-semibold text-[#1D1512] tabular-nums">₹500/-</p>
          </div>
          <div>
            <p className="text-xs text-[#6B574C] mb-1">Custom Packaging Range</p>
            <p className="font-display text-2xl font-semibold text-[#1D1512] tabular-nums">₹500 – ₹2,850/-</p>
          </div>
          <div>
            <p className="text-xs text-[#6B574C] mb-1">Kitchen Preparation</p>
            <p className="font-display text-2xl font-semibold text-[#1D1512]">Fresh Small Batches</p>
          </div>
          <div>
            <p className="text-xs text-[#6B574C] mb-1">Direct Order Desk</p>
            <p className="font-display text-2xl font-semibold text-[#1D1512] tabular-nums">
              WhatsApp {WHATSAPP_DISPLAY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
