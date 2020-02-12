/* eslint-disable */
export class DateTools {
  getDateAndTimeStr(date) {
    const dd = new Date(date);
    const y = dd.getFullYear();
    const yStr = y.toString();
    const m = dd.getMonth() + 1; // 获取当前月份的日期
    const mStr = m < 10 ? '0' + m : m.toString();
    const d = dd.getDate();
    const dStr = d < 10 ? '0' + d : d.toString();

    const h = dd.getHours();
    const hStr = h > 9 ? h.toString() : '0' + h.toString();
    const min = dd.getMinutes();
    const minStr = min > 9 ? min.toString() : '0' + min.toString();
    const s = dd.getSeconds();
    const sStr = s > 9 ? s.toString() : '0' + s.toString();
    return yStr + '-' + mStr + '-' + dStr + ' ' + hStr + ':' + minStr + ':' + sStr;
  }

  getDateStr(date) {
    const dd = new Date(date);
    //  dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
    const y = dd.getFullYear();
    const yStr = y.toString();
    const m = dd.getMonth() + 1; // 获取当前月份的日期
    const mStr = m < 10 ? '0' + m : m.toString();
    const d = dd.getDate();
    const dStr = d < 10 ? '0' + d : d.toString();
    return yStr + '-' + mStr + '-' + dStr;
  }

  // 获取当前账期时间
  getCurDate(realDate) {
    if (!realDate) {
      realDate = new Date();
    }
    const time = new Date(realDate).getTime() - 8 * 60 * 60 * 1000;
    return new Date(time);
  }

  getCurDateStr(realDate) {
    if (!realDate) {
      realDate = new Date();
    }
    const time = new Date(realDate).getTime() - 8 * 60 * 60 * 1000;
    const date = new Date(time);
    const str = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    return str;
  }
}
