import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  bagCount: number;
  onOpenBag: () => void;
}

export function Header({ bagCount, onOpenBag }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#F8F6F3]/95 backdrop-blur-sm border-b border-[#1D1512]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1512] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4426] rounded"
        >
          Bhati&apos;s Cacao Hearth Kitchen
        </a>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#55443A]"
        >
          <a
            href="#hampers"
            className="hover:text-[#1D1512] transition-colors whitespace-nowrap shrink-0 underline-offset-4 hover:underline"
          >
            Hampers
          </a>
          <a
            href="#occasions"
            className="hover:text-[#1D1512] transition-colors whitespace-nowrap shrink-0 underline-offset-4 hover:underline"
          >
            Occasions &amp; Wrapping
          </a>
          <a
            href="#kitchen"
            className="hover:text-[#1D1512] transition-colors whitespace-nowrap shrink-0 underline-offset-4 hover:underline"
          >
            Our Kitchen
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenBag}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#F8F6F3] bg-[#2B1B15] hover:bg-[#3F2820] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4426] focus-visible:ring-offset-2"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            <span>Order Bag</span>
            <span className="tabular-nums font-semibold">({bagCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
