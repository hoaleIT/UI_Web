// Mock data for school management system

export interface Student {
  id: string
  name: string
  email: string
  class: string
  avatar?: string
  dateOfBirth: string
  phone: string
  address: string
  gpa: number
  status: 'active' | 'inactive' | 'graduated'
}

export interface Teacher {
  id: string
  name: string
  email: string
  subject: string
  avatar?: string
  phone: string
  department: string
  joinDate: string
  status: 'active' | 'on-leave' | 'resigned'
}

export interface Class {
  id: string
  name: string
  grade: number
  homeroom: string
  studentCount: number
  room: string
  schedule: string
}

export interface Course {
  id: string
  name: string
  code: string
  teacher: string
  credits: number
  semester: string
  studentCount: number
}

export const students: Student[] = [
  { id: '1', name: 'Nguyễn Văn An', email: 'an.nguyen@school.edu.vn', class: '12A1', dateOfBirth: '2008-05-15', phone: '0901234567', address: '123 Lê Lợi, Q1, HCM', gpa: 8.5, status: 'active' },
  { id: '2', name: 'Trần Thị Bích', email: 'bich.tran@school.edu.vn', class: '12A1', dateOfBirth: '2008-03-22', phone: '0912345678', address: '456 Nguyễn Huệ, Q1, HCM', gpa: 9.2, status: 'active' },
  { id: '3', name: 'Lê Hoàng Cường', email: 'cuong.le@school.edu.vn', class: '12A2', dateOfBirth: '2008-08-10', phone: '0923456789', address: '789 Hai Bà Trưng, Q3, HCM', gpa: 7.8, status: 'active' },
  { id: '4', name: 'Phạm Minh Đức', email: 'duc.pham@school.edu.vn', class: '12A2', dateOfBirth: '2008-01-05', phone: '0934567890', address: '321 Võ Văn Tần, Q3, HCM', gpa: 8.9, status: 'active' },
  { id: '5', name: 'Hoàng Thị Ems', email: 'em.hoang@school.edu.vn', class: '11A1', dateOfBirth: '2009-11-20', phone: '0945678901', address: '654 Cách Mạng Tháng Tám, Q10, HCM', gpa: 9.0, status: 'active' },
  { id: '6', name: 'Võ Văn Phúc', email: 'phuc.vo@school.edu.vn', class: '11A1', dateOfBirth: '2009-07-14', phone: '0956789012', address: '987 Lý Thường Kiệt, Q10, HCM', gpa: 7.5, status: 'active' },
  { id: '7', name: 'Đặng Thị Giang', email: 'giang.dang@school.edu.vn', class: '11A2', dateOfBirth: '2009-04-30', phone: '0967890123', address: '147 Trần Hưng Đạo, Q5, HCM', gpa: 8.7, status: 'active' },
  { id: '8', name: 'Bùi Quốc Huy', email: 'huy.bui@school.edu.vn', class: '10A1', dateOfBirth: '2010-09-25', phone: '0978901234', address: '258 Nguyễn Trãi, Q5, HCM', gpa: 8.2, status: 'active' },
]

export const teachers: Teacher[] = [
  { id: '1', name: 'PGS.TS Nguyễn Minh Tuấn', email: 'tuan.nguyen@school.edu.vn', subject: 'Toán hoc', phone: '0901111111', department: 'Khoa Toán', joinDate: '2015-08-01', status: 'active' },
  { id: '2', name: 'ThS. Trần Thị Lan', email: 'lan.tran@school.edu.vn', subject: 'Vật lý', phone: '0902222222', department: 'Khoa Lý', joinDate: '2018-09-01', status: 'active' },
  { id: '3', name: 'TS. Lê Văn Hưng', email: 'hung.le@school.edu.vn', subject: 'Hóa học', phone: '0903333333', department: 'Khoa Hóa', joinDate: '2016-08-01', status: 'active' },
  { id: '4', name: 'ThS. Phạm Thị Mai', email: 'mai.pham@school.edu.vn', subject: 'Ngữ văn', phone: '0904444444', department: 'Khoa Văn', joinDate: '2017-09-01', status: 'active' },
  { id: '5', name: 'CN. Hoàng Văn Nam', email: 'nam.hoang@school.edu.vn', subject: 'Tiếng Anh', phone: '0905555555', department: 'Khoa Ngoại Ngữ', joinDate: '2019-08-01', status: 'active' },
  { id: '6', name: 'ThS. Võ Thị Oanh', email: 'oanh.vo@school.edu.vn', subject: 'Sinh học', phone: '0906666666', department: 'Khoa Sinh', joinDate: '2020-09-01', status: 'on-leave' },
]

export const classes: Class[] = [
  { id: '1', name: '12A1', grade: 12, homeroom: 'PGS.TS Nguyễn Minh Tuấn', studentCount: 35, room: 'P.301', schedule: 'Sáng' },
  { id: '2', name: '12A2', grade: 12, homeroom: 'ThS. Trần Thị Lan', studentCount: 34, room: 'P.302', schedule: 'Sáng' },
  { id: '3', name: '11A1', grade: 11, homeroom: 'TS. Lê Văn Hưng', studentCount: 36, room: 'P.201', schedule: 'Sáng' },
  { id: '4', name: '11A2', grade: 11, homeroom: 'ThS. Phạm Thị Mai', studentCount: 35, room: 'P.202', schedule: 'Chiều' },
  { id: '5', name: '10A1', grade: 10, homeroom: 'CN. Hoàng Văn Nam', studentCount: 38, room: 'P.101', schedule: 'Sáng' },
  { id: '6', name: '10A2', grade: 10, homeroom: 'ThS. Võ Thị Oanh', studentCount: 37, room: 'P.102', schedule: 'Chiều' },
]

export const courses: Course[] = [
  { id: '1', name: 'Đại số tuyến tính', code: 'MATH101', teacher: 'PGS.TS Nguyễn Minh Tuấn', credits: 3, semester: 'HK1 2024-2025', studentCount: 120 },
  { id: '2', name: 'Vật lý đại cương', code: 'PHYS101', teacher: 'ThS. Trần Thị Lan', credits: 4, semester: 'HK1 2024-2025', studentCount: 95 },
  { id: '3', name: 'Hóa học hữu cơ', code: 'CHEM201', teacher: 'TS. Lê Văn Hưng', credits: 3, semester: 'HK1 2024-2025', studentCount: 85 },
  { id: '4', name: 'Văn học Việt Nam', code: 'LIT101', teacher: 'ThS. Phạm Thị Mai', credits: 2, semester: 'HK1 2024-2025', studentCount: 140 },
  { id: '5', name: 'Tiếng Anh giao tiếp', code: 'ENG201', teacher: 'CN. Hoàng Văn Nam', credits: 3, semester: 'HK1 2024-2025', studentCount: 110 },
]

export function getStudentById(id: string): Student | undefined {
  return students.find(s => s.id === id)
}

export function getTeacherById(id: string): Teacher | undefined {
  return teachers.find(t => t.id === id)
}

export function getClassById(id: string): Class | undefined {
  return classes.find(c => c.id === id)
}

export function getCourseById(id: string): Course | undefined {
  return courses.find(c => c.id === id)
}

export function getStudentsByClass(className: string): Student[] {
  return students.filter(s => s.class === className)
}
