const { loginUser, verifyEmail, resendVerificationEmail, forgotPassword, changePassword, resetPassword, getOne, logOut, farmerSignUp, updatePicture, updateUser, uploadDP} = require("../controller/farmerController")
const { authorize, isAdmin } = require("../middleware/authentication")
const express = require(`express`)
const upload = require("../utils/multer")
const { FarmerlogInValidator,FarmerSingUpValidator } = require("../middleware/validator")
const router = express.Router()


router.post(`/farmer-signup`,FarmerSingUpValidator,farmerSignUp)

router.post(`/farmer-login`,FarmerlogInValidator, loginUser)

router.get(`/verify/:token`, verifyEmail)

router.post(`/resend-verification`, resendVerificationEmail)

router.put(`/update-user/:userID`, upload.single('profilePicture'), updateUser)

router.post(`/forgot-password`, forgotPassword)

router.post(`/change-password/:token`, changePassword)

router.post(`/reset-password/:token`, resetPassword)

router.post(`/update-profilepicture/:token`, uploadDP)

router.post(`/log-out`, logOut)

module.exports = router 