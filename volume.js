function volume(asegitiga, tsegitiga, tprisma){

    if (asegitiga === undefined || asegitiga === null) return 'Parameter harus diisi'

    if(typeof asegitiga !== 'number') return 'Parameter alas segitiga harus diisi berupa angka'
    if(typeof tsegitiga !== 'number') return 'Parameter tinggi segitiga harus diisi berupa angka'
    if(typeof tprisma !== 'number') return 'Parameter tinggi prisma harus diisi berupa angka'


    const hasil = (asegitiga * tsegitiga/2)*tprisma

    return hasil 

}
export default volume
