import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'

const scheduleData = [
  { time: '07:00 - 07:45', mon: 'Toan', tue: 'Van', wed: 'Ly', thu: 'Hoa', fri: 'Anh', sat: 'TD' },
  { time: '07:50 - 08:35', mon: 'Toan', tue: 'Van', wed: 'Ly', thu: 'Hoa', fri: 'Anh', sat: 'TD' },
  { time: '08:50 - 09:35', mon: 'Van', tue: 'Toan', wed: 'Anh', thu: 'Sinh', fri: 'Su', sat: 'Dia' },
  { time: '09:40 - 10:25', mon: 'Van', tue: 'Toan', wed: 'Anh', thu: 'Sinh', fri: 'Su', sat: 'Dia' },
  { time: '10:35 - 11:20', mon: 'Anh', tue: 'Ly', wed: 'GDCD', thu: 'Toan', fri: 'Van', sat: 'CN' },
]

const subjects: Record<string, string> = {
  'Toan': 'bg-chart-1/20 text-chart-1',
  'Van': 'bg-chart-2/20 text-chart-2',
  'Anh': 'bg-chart-3/20 text-chart-3',
  'Ly': 'bg-chart-4/20 text-chart-4',
  'Hoa': 'bg-chart-5/20 text-chart-5',
  'Sinh': 'bg-primary/20 text-primary',
  'Su': 'bg-destructive/20 text-destructive',
  'Dia': 'bg-success/20 text-success',
  'TD': 'bg-warning/20 text-warning',
  'GDCD': 'bg-muted text-muted-foreground',
  'CN': 'bg-accent text-accent-foreground',
}

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Static Route:</span> /dashboard/schedule - 
            Xem thoi khoa bieu toan truong. Day la vi du ve static route don gian.
          </p>
        </CardContent>
      </Card>

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Thoi khoa bieu</h3>
          <p className="text-muted-foreground">Hoc ky 1 - Nam hoc 2024-2025</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Calendar className="h-3 w-3" />
            Tuan 20
          </Badge>
          <Badge variant="secondary">Lop 12A1</Badge>
        </div>
      </div>

      {/* Schedule Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Lich hoc trong tuan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-border bg-muted p-3 text-left text-sm font-medium">Tiet</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thu 2</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thu 3</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thu 4</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thu 5</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thu 6</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thu 7</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-border p-3 text-sm">
                      <div className="font-medium">Tiet {index + 1}</div>
                      <div className="text-xs text-muted-foreground">{row.time}</div>
                    </td>
                    {['mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day) => {
                      const subject = row[day as keyof typeof row]
                      return (
                        <td key={day} className="border border-border p-2 text-center">
                          <div className={`rounded-lg px-3 py-2 text-sm font-medium ${subjects[subject] || 'bg-muted'}`}>
                            {subject}
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Chu thich mon hoc</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {Object.entries(subjects).map(([name, className]) => (
              <Badge key={name} variant="outline" className={`${className} border-0`}>
                {name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
