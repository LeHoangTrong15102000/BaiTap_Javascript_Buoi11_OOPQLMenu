export class Menu {
    mangMonAn =  [];// [{...},{...}]


    constructor () {

    }

    themMonAn = (monAnMoi) => {

        // Bất kì lệnh nào trong khối try xảy ra lỗi => hủy không chạy tiếp mà sẽ chạy và catch
        try {
            this.mangMonAn.push(monAnMoi)
        } catch(ex) {
            console.log(ex)
            return false
        }

        // Nếu không có lỗi thì return là true
        return true;
    }

    xoaMonAn = () => {

    }

    chinhSuaMonAn = () => {

    }

    timKiemMonAn = () => {

    }

    // Render món ăn ra giao diện
} 