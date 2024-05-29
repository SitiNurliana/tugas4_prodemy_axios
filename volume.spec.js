import { expect } from "chai";
import volume from "./volume.js";

describe ('menghitung volume prisma segitiga', function(){
    //positif test case
    it('test case hasiil volume dengan angka valid', function () {
        const hasil = volume(10, 20, 30)
        expect(hasil).to.equal(3000)
    })

    //negatif test case
    it('test case hasiil volume dengan salah satu angka tipe string', function () {
        const hasil = volume(10, 20, '30')
        expect(hasil).to.equal('Parameter tinggi prisma harus diisi berupa angka')
    })

    //negatif test case
    it('test case hasiil volume dengan mengosongkan angka', function () {
        const hasil = volume()
        expect(hasil).to.equal('Parameter harus diisi')
    })

}

)
