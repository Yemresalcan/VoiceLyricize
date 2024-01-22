import DemoSection from "@/components/DemoSection";
import PageHeader from "@/components/PageHeader";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
    
      <PageHeader
        h1Text={'Videolarınıza epik altyazılar ekleyin'}
        h2Text={'Sadece videonuzu yükleyin ve gerisini biz halledelim'}
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2" role="alert">
  <strong class="font-bold">Eğer videonuzu çevirme işlemi uzun sürer ise refresh (sayfayı yenileme) yapmayı unutmayınız ! </strong>
  </div>
      
    </>
  )
}
