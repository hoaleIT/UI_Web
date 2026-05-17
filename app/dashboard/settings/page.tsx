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
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Static Route:</span> /dashboard/settings - 
            Trang cai dat he thong. Vi du ve nested static route.
          </p>
        </CardContent>
      </Card>

      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold text-foreground">Cai dat he thong</h3>
        <p className="text-muted-foreground">Quan ly cau hinh va tuy chon cho ung dung</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Settings */}
        <div className="space-y-6 lg:col-span-2">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Cai dat chung
              </CardTitle>
              <CardDescription>Cau hinh co ban cho he thong</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="school-name">Ten truong</Label>
                <Input id="school-name" defaultValue="Truong THPT Demo" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="school-email">Email lien he</Label>
                <Input id="school-email" type="email" defaultValue="contact@school.edu.vn" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="school-phone">So dien thoai</Label>
                <Input id="school-phone" defaultValue="028 1234 5678" />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Thong bao
              </CardTitle>
              <CardDescription>Quan ly cac tuy chon thong bao</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Thong bao email</p>
                  <p className="text-sm text-muted-foreground">Nhan thong bao qua email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Thong bao SMS</p>
                  <p className="text-sm text-muted-foreground">Nhan thong bao qua tin nhan</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Thong bao hoc sinh</p>
                  <p className="text-sm text-muted-foreground">Gui thong bao cho hoc sinh</p>
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
                Bao mat
              </CardTitle>
              <CardDescription>Cau hinh bao mat he thong</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Xac thuc 2 yeu to</p>
                  <p className="text-sm text-muted-foreground">Yeu cau xac thuc them khi dang nhap</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Tu dong dang xuat</p>
                  <p className="text-sm text-muted-foreground">Dang xuat sau 30 phut khong hoat dong</p>
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
                Giao dien
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Che do toi</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Compact mode</span>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Ngon ngu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-primary bg-primary/10 p-3">
                  <span className="font-medium">Tieng Viet</span>
                  <span className="text-xs text-primary">Hien tai</span>
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
                Co so du lieu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Trang thai</span>
                <span className="font-medium text-success">Hoat dong</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Phien ban</span>
                <span className="font-medium">Demo v1.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Sao luu</span>
                <span className="font-medium">Moi nhat: Hom nay</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Huy bo</Button>
        <Button>Luu thay doi</Button>
      </div>
    </div>
  )
}
