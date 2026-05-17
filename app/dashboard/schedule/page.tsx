import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'

const scheduleData = [
  { time: '07:00 - 07:45', mon: 'Toán', tue: 'Văn', wed: 'Lý', thu: 'Hóa', fri: 'Anh', sat: 'TĐ' },
  { time: '07:50 - 08:35', mon: 'Toán', tue: 'Văn', wed: 'Lý', thu: 'Hóa', fri: 'Anh', sat: 'TĐ' },
  { time: '08:50 - 09:35', mon: 'Văn', tue: 'Toán', wed: 'Anh', thu: 'Sinh', fri: 'Sử', sat: 'Địa' },
  { time: '09:40 - 10:25', mon: 'Văn', tue: 'Toán', wed: 'Anh', thu: 'Sinh', fri: 'Sử', sat: 'Địa' },
  { time: '10:35 - 11:20', mon: 'Anh', tue: 'Lý', wed: 'GDCD', thu: 'Toán', fri: 'Văn', sat: 'CN' },
]

const subjects: Record<string, string> = {
  'Toán': 'bg-chart-1/20 text-chart-1',
  'Văn': 'bg-chart-2/20 text-chart-2',
  'Anh': 'bg-chart-3/20 text-chart-3',
  'Lý': 'bg-chart-4/20 text-chart-4',
  'Hóa': 'bg-chart-5/20 text-chart-5',
  'Sinh': 'bg-primary/20 text-primary',
  'Sử': 'bg-destructive/20 text-destructive',
  'Địa': 'bg-success/20 text-success',
  'TĐ': 'bg-warning/20 text-warning',
  'GDCD': 'bg-muted text-muted-foreground',
  'CN': 'bg-accent text-accent-foreground',
}

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="py-4">
          {/* <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Static Route:</span> /dashboard/schedule - 
            Xem thoi khoa bieu toan truong. Day la vi du ve static route don gian.
          </p> */}
        </CardContent>
      </Card>

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Thời khóa biểu</h3>
          <p className="text-muted-foreground">Học kỳ 1 - Năm học 2024-2025</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Calendar className="h-3 w-3" />
            Tuan 20
          </Badge>
          <Badge variant="secondary">Lớp 12A1</Badge>
        </div>
      </div>

      {/* Schedule Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Lịch học trong tuần
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-border bg-muted p-3 text-left text-sm font-medium">Tiết</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thứ 2</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thứ 3</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thứ 4</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thứ 5</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thứ 6</th>
                  <th className="border border-border bg-muted p-3 text-center text-sm font-medium">Thứ 7</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-border p-3 text-sm">
                      <div className="font-medium">Tiet {index + 1}</div>
                      <div className="text-xs text-muted-foreground">{row.time}</div>
                    </td>
                    {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'].map((day) => {
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
          <CardTitle className="text-sm">Chú thích môn học</CardTitle>
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
