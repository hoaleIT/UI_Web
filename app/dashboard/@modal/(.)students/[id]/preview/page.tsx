'use client'

import { useRouter } from 'next/navigation'
import { getStudentById } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { X, Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { use } from 'react'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function StudentPreviewModal({ params }: PageProps) {
  const { id } = use(params)
  const router = useRouter()
  const student = getStudentById(id)

  if (!student) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => router.back()}
      />
      
      {/* Modal */}
      <div className="relative z-10 mx-4 w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-xl">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
              {student.name.split(' ').map(n => n[0]).slice(-2).join('')}
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">{student.name}</h2>
              <p className="text-sm text-muted-foreground">Ma: HS{student.id.padStart(6, '0')}</p>
            </div>
          </div>
          <button 
            onClick={() => router.back()}
            className="rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Info Banner */}
        <div className="mb-4 rounded-lg bg-chart-4/10 p-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-chart-4">Intercepting Route:</span> (.)/students/[id]/preview - 
            Modal nay duoc mo thong qua Intercepting Route, giu nguyen URL /students/[id]/preview
          </p>
        </div>

        <Separator className="my-4" />

        {/* Quick Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Lop</span>
            <Badge variant="secondary">{student.class}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Trang thai</span>
            <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
              {student.status === 'active' ? 'Dang hoc' : student.status === 'graduated' ? 'Da tot nghiep' : 'Nghi hoc'}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">GPA</span>
            <span className={`font-bold ${student.gpa >= 8 ? 'text-success' : student.gpa >= 6.5 ? 'text-warning' : 'text-destructive'}`}>
              {student.gpa}
            </span>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{student.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{student.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{new Date(student.dateOfBirth).toLocaleDateString('vi-VN')}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="line-clamp-1">{student.address}</span>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={() => router.back()}>
            Dong
          </Button>
          <Link href={`/dashboard/students/${student.id}`} className="flex-1">
            <Button className="w-full gap-2">
              <ExternalLink className="h-4 w-4" />
              Xem chi tiet
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
