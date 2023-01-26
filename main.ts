const mySerial = Utility.encodeSerial(control.deviceSerialNumber())

radio.setGroup(5)
radio.setTransmitSerialNumber(true)

let code = 12

let codeValue = false
let grpValue = false

let nextCode = 0
let nextGroup = 0

input.onButtonPressed(Button.A, function(){
    radio.sendNumber(code)
})

//radio.onReceivedNumber(function(receivedNumber){
  //  whaleysans.showNumber(receivedNumber)
//})

radio.onReceivedValue(function(key, value){

    basic.showNumber(value)

    if (Utility.decodeSerial(key) == control.deviceSerialNumber()){
        nextCode = value
        codeValue = true
    }else if (key == "grp"){
        nextGroup = value
        grpValue = true
    }

    if (codeValue && grpValue){
        radio.setGroup(nextGroup)
        code = nextCode
        let codeValue = false
        let grpValue = false
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
    }
})