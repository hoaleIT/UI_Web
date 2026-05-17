import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { students, teachers, classes, courses } from '@/lib/data'
import { Users, GraduationCap, School, BookOpen, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const stats = [
  {
    title: 'Tong so hoc sinh',
    value: students.length.toString(),
    change: '+12%',
    trend: 'up',
    icon: Users,
    href: '/dashboard/students',
    color: 'text-chart-1',
    bgColor: 'bg-chart-1/10',
  },
  {
    title: 'Tong so giao vien',
    value: teachers.length.toString(),
    change: '+5%',
    trend: 'up',
    icon: GraduationCap,
    href: '/dashboard/teachers',
    color: 'text-chart-2',
    bgColor: 'bg-chart-2/10',
  },
  {
    title: 'So lop hoc',
    value: classes.length.toString(),
    change: '0%',
    trend: 'neutral',
    icon: School,
    href: '/dashboard/classes',
    color: 'text-chart-3',
    bgColor: 'bg-chart-3/10',
  },
  {
    title: 'Mon hoc',
    value: courses.length.toString(),
    change: '+8%',
    trend: 'up',
    icon: BookOpen,
    href: '/dashboard/courses',
    color: 'text-chart-4',
    bgColor: 'bg-chart-4/10',
  },
]

const recentActivities = [
  { id: 1, action: 'Them hoc sinh moi', name: 'Nguyen Van An', time: '5 phut truoc', type: 'student' },
  { id: 2, action: 'Cap nhat diem', name: 'Lop 12A1', time: '15 phut truoc', type: 'class' },
  { id: 3, action: 'Dang ky mon hoc', name: 'Dai so tuyen tinh', time: '1 gio truoc', type: 'course' },
  { id: 4, action: 'Them giao vien', name: 'ThS. Tran Van Binh', time: '2 gio truoc', type: 'teacher' },
  { id: 5, action: 'Tao lich hoc', name: 'HK1 2024-2025', time: '3 gio truoc', type: 'schedule' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Routing Demo Info */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/20 p-2">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Demo Next.js Routing</h3>
              <p className="text-sm text-muted-foreground">
                Dashboard nay demo cac tinh nang: <span className="text-primary">Static Routes</span>, 
                <span className="text-primary"> Dynamic Routes [id]</span>, 
                <span className="text-primary"> Parallel Routes @modal</span>, 
                <span className="text-primary"> Intercepting Routes (.)</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                  <div className="flex items-center gap-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : stat.trend === 'down' ? (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    ) : null}
                    <span className={stat.trend === 'up' ? 'text-success' : stat.trend === 'down' ? 'text-destructive' : 'text-muted-foreground'}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Students */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Hoc sinh gan day</CardTitle>
            <Link href="/dashboard/students" className="flex items-center gap-1 text-sm text-primary hover:underline">
              Xem tat ca <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {students.slice(0, 5).map((student) => (
                <Link
                  key={student.id}
                  href={`/dashboard/students/${student.id}`}
                  className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-accent"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                      {student.name.split(' ').map(n => n[0]).slice(-2).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{student.class}</Badge>
                    <p className="mt-1 text-sm text-muted-foreground">GPA: {student.gpa}</p>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hoat dong gan day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4">
                  <div className="flex h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity.action}</span>
                      {' - '}
                      <span className="text-primary">{activity.name}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Classes Overview */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Danh sach lop hoc</CardTitle>
          <Link href="/dashboard/classes" className="flex items-center gap-1 text-sm text-primary hover:underline">
            Xem tat ca <ArrowRight className="h-4 w-4" />
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((cls) => (
              <Link
                key={cls.id}
                href={`/dashboard/classes/${cls.id}`}
                className="rounded-lg border border-border p-4 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-foreground">{cls.name}</h4>
                  <Badge variant="outline">Khoi {cls.grade}</Badge>
                </div>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <p>GVCN: {cls.homeroom}</p>
                  <p>So hoc sinh: {cls.studentCount}</p>
                  <p>Phong: {cls.room} - {cls.schedule}</p>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
