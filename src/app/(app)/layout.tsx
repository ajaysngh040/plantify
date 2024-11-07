import Footer from "@/components/footer";
import Header from "@/components/header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex flex-col items-center max-h-screen dark:bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
