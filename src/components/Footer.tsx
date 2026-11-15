import { MessageCircle, Share2 } from 'lucide-react';
import { WHATSAPP_DISPLAY, buildWhatsAppUrl, buildWhatsAppShareUrl } from '../data/hampers';

export function Footer() {
  const directChatUrl = buildWhatsAppUrl(
    "Hello Bhati's Cacao Hearth Kitchen! I have a question about your homemade chocolate hampers."
  );
  const storeShareUrl = buildWhatsAppShareUrl(
    `Check out *Bhati's Cacao Hearth Kitchen* for homemade chocolate hampers starting ₹500/- (rock, truffle, hazelnut-almond-pista-raisin & VIP dried raspberry/red currant boxes). Order on WhatsApp: ${WHATSAPP_DISPLAY}${typeof window !== 'undefined' ? `\n${window.location.href}` : ''}`
  );

  return (
    <footer className="bg-[#231712] text-[#F4EFE9] py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#F4EFE9]/15">
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#FFFFFF] mb-3">
              Bhati&apos;s Cacao Hearth Kitchen
            </h2>
            <p className="text-sm text-[#D6C9BE] leading-relaxed max-w-[42ch] mb-5">
              Homemade chocolate hampers tempered in small batches for birthdays, weddings,
              festivals, and quiet everyday gifting.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={directChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#1D1512] bg-[#F4EFE9] hover:bg-[#FFFFFF] rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#1F5E3F]" aria-hidden="true" />
                <span>Order on WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={storeShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#F4EFE9] bg-[#36241D] hover:bg-[#473027] border border-[#F4EFE9]/15 rounded-lg transition-colors whitespace-nowrap"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
                <span>Share on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-[#FFFFFF] tracking-wide mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm text-[#D6C9BE]">
              <li>
                <a href="#hampers" className="hover:text-[#FFFFFF] transition-colors">
                  Simple &amp; VIP Hampers
                </a>
              </li>
              <li>
                <a href="#occasions" className="hover:text-[#FFFFFF] transition-colors">
                  Occasion Gift Wrapping
                </a>
              </li>
              <li>
                <a href="#kitchen" className="hover:text-[#FFFFFF] transition-colors">
                  Our Kitchen Craft
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-[#FFFFFF] tracking-wide mb-3">
              Kitchen Order Notes
            </p>
            <ul className="space-y-2 text-sm text-[#D6C9BE]">
              <li>Standard Boxes: Starting ₹500/-</li>
              <li>Custom Gift Wrapping: Available for all box sizes</li>
              <li>Lead Time: 24–48 hours for fresh tempering</li>
              <li>WhatsApp Desk: +91 {WHATSAPP_DISPLAY} (9 AM – 8 PM)</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#B7A699]">
          <p>© {new Date().getFullYear()} Bhati&apos;s Cacao Hearth Kitchen. Crafted fresh to order.</p>
          <p>Prices shown in INR · Personalized packaging &amp; eggless batches available</p>
        </div>
      </div>
    </footer>
  );
}
