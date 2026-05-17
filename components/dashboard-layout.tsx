'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  School,
  Settings,
  Calendar,
  BarChart3,
  Search,
  Bell,
  ChevronRight,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const navigation = [
  { name: 'Tong quan', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Hoc sinh', href: '/dashboard/students', icon: Users },
  { name: 'Giao vien', href: '/dashboard/teachers', icon: GraduationCap },
  { name: 'Lop hoc', href: '/dashboard/classes', icon: School },
  { name: 'Mon hoc', href: '/dashboard/courses', icon: BookOpen },
  { name: 'Lich hoc', href: '/dashboard/schedule', icon: Calendar },
  { name: 'Thong ke', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Cai dat', href: '/dashboard/settings', icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-sidebar-foreground">EduManager</h1>
            <p className="text-xs text-muted-foreground">School Admin</p>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Tim kiem..."
              className="h-9 bg-sidebar-accent pl-9 text-sm placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-2">
          <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Menu chinh
          </p>
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/dashboard' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-sidebar-accent text-primary'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
                {isActive && (
                  <ChevronRight className="ml-auto h-4 w-4" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* User info */}
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent px-3 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
              AD
            </div>
            <div className="flex-1 truncate">
              <p className="text-sm font-medium text-sidebar-foreground">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@school.edu.vn</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export function DashboardHeader() {
  const pathname = usePathname()
  
  const getTitle = () => {
    if (pathname === '/dashboard') return 'Tong quan'
    if (pathname.startsWith('/dashboard/students')) return 'Quan ly hoc sinh'
    if (pathname.startsWith('/dashboard/teachers')) return 'Quan ly giao vien'
    if (pathname.startsWith('/dashboard/classes')) return 'Quan ly lop hoc'
    if (pathname.startsWith('/dashboard/courses')) return 'Quan ly mon hoc'
    if (pathname.startsWith('/dashboard/schedule')) return 'Lich hoc'
    if (pathname.startsWith('/dashboard/analytics')) return 'Thong ke'
    if (pathname.startsWith('/dashboard/settings')) return 'Cai dat'
    return 'Dashboard'
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div>
        <h2 className="text-xl font-semibold text-foreground">{getTitle()}</h2>
        <p className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs" variant="destructive">
            3
          </Badge>
        </button>
      </div>
    </header>
  )
}
