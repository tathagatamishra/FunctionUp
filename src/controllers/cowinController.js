let axios = require('axios')

//--------------------------------------------
// get all states of India

let getStates = async function (req, res) {

    try {
        let api = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let response = await axios(api);
        console.log(response)
        let theData = response.data
        res.status(200).send({ data: theData, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//--------------------------------------------
// get all districts of state by id

let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let api = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let response = await axios(api);
        console.log(response)
        let theData = response.data
        res.status(200).send({ data: theData, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//--------------------------------------------
// get by pin of location

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date

        console.log(`query params are: ${pin} ${date}`)

        let api = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let response = await axios(api)
        console.log(response.data)
        res.status(200).send({ msg: response.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//--------------------------------------------
// get otp in mobile number

let getOtp = async function (req, res) {
    try {
        let phone = req.body

        console.log(`body is : ${phone} `)

        let api = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: phone
        }
        let response = await axios(api)
        console.log(response.data)
        res.status(200).send({ msg: response.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp