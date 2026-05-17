import Link from 'next/link'
import { classes } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, Users, MapPin, Clock } from 'lucide-react'

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-chart-3/30 bg-chart-3/5">
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-chart-3">Static Route:</span> /dashboard/classes - 
            Danh sach cac lop hoc. Click de xem chi tiet lop (Dynamic Route)
          </p>
        </CardContent>
      </Card>

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Danh sach lop hoc</h3>
          <p className="text-muted-foreground">Quan ly cac lop hoc trong truong</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Them lop hoc
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Tim kiem lop hoc..." className="pl-9" />
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="cursor-pointer">Tat ca</Badge>
              <Badge variant="outline" className="cursor-pointer">Khoi 12</Badge>
              <Badge variant="outline" className="cursor-pointer">Khoi 11</Badge>
              <Badge variant="outline" className="cursor-pointer">Khoi 10</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Classes Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <Link key={cls.id} href={`/dashboard/classes/${cls.id}`}>
            <Card className="h-full cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{cls.name}</CardTitle>
                  <Badge variant="outline">Khoi {cls.grade}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Hoc sinh</p>
                      <p className="font-semibold">{cls.studentCount}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phong</p>
                      <p className="font-semibold">{cls.room}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">GVCN:</span>
                    <span className="font-medium">{cls.homeroom}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Buoi {cls.schedule}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
