import type { Translation } from '../utilities/localize.js';
import { registerDefaultTranslation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'th',
  $name: 'Thai',
  $dir: 'ltr',

  breadcrumbs: 'เส้นทางนำทาง',
  carousel: 'ภาพหมุน',
  clearEntry: 'ล้างรายการ',
  close: 'ปิด',
  collapse: 'ยุบ',
  colorValue: 'ค่าของสี',
  copied: 'คัดลอกแล้ว',
  copyToClipboard: 'คัดลอกไปยังคลิปบอร์ด',
  decrease: 'ลด',
  disabled: 'ปิดใช้งาน',
  dragFileHereOrChooseFromFolder: 'ลากไฟล์มาที่นี่หรือเลือกจากโฟลเดอร์',
  dragFilesHereOrChooseFromFolder: 'ลากไฟล์มาที่นี่หรือเลือกจากโฟลเดอร์',
  error: 'ข้อผิดพลาด',
  expand: 'ขยาย',
  feed: 'ฟีด',
  firstPage: 'หน้าแรก',
  hidePassword: 'ซ่อนรหัสผ่าน',
  hide: 'ซ่อน',
  hue: 'Hue',
  increase: 'เพิ่ม',
  itemAdded: item => `${item} เพิ่มแล้ว`,
  itemRemoved: item => `${item} ลบแล้ว`,
  itemSelected: item => `${item} เลือกแล้ว`,
  jumpBackward: 'กระโดดกลับ',
  jumpForward: 'กระโดดไปข้างหน้า',
  lastPage: 'หน้าสุดท้าย',
  loading: 'กำลังโหลด',
  multipleSelectionsAllowed: 'อนุญาตให้เลือกหลายรายการ',
  next: 'ถัดไป',
  noResultsFound: 'ไม่พบผลลัพธ์',
  numberOfTotal: (number, total) => `${number} จาก ${total}`,
  opacity: 'ความโปร่งใส',
  pageNumber: number => `หน้า ${number}`,
  pagination: 'การแบ่งหน้า',
  percentLuminosity: (percentage: string) => `${percentage} ความสว่าง`,
  percentSaturation: (percentage: string) => `${percentage} ความอิ่มตัว`,
  pleaseSelectAnOption: 'กรุณาเลือกตัวเลือก',
  pressSpaceForOneSecondToActivate: 'กดแถบเว้นวรรคเป็นเวลา 1 วินาทีเพื่อเปิดใช้งาน',
  previous: 'ก่อนหน้า',
  remove: 'ลบ',
  removeItem: item => `ลบ ${item}`,
  resize: 'ปรับขนาด',
  resultsAvailable: count => {
    if (count === 1) return 'มีผลลัพธ์ 1 รายการ';
    return `มีผลลัพธ์ ${count} รายการ`;
  },
  scrollableRegion: 'พื้นที่เลื่อนได้',
  selectAColorFromTheScreen: 'เลือกสีจากหน้าจอ',
  selected: 'เลือกแล้ว',
  share: 'แชร์',
  showPassword: 'แสดงรหัสผ่าน',
  show: 'แสดง',
  showingNumberOfTotalItems: (number: number, total: number) => {
    if (number === 1) return `แสดง ${number} จาก ${total} ${total === 1 ? 'รายการ' : 'รายการ'}`;
    return `แสดง ${number} จาก ${total} รายการ`;
  },
  showingAllNumberItems: (number: number) => {
    if (number === 1) return `แสดง ${number} รายการ`;
    return `แสดงทั้งหมด ${number} รายการ`;
  },
  spoiler: 'Spoiler',
  toggleNavigation: 'สลับการนำทาง',
  useArrowKeysToNavigateEnterToSelect: 'ใช้ปุ่มลูกศรเพื่อนำทางตัวเลือก กด Enter เพื่อเลือก',
  visualComparisonSlider: 'แถบเลื่อนเปรียบเทียบภาพ',
  zoomIn: 'ซูมเข้า',
  zoomOut: 'ซูมออก'
};

registerDefaultTranslation(translation);

export default translation;
