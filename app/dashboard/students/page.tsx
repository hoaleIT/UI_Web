import Link from 'next/link'
import { students } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Plus, Search, Eye, Edit, Trash2 } from 'lucide-react'

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-chart-2/30 bg-chart-2/5">
        <CardContent className="py-4">
          {/* <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-chart-2">Static Route:</span> /dashboard/students - 
            Click vao ten hoc sinh de xem chi tiet (Dynamic Route) hoac nhan vao icon <Eye className="inline h-4 w-4" /> de mo Quick View (Intercepting Route)
          </p> */}
        </CardContent>
      </Card>

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Danh sách học sinh</h3>
          <p className="text-muted-foreground">Quản lý thông tin học sinh trong trường</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm học sinh
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Tìm kiếm học sinh..." className="pl-9" />
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="cursor-pointer">Tất cả</Badge>
              <Badge variant="outline" className="cursor-pointer">Khối 12</Badge>
              <Badge variant="outline" className="cursor-pointer">Khối 11</Badge>
              <Badge variant="outline" className="cursor-pointer">Khối 10</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Học sinh ({students.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Họ và tên</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Lớp</TableHead>
                <TableHead>GPA</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <Link 
                      href={`/dashboard/students/${student.id}`}
                      className="flex items-center gap-3 hover:text-primary"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                        {student.name.split(' ').map(n => n[0]).slice(-2).join('')}
                      </div>
                      <span className="font-medium">{student.name}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{student.email}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{student.class}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className={student.gpa >= 8 ? 'text-success font-medium' : student.gpa >= 6.5 ? 'text-warning' : 'text-destructive'}>
                      {student.gpa}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                      {student.status === 'active' ? 'Đang học' : student.status === 'graduated' ? 'Đã tốt nghiệp' : 'Nghỉ học'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/dashboard/students/${student.id}/preview`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
