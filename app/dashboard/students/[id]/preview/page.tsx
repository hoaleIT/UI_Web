import { redirect } from 'next/navigation'

interface PageProps {
  params: Promise<{ id: string }>
}

// Fallback page when accessed directly (not via intercepting route)
export default async function StudentPreviewPage({ params }: PageProps) {
  const { id } = await params
  // Redirect to the full student detail page
  redirect(`/dashboard/students/${id}`)
}
