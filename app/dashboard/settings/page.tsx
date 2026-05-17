import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Settings, Bell, Shield, Palette, Globe, Database } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Card className="border-muted-foreground/30 bg-muted/20">
        <CardContent className="py-4">
          {/* <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Static Route:</span> /dashboard/settings - 
            Trang cai dat he thong. Vi du ve nested static route.
          </p> */}
        </CardContent>
      </Card>

      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold text-foreground">Cài đặt hệ thống</h3>
        <p className="text-muted-foreground">Quản lý cấu hình và tùy chọn cho ứng dụng</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Settings */}
        <div className="space-y-6 lg:col-span-2">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Cài đặt chung
              </CardTitle>
              <CardDescription>Cấu hình cơ bản cho hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="school-name">Tên trường</Label>
                <Input id="school-name" defaultValue="Trường THPT Demo" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="school-email">Email liên hệ</Label>
                <Input id="school-email" type="email" defaultValue="contact@school.edu.vn" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="school-phone">Số điện thoại</Label>
                <Input id="school-phone" defaultValue="028 1234 5678" />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Thông báo
              </CardTitle>
              <CardDescription>Quản lý các tùy chọn thông báo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Thông báo email</p>
                  <p className="text-sm text-muted-foreground">Nhận thông báo qua email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Thông báo SMS</p>
                  <p className="text-sm text-muted-foreground">Nhận thông báo qua tin nhắn</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Thông báo học sinh</p>
                  <p className="text-sm text-muted-foreground">Gửi thông báo cho học sinh</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Bảo mật
              </CardTitle>
              <CardDescription>Cấu hình bảo mật hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Xác thực 2 yếu tố</p>
                  <p className="text-sm text-muted-foreground">Yêu cầu xác thực thêm khi đăng nhập</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Tự động đăng xuất</p>
                  <p className="text-sm text-muted-foreground">Đăng xuất sau 30 phút không hoạt động</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Theme Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Giao diện
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Chế độ tối</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Chế độ gọn</span>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Ngôn ngữ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-primary bg-primary/10 p-3">
                  <span className="font-medium">Tiếng Việt</span>
                  <span className="text-xs text-primary">Hiện tại</span>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-lg border border-border p-3 hover:bg-accent">
                  <span>English</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Database Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Cơ sở dữ liệu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Trạng thái</span>
                <span className="font-medium text-success">Hoạt động</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Phiên bản</span>
                <span className="font-medium">Demo v1.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Sao lưu</span>
                <span className="font-medium">Mới nhất: Hôm nay</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Hủy bỏ</Button>
        <Button>Lưu thay đổi</Button>
      </div>
    </div>
  )
}
