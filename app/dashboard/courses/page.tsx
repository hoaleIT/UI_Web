import Link from 'next/link'
import { courses } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, BookOpen, Users, GraduationCap, Clock } from 'lucide-react'

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-chart-4/30 bg-chart-4/5">
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            {/* <span className="font-semibold text-chart-4">Static Route:</span> /dashboard/courses -  */}
            Danh sách các môn học trong trường
          </p>
        </CardContent>
      </Card>

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Danh sách môn học</h3>
          <p className="text-muted-foreground">Quản lý các môn học và chương trình đào tạo</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm môn học
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Tìm kiếm môn học theo tên, mã môn..." className="pl-9" />
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-4/10">
                  <BookOpen className="h-6 w-6 text-chart-4" />
                </div>
                <Badge variant="outline">{course.code}</Badge>
              </div>
              <CardTitle className="mt-3">{course.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">GV:</span>
                <span className="font-medium">{course.teacher}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Tín chỉ</p>
                    <p className="font-semibold">{course.credits}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Học sinh</p>
                    <p className="font-semibold">{course.studentCount}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Badge variant="secondary">{course.semester}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
