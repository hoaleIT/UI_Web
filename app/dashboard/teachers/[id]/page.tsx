import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTeacherById, classes } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Mail, Phone, Calendar, Building, BookOpen, School } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function TeacherDetailPage({ params }: PageProps) {
  const { id } = await params
  const teacher = getTeacherById(id)

  if (!teacher) {
    notFound()
  }

  const teacherClasses = classes.filter(c => c.homeroom === teacher.name)

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-chart-1/30 bg-chart-1/5">
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-chart-1">Dynamic Route:</span> /dashboard/teachers/[id] - 
            Trang chi tiet giao vien voi ID = {id}
          </p>
        </CardContent>
      </Card>

      {/* Back Button */}
      <Link href="/dashboard/teachers">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Quay lai danh sach
        </Button>
      </Link>

      {/* Teacher Profile */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Info */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-chart-2/10 text-2xl font-bold text-chart-2">
                {teacher.name.split(' ').map(n => n[0]).slice(-2).join('')}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{teacher.name}</h2>
                <p className="text-muted-foreground">Ma giao vien: GV{teacher.id.padStart(6, '0')}</p>
                <div className="mt-2 flex gap-2">
                  <Badge variant="secondary">{teacher.department}</Badge>
                  <Badge variant={teacher.status === 'active' ? 'default' : 'secondary'}>
                    {teacher.status === 'active' ? 'Dang day' : teacher.status === 'on-leave' ? 'Nghi phep' : 'Da nghi viec'}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Separator />
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{teacher.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">So dien thoai</p>
                  <p className="font-medium">{teacher.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Mon giang day</p>
                  <p className="font-medium">{teacher.subject}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Ngay vao truong</p>
                  <p className="font-medium">{new Date(teacher.joinDate).toLocaleDateString('vi-VN')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Thong tin cong tac
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-accent/50 p-4 text-center">
              <p className="text-sm text-muted-foreground">Tham nien</p>
              <p className="text-3xl font-bold text-chart-2">
                {new Date().getFullYear() - new Date(teacher.joinDate).getFullYear()} nam
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-accent/30 p-3">
                <span className="text-sm text-muted-foreground">Lop chu nhiem</span>
                <span className="font-medium">{teacherClasses.length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Classes */}
      {teacherClasses.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-5 w-5" />
              Lop chu nhiem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {teacherClasses.map((cls) => (
                <Link
                  key={cls.id}
                  href={`/dashboard/classes/${cls.id}`}
                  className="rounded-lg border border-border p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <h4 className="text-lg font-semibold text-foreground">{cls.name}</h4>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p>So hoc sinh: {cls.studentCount}</p>
                    <p>Phong: {cls.room}</p>
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
