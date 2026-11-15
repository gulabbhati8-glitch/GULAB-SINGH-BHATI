import { useState } from 'react';
import { BagItem, SignatureHamper } from './data/hampers';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HamperCatalog } from './components/HamperCatalog';
import { CraftAndOccasions } from './components/CraftAndOccasions';
import { OrderBagDrawer } from './components/OrderBagDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [bagItems, setBagItems] = useState<BagItem[]>([]);
  const [isBagOpen, setIsBagOpen] = useState(false);

  const totalBagCount = bagItems.reduce((sum, item) => sum + item.quantity, 0);

  function handleAddSignatureHamper(hamper: SignatureHamper) {
    setBagItems((prev) => {
      const existing = prev.find((item) => item.uid === hamper.id);
      if (existing) {
        return prev.map((item) =>
          item.uid === hamper.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          uid: hamper.id,
          title: hamper.name,
          subtitle: `${hamper.categoryLabel} · ${hamper.pieces} Pieces · ${hamper.weightGrams}g`,
          unitPrice: hamper.price,
          quantity: 1,
          details: hamper.contents,
          image: hamper.image,
        },
      ];
    });
  }

  function handleUpdateQuantity(uid: string, delta: number) {
    setBagItems((prev) =>
      prev
        .map((item) =>
          item.uid === uid ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function handleRemoveItem(uid: string) {
    setBagItems((prev) => prev.filter((item) => item.uid !== uid));
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F3] text-[#1D1512]">
      <Header bagCount={totalBagCount} onOpenBag={() => setIsBagOpen(true)} />

      <main className="flex-1">
        <Hero />
        <HamperCatalog onAddHamper={handleAddSignatureHamper} />
        <CraftAndOccasions />
      </main>

      <Footer />

      <OrderBagDrawer
        isOpen={isBagOpen}
        items={bagItems}
        onClose={() => setIsBagOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
