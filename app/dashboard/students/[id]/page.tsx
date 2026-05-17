import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getStudentById, getStudentsByClass } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Mail, Phone, MapPin, Calendar, GraduationCap, Users, Edit, Trash2 } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function StudentDetailPage({ params }: PageProps) {
  const { id } = await params
  const student = getStudentById(id)

  if (!student) {
    notFound()
  }

  const classmates = getStudentsByClass(student.class).filter(s => s.id !== student.id)

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-chart-1/30 bg-chart-1/5">
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-chart-1">Dynamic Route:</span> /dashboard/students/[id] - 
            Day la trang chi tiet hoc sinh voi ID = {id}. URL nay duoc tao dong dua tren ID cua hoc sinh.
          </p>
        </CardContent>
      </Card>

      {/* Back Button */}
      <Link href="/dashboard/students">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Quay lai danh sach
        </Button>
      </Link>

      {/* Student Profile */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Info */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                {student.name.split(' ').map(n => n[0]).slice(-2).join('')}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{student.name}</h2>
                <p className="text-muted-foreground">Ma hoc sinh: HS{student.id.padStart(6, '0')}</p>
                <div className="mt-2 flex gap-2">
                  <Badge variant="secondary">{student.class}</Badge>
                  <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                    {student.status === 'active' ? 'Dang hoc' : student.status === 'graduated' ? 'Da tot nghiep' : 'Nghi hoc'}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Edit className="h-4 w-4" />
                Chinh sua
              </Button>
              <Button variant="outline" size="sm" className="gap-2 text-destructive">
                <Trash2 className="h-4 w-4" />
                Xoa
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Separator />
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{student.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">So dien thoai</p>
                  <p className="font-medium">{student.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Ngay sinh</p>
                  <p className="font-medium">{new Date(student.dateOfBirth).toLocaleDateString('vi-VN')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Dia chi</p>
                  <p className="font-medium">{student.address}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Ket qua hoc tap
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-accent/50 p-4 text-center">
              <p className="text-sm text-muted-foreground">Diem trung binh</p>
              <p className={`text-4xl font-bold ${student.gpa >= 8 ? 'text-success' : student.gpa >= 6.5 ? 'text-warning' : 'text-destructive'}`}>
                {student.gpa}
              </p>
              <p className="text-sm text-muted-foreground">
                {student.gpa >= 8 ? 'Gioi' : student.gpa >= 6.5 ? 'Kha' : 'Trung binh'}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Thanh tich</p>
              <div className="flex flex-wrap gap-2">
                {student.gpa >= 9 && <Badge>Hoc sinh gioi</Badge>}
                {student.gpa >= 8 && <Badge variant="secondary">Top 10%</Badge>}
                <Badge variant="outline">Nam hoc 2024-2025</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Classmates */}
      {classmates.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Ban hoc cung lop ({classmates.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {classmates.map((mate) => (
                <Link
                  key={mate.id}
                  href={`/dashboard/students/${mate.id}`}
                  className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-accent"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {mate.name.split(' ').map(n => n[0]).slice(-2).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{mate.name}</p>
                    <p className="text-sm text-muted-foreground">GPA: {mate.gpa}</p>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
