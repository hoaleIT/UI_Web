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
  { id: '1', name: 'Nguyen Van An', email: 'an.nguyen@school.edu.vn', class: '12A1', dateOfBirth: '2008-05-15', phone: '0901234567', address: '123 Le Loi, Q1, HCM', gpa: 8.5, status: 'active' },
  { id: '2', name: 'Tran Thi Bich', email: 'bich.tran@school.edu.vn', class: '12A1', dateOfBirth: '2008-03-22', phone: '0912345678', address: '456 Nguyen Hue, Q1, HCM', gpa: 9.2, status: 'active' },
  { id: '3', name: 'Le Hoang Cuong', email: 'cuong.le@school.edu.vn', class: '12A2', dateOfBirth: '2008-08-10', phone: '0923456789', address: '789 Hai Ba Trung, Q3, HCM', gpa: 7.8, status: 'active' },
  { id: '4', name: 'Pham Minh Duc', email: 'duc.pham@school.edu.vn', class: '12A2', dateOfBirth: '2008-01-05', phone: '0934567890', address: '321 Vo Van Tan, Q3, HCM', gpa: 8.9, status: 'active' },
  { id: '5', name: 'Hoang Thi Em', email: 'em.hoang@school.edu.vn', class: '11A1', dateOfBirth: '2009-11-20', phone: '0945678901', address: '654 Cach Mang Thang 8, Q10, HCM', gpa: 9.0, status: 'active' },
  { id: '6', name: 'Vo Van Phuc', email: 'phuc.vo@school.edu.vn', class: '11A1', dateOfBirth: '2009-07-14', phone: '0956789012', address: '987 Ly Thuong Kiet, Q10, HCM', gpa: 7.5, status: 'active' },
  { id: '7', name: 'Dang Thi Giang', email: 'giang.dang@school.edu.vn', class: '11A2', dateOfBirth: '2009-04-30', phone: '0967890123', address: '147 Tran Hung Dao, Q5, HCM', gpa: 8.7, status: 'active' },
  { id: '8', name: 'Bui Quoc Huy', email: 'huy.bui@school.edu.vn', class: '10A1', dateOfBirth: '2010-09-25', phone: '0978901234', address: '258 Nguyen Trai, Q5, HCM', gpa: 8.2, status: 'active' },
]

export const teachers: Teacher[] = [
  { id: '1', name: 'PGS.TS Nguyen Minh Tuan', email: 'tuan.nguyen@school.edu.vn', subject: 'Toan hoc', phone: '0901111111', department: 'Khoa Toan', joinDate: '2015-08-01', status: 'active' },
  { id: '2', name: 'ThS. Tran Thi Lan', email: 'lan.tran@school.edu.vn', subject: 'Vat ly', phone: '0902222222', department: 'Khoa Ly', joinDate: '2018-09-01', status: 'active' },
  { id: '3', name: 'TS. Le Van Hung', email: 'hung.le@school.edu.vn', subject: 'Hoa hoc', phone: '0903333333', department: 'Khoa Hoa', joinDate: '2016-08-01', status: 'active' },
  { id: '4', name: 'ThS. Pham Thi Mai', email: 'mai.pham@school.edu.vn', subject: 'Ngu van', phone: '0904444444', department: 'Khoa Van', joinDate: '2017-09-01', status: 'active' },
  { id: '5', name: 'CN. Hoang Van Nam', email: 'nam.hoang@school.edu.vn', subject: 'Tieng Anh', phone: '0905555555', department: 'Khoa Ngoai Ngu', joinDate: '2019-08-01', status: 'active' },
  { id: '6', name: 'ThS. Vo Thi Oanh', email: 'oanh.vo@school.edu.vn', subject: 'Sinh hoc', phone: '0906666666', department: 'Khoa Sinh', joinDate: '2020-09-01', status: 'on-leave' },
]

export const classes: Class[] = [
  { id: '1', name: '12A1', grade: 12, homeroom: 'PGS.TS Nguyen Minh Tuan', studentCount: 35, room: 'P.301', schedule: 'Sang' },
  { id: '2', name: '12A2', grade: 12, homeroom: 'ThS. Tran Thi Lan', studentCount: 34, room: 'P.302', schedule: 'Sang' },
  { id: '3', name: '11A1', grade: 11, homeroom: 'TS. Le Van Hung', studentCount: 36, room: 'P.201', schedule: 'Sang' },
  { id: '4', name: '11A2', grade: 11, homeroom: 'ThS. Pham Thi Mai', studentCount: 35, room: 'P.202', schedule: 'Chieu' },
  { id: '5', name: '10A1', grade: 10, homeroom: 'CN. Hoang Van Nam', studentCount: 38, room: 'P.101', schedule: 'Sang' },
  { id: '6', name: '10A2', grade: 10, homeroom: 'ThS. Vo Thi Oanh', studentCount: 37, room: 'P.102', schedule: 'Chieu' },
]

export const courses: Course[] = [
  { id: '1', name: 'Dai so tuyen tinh', code: 'MATH101', teacher: 'PGS.TS Nguyen Minh Tuan', credits: 3, semester: 'HK1 2024-2025', studentCount: 120 },
  { id: '2', name: 'Vat ly dai cuong', code: 'PHYS101', teacher: 'ThS. Tran Thi Lan', credits: 4, semester: 'HK1 2024-2025', studentCount: 95 },
  { id: '3', name: 'Hoa hoc huu co', code: 'CHEM201', teacher: 'TS. Le Van Hung', credits: 3, semester: 'HK1 2024-2025', studentCount: 85 },
  { id: '4', name: 'Van hoc Viet Nam', code: 'LIT101', teacher: 'ThS. Pham Thi Mai', credits: 2, semester: 'HK1 2024-2025', studentCount: 140 },
  { id: '5', name: 'Tieng Anh giao tiep', code: 'ENG201', teacher: 'CN. Hoang Van Nam', credits: 3, semester: 'HK1 2024-2025', studentCount: 110 },
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
