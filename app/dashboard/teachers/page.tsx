import Link from 'next/link'
import { teachers } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, Mail, Phone } from 'lucide-react'

export default function TeachersPage() {
  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-chart-2/30 bg-chart-2/5">
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-chart-2">Static Route:</span> /dashboard/teachers - 
            Click vao card giao vien de xem chi tiet (Dynamic Route)
          </p>
        </CardContent>
      </Card>

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Danh sach giao vien</h3>
          <p className="text-muted-foreground">Quan ly thong tin giao vien trong truong</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Them giao vien
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Tim kiem giao vien theo ten, mon hoc..." className="pl-9" />
          </div>
        </CardContent>
      </Card>

      {/* Teachers Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <Link key={teacher.id} href={`/dashboard/teachers/${teacher.id}`}>
            <Card className="h-full cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-chart-2/10 text-lg font-bold text-chart-2">
                    {teacher.name.split(' ').map(n => n[0]).slice(-2).join('')}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{teacher.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Khoa</span>
                  <Badge variant="secondary">{teacher.department}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{teacher.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{teacher.phone}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">
                    Ngay vao: {new Date(teacher.joinDate).toLocaleDateString('vi-VN')}
                  </span>
                  <Badge variant={teacher.status === 'active' ? 'default' : teacher.status === 'on-leave' ? 'secondary' : 'destructive'}>
                    {teacher.status === 'active' ? 'Dang day' : teacher.status === 'on-leave' ? 'Nghi phep' : 'Da nghi viec'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
