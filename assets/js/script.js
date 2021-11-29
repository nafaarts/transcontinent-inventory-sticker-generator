var qrcode = new QRCode("QRCODE", {
    text: "https://n.nafaarts.com",
    colorDark: "#000000",
    colorLight: "#ffffff",
    useSVG: true
})

let kode = document.getElementById('kode')
kode.addEventListener('keyup', () => {
    document.getElementById('item-code').textContent = kode.value
})

let deskripsi = document.getElementById('deskripsi')
deskripsi.addEventListener('change', () => {
    qrcode.makeCode(deskripsi.value)
})

document.getElementById('print').addEventListener('click', () => {
    window.print()
})

// document.getElementById('save-image').addEventListener('click', () => {
//     html2canvas(document.querySelector(".sticker")).then(canvas => {
//         var link = document.createElement('a')
//         link.download = (kode.value != '' ? kode.value.replace(/\s/g, '-') : 'sample') + '.png'
//         link.href = canvas.toDataURL()
//         link.click()
//     })
// })

let config = {
    width: 2.5,
    height: 3.5,
    red: '#ff0000',
    blue: '#0e2267',
    white: '#ffffff',
    headerFontSize: 8,
    codeFontSize: 7
}

// blue : 0 - 1.03cm = 1.03cm : 29.42%
// white : 1.03 - 1.13cm = 0.1cm : 2.85%
// red : 1.13 - 3.5cm = 2.37cm :  67.73%

// blue : 0 - 10.3mm
// white : 10.3 - 11.3mm 1
// red : 11.3 - 35mm 23.7 

