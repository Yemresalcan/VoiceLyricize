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
    </>
  )
}
