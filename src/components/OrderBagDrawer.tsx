import { useState } from 'react';
import { X, Minus, Plus, Trash2, MessageCircle, Copy, Check } from 'lucide-react';
import {
  BagItem,
  OCCASIONS,
  PACKAGING_OPTIONS,
  WHATSAPP_DISPLAY,
  formatINR,
  formatBagOrderMessage,
  buildWhatsAppUrl,
} from '../data/hampers';

interface OrderBagDrawerProps {
  isOpen: boolean;
  items: BagItem[];
  onClose: () => void;
  onUpdateQuantity: (uid: string, delta: number) => void;
  onRemoveItem: (uid: string) => void;
}

export function OrderBagDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}: OrderBagDrawerProps) {
  const [packagingId, setPackagingId] = useState(PACKAGING_OPTIONS[0].id);
  const [occasion, setOccasion] = useState(OCCASIONS[0]);
  const [giftNote, setGiftNote] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [city, setCity] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const selectedPackaging =
    PACKAGING_OPTIONS.find((p) => p.id === packagingId) ?? PACKAGING_OPTIONS[0];
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const itemsSubtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const wrappingTotal = selectedPackaging.priceDelta * totalCount;
  const grandTotal = itemsSubtotal + wrappingTotal;

  const orderMessage = formatBagOrderMessage(
    items,
    selectedPackaging,
    occasion,
    giftNote,
    customerName,
    deliveryDate,
    city
  );
  const whatsappUrl = buildWhatsAppUrl(orderMessage);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(orderMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Your Chocolate Hamper Order Bag"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1D1512]/45 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside className="relative z-10 w-full max-w-md bg-[#F8F6F3] h-full flex flex-col border-l border-[#1D1512]/12 shadow-xl">
        <div className="px-6 py-4 bg-[#FFFFFF] border-b border-[#1D1512]/10 flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1D1512]">
              Your Order Bag ({totalCount})
            </h2>
            <p className="text-xs text-[#6B574C]">
              Direct order confirmation via WhatsApp {WHATSAPP_DISPLAY}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close order bag"
            className="p-2 text-[#55443A] hover:text-[#1D1512] rounded-lg hover:bg-[#EFECE7] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-display text-2xl font-semibold text-[#1D1512] mb-2">
                Your hamper bag is empty
              </p>
              <p className="text-sm text-[#55443A] max-w-[30ch] mx-auto mb-6">
                Browse our simple and VIP homemade chocolate hampers starting at ₹500/-.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-medium text-[#F8F6F3] bg-[#2B1B15] rounded-lg hover:bg-[#3F2820] transition-colors cursor-pointer"
              >
                Explore Hampers
              </button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.uid}
                  className="bg-[#FFFFFF] rounded-xl border border-[#1D1512]/10 p-4 flex gap-3.5"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-lg object-cover bg-[#EDE7DF] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-[#1D1512] leading-snug truncate">
                        {item.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.uid)}
                        aria-label={`Remove ${item.title}`}
                        className="text-[#8B7A70] hover:text-[#9E2A2B] p-1 -mr-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-[#6B574C] mb-1.5">{item.subtitle}</p>
                    {item.details.length > 0 && (
                      <ul className="text-[11px] text-[#55443A] space-y-0.5 mb-2.5">
                        {item.details.map((d, i) => (
                          <li key={i} className="truncate">
                            · {d}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <div className="inline-flex items-center border border-[#1D1512]/15 rounded-lg bg-[#F8F6F3]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.uid, -1)}
                          aria-label="Decrease quantity"
                          className="p-1.5 text-[#55443A] hover:text-[#1D1512] cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold tabular-nums text-[#1D1512]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.uid, 1)}
                          aria-label="Increase quantity"
                          className="p-1.5 text-[#55443A] hover:text-[#1D1512] cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-semibold text-[#1D1512] tabular-nums">
                        {formatINR(item.unitPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Gift Wrapping & Occasion Selection */}
              <div className="pt-3 border-t border-[#1D1512]/10 space-y-2.5">
                <p className="text-xs font-medium text-[#4B3B33]">Gift Wrapping &amp; Occasion</p>
                <div className="space-y-2">
                  {PACKAGING_OPTIONS.map((pack) => {
                    const active = pack.id === packagingId;
                    return (
                      <button
                        key={pack.id}
                        type="button"
                        onClick={() => setPackagingId(pack.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#FFFFFF] border-[#7A4426] ring-1 ring-[#7A4426]'
                            : 'bg-[#FFFFFF]/80 border-[#1D1512]/10 hover:border-[#1D1512]/25'
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs font-semibold text-[#1D1512]">{pack.name}</span>
                          <span className="text-xs font-semibold text-[#7A4426] tabular-nums whitespace-nowrap">
                            {pack.priceDelta === 0
                              ? 'Included'
                              : `+${formatINR(pack.priceDelta)}/box`}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#55443A] mt-0.5">{pack.description}</p>
                      </button>
                    );
                  })}
                </div>

                <select
                  aria-label="Occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#FFFFFF] border border-[#1D1512]/12 rounded-lg focus:outline-none focus:border-[#7A4426]"
                >
                  {OCCASIONS.map((occ) => (
                    <option key={occ} value={occ}>
                      Occasion: {occ}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="Complimentary handwritten gift card message"
                  className="w-full px-3 py-2 text-xs bg-[#FFFFFF] border border-[#1D1512]/12 rounded-lg focus:outline-none focus:border-[#7A4426]"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <p className="text-xs font-medium text-[#4B3B33]">Delivery Details (Optional)</p>
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your name"
                    className="px-3 py-2 text-xs bg-[#FFFFFF] border border-[#1D1512]/12 rounded-lg focus:outline-none focus:border-[#7A4426]"
                  />
                  <input
                    type="text"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    placeholder="Date needed"
                    className="px-3 py-2 text-xs bg-[#FFFFFF] border border-[#1D1512]/12 rounded-lg focus:outline-none focus:border-[#7A4426]"
                  />
                </div>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Delivery address / city"
                  className="w-full px-3 py-2 text-xs bg-[#FFFFFF] border border-[#1D1512]/12 rounded-lg focus:outline-none focus:border-[#7A4426]"
                />
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-[#FFFFFF] border-t border-[#1D1512]/10 space-y-3">
            <div className="space-y-1">
              {wrappingTotal > 0 && (
                <div className="flex items-baseline justify-between text-xs text-[#6B574C]">
                  <span>Gift Wrapping ({totalCount} box)</span>
                  <span className="tabular-nums">+{formatINR(wrappingTotal)}</span>
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-[#55443A]">Estimated Total</span>
                <span className="font-display text-3xl font-semibold text-[#1D1512] tabular-nums">
                  {formatINR(grandTotal)}
                </span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#FFFFFF] bg-[#1F5E3F] hover:bg-[#174A31] rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Order on WhatsApp ({WHATSAPP_DISPLAY})</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-[#1D1512] bg-[#EFECE7] hover:bg-[#E5E0D8] rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#256D4A]" aria-hidden="true" />
                  <span>Order Summary Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Copy Order Summary</span>
                </>
              )}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
