import PageHeader from "@/components/PageHeader";

export default function PricingPage() {
  return (
    <div>
        <PageHeader
        h1Text={'Check out our pricing'}
        h2Text={'Our pricing is very simple'} />

      <div className="bg-orange-300 text-slate-700 rounded-lg max-w-xs mx-auto p-4 text-center mt-6">
        <h3 className="font-bold text-3xl">Free</h3>
        <h4>Free forever</h4>
      </div>
    </div>
  );
}