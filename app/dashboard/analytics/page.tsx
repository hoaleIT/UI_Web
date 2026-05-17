import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { students, teachers, classes } from '@/lib/data'
import { BarChart3, TrendingUp, Users, GraduationCap, School } from 'lucide-react'

export default function AnalyticsPage() {
  const avgGpa = students.reduce((sum, s) => sum + s.gpa, 0) / students.length
  const excellentStudents = students.filter(s => s.gpa >= 8).length
  const goodStudents = students.filter(s => s.gpa >= 6.5 && s.gpa < 8).length
  const avgStudents = students.filter(s => s.gpa < 6.5).length

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-chart-2/30 bg-chart-2/5">
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-chart-2">Static Route:</span> /dashboard/analytics - 
            Trang thong ke tong hop. Vi du ve static route voi du lieu tinh.
          </p>
        </CardContent>
      </Card>

      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold text-foreground">Thong ke tong hop</h3>
        <p className="text-muted-foreground">Bao cao hoc tap nam hoc 2024-2025</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tong hoc sinh</p>
                <p className="text-3xl font-bold">{students.length}</p>
                <p className="text-xs text-success">+12% so voi nam truoc</p>
              </div>
              <div className="rounded-lg bg-chart-1/10 p-3">
                <Users className="h-6 w-6 text-chart-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tong giao vien</p>
                <p className="text-3xl font-bold">{teachers.length}</p>
                <p className="text-xs text-success">+5% so voi nam truoc</p>
              </div>
              <div className="rounded-lg bg-chart-2/10 p-3">
                <GraduationCap className="h-6 w-6 text-chart-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">So lop hoc</p>
                <p className="text-3xl font-bold">{classes.length}</p>
                <p className="text-xs text-muted-foreground">Khong doi</p>
              </div>
              <div className="rounded-lg bg-chart-3/10 p-3">
                <School className="h-6 w-6 text-chart-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">GPA trung binh</p>
                <p className="text-3xl font-bold">{avgGpa.toFixed(2)}</p>
                <p className="text-xs text-success">+0.3 so voi nam truoc</p>
              </div>
              <div className="rounded-lg bg-chart-4/10 p-3">
                <TrendingUp className="h-6 w-6 text-chart-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Distribution */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Phan bo hoc luc
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Gioi (GPA {'>'}= 8.0)</span>
                  <span className="font-medium text-success">{excellentStudents} hoc sinh ({Math.round(excellentStudents/students.length*100)}%)</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-accent">
                  <div 
                    className="h-full rounded-full bg-success transition-all"
                    style={{ width: `${excellentStudents/students.length*100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Kha (GPA 6.5 - 7.9)</span>
                  <span className="font-medium text-warning">{goodStudents} hoc sinh ({Math.round(goodStudents/students.length*100)}%)</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-accent">
                  <div 
                    className="h-full rounded-full bg-warning transition-all"
                    style={{ width: `${goodStudents/students.length*100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Trung binh (GPA {'<'} 6.5)</span>
                  <span className="font-medium text-destructive">{avgStudents} hoc sinh ({Math.round(avgStudents/students.length*100)}%)</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-accent">
                  <div 
                    className="h-full rounded-full bg-destructive transition-all"
                    style={{ width: `${avgStudents/students.length*100}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Si so theo khoi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[12, 11, 10].map((grade) => {
                const gradeClasses = classes.filter(c => c.grade === grade)
                const totalStudents = gradeClasses.reduce((sum, c) => sum + c.studentCount, 0)
                return (
                  <div key={grade}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Khoi {grade}</span>
                      <span className="font-medium">{totalStudents} hoc sinh ({gradeClasses.length} lop)</span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-accent">
                      <div 
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${totalStudents / 250 * 100}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Students */}
      <Card>
        <CardHeader>
          <CardTitle>Top hoc sinh xuat sac</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {students
              .sort((a, b) => b.gpa - a.gpa)
              .slice(0, 4)
              .map((student, index) => (
                <div key={student.id} className="flex items-center gap-3 rounded-lg border border-border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.class} - GPA: {student.gpa}</p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
