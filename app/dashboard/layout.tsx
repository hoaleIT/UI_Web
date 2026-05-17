import { DashboardSidebar, DashboardHeader } from '@/components/dashboard-layout'

export default function DashboardLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <div className="ml-64">
        <DashboardHeader />
        <main className="p-6">
          {children}
        </main>
      </div>
      {/* Intercepting Route Modal */}
      {modal}
    </div>
  )
}
