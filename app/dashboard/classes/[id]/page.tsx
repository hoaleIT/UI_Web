import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getClassById, getStudentsByClass, teachers } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ArrowLeft, Users, MapPin, Clock, GraduationCap, Eye } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ClassDetailPage({ params }: PageProps) {
  const { id } = await params
  const classData = getClassById(id)

  if (!classData) {
    notFound()
  }

  const classStudents = getStudentsByClass(classData.name)
  const homeRoomTeacher = teachers.find(t => t.name === classData.homeroom)

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-chart-1/30 bg-chart-1/5">
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-chart-1">Dynamic Route:</span> /dashboard/classes/[id] - 
            Trang chi tiet lop hoc voi ID = {id}. Hien thi danh sach hoc sinh trong lop.
          </p>
        </CardContent>
      </Card>

      {/* Back Button */}
      <Link href="/dashboard/classes">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Quay lai danh sach
        </Button>
      </Link>

      {/* Class Header */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-3xl">{classData.name}</CardTitle>
              <p className="text-muted-foreground">Khoi {classData.grade} - Nam hoc 2024-2025</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-base">Khoi {classData.grade}</Badge>
              <Badge className="text-base">{classStudents.length} hoc sinh</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-lg bg-accent/50 p-4">
              <Users className="h-8 w-8 text-chart-1" />
              <div>
                <p className="text-sm text-muted-foreground">Si so</p>
                <p className="text-2xl font-bold">{classData.studentCount}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-accent/50 p-4">
              <MapPin className="h-8 w-8 text-chart-2" />
              <div>
                <p className="text-sm text-muted-foreground">Phong hoc</p>
                <p className="text-2xl font-bold">{classData.room}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-accent/50 p-4">
              <Clock className="h-8 w-8 text-chart-3" />
              <div>
                <p className="text-sm text-muted-foreground">Buoi hoc</p>
                <p className="text-2xl font-bold">{classData.schedule}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-accent/50 p-4">
              <GraduationCap className="h-8 w-8 text-chart-4" />
              <div>
                <p className="text-sm text-muted-foreground">GVCN</p>
                <p className="line-clamp-1 font-bold" title={classData.homeroom}>
                  {classData.homeroom.split(' ').slice(-2).join(' ')}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Homeroom Teacher */}
      {homeRoomTeacher && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Giao vien chu nhiem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link
              href={`/dashboard/teachers/${homeRoomTeacher.id}`}
              className="flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-accent"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-chart-2/10 text-lg font-bold text-chart-2">
                {homeRoomTeacher.name.split(' ').map(n => n[0]).slice(-2).join('')}
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">{homeRoomTeacher.name}</p>
                <p className="text-muted-foreground">{homeRoomTeacher.subject} - {homeRoomTeacher.department}</p>
                <p className="text-sm text-muted-foreground">{homeRoomTeacher.email}</p>
              </div>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Students List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Danh sach hoc sinh ({classStudents.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {classStudents.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>STT</TableHead>
                  <TableHead>Ho va ten</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>GPA</TableHead>
                  <TableHead>Trang thai</TableHead>
                  <TableHead className="text-right">Xem</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classStudents.map((student, index) => (
                  <TableRow key={student.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <Link
                        href={`/dashboard/students/${student.id}`}
                        className="flex items-center gap-3 hover:text-primary"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                          {student.name.split(' ').map(n => n[0]).slice(-2).join('')}
                        </div>
                        <span className="font-medium">{student.name}</span>
                      </Link>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{student.email}</TableCell>
                    <TableCell>
                      <span className={student.gpa >= 8 ? 'text-success font-medium' : student.gpa >= 6.5 ? 'text-warning' : 'text-destructive'}>
                        {student.gpa}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                        {student.status === 'active' ? 'Dang hoc' : 'Nghi hoc'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/dashboard/students/${student.id}/preview`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="py-8 text-center text-muted-foreground">
              Chua co hoc sinh trong lop nay
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
